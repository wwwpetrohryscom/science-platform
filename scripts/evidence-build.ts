#!/usr/bin/env tsx
/**
 * Build the evidence registry from the corpus.
 *
 * Reads every `## Sources` block, normalises the citations that point at
 * the same URL into one record, and records what each article says that
 * source supports. Curated enrichment in data/evidence/curated.json wins
 * over anything inferred.
 *
 * The registry is derived, not authored: rerunning it after a content
 * change is how it stays true. Nothing here copies source text — only
 * the title, publisher and the note the author already wrote.
 *
 * Usage:
 *   npm run evidence:build
 *   npm run evidence:build -- --check   # fail if the registry is stale
 */
import fs from "node:fs";
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { classify, evidenceIdFor } from "../lib/evidence/classify";
import type {
  CuratedEvidence,
  EvidenceRecord,
  EvidenceRegistry,
  EvidenceUse,
} from "../lib/evidence/types";

const DATA_DIR = path.join(PROJECT_ROOT, "data", "evidence");
const REGISTRY = path.join(DATA_DIR, "registry.json");
const CURATED = path.join(DATA_DIR, "curated.json");

/**
 * `1. **Org** — [Title](url). Note.`
 *
 * The organisation field frequently nests an italic journal name inside
 * the bold — `**Kellis and colleagues, *PNAS*** — [...]` — so it cannot
 * be matched with `[^*]+`. Matching lazily up to the em dash that
 * precedes the link handles both shapes; the trailing asterisks are
 * trimmed afterwards.
 */
const CITATION = /^\s*\d+\.\s+(?:(?<org>.+?)\s*[—–-]\s*)?\[(?<title>[^\]]+)\]\((?<url>https?:\/\/[^)\s]+)\)\.?\s*(?<note>.*)$/;

/** Strip the markdown emphasis the citation line uses for display. */
function cleanOrg(raw: string): string {
  return raw.replace(/\*+/g, "").replace(/\s+/g, " ").trim();
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

function doiOf(url: string, title: string): string | undefined {
  const m = url.match(/doi\.org\/(10\.\d{4,9}\/\S+)/i);
  if (m) return m[1];
  const inTitle = title.match(/\b(10\.\d{4,9}\/\S+)\b/);
  return inTitle ? inTitle[1] : undefined;
}

async function main() {
  const check = process.argv.includes("--check");
  const walked = await walkAllContent();
  // Curation has two levels. Host rules cover a whole publisher — every
  // URL on nsidc.org is a continuously-updated product — and record rules
  // cover the exceptions, because several publishers mix static explainers
  // with live figures on one domain. Record rules win. Both are keyed by
  // things that survive a rebuild.
  const curatedFile: {
    hosts?: Record<string, CuratedEvidence>;
    urls?: Record<string, CuratedEvidence>;
    records?: Record<string, CuratedEvidence>;
  } = fs.existsSync(CURATED) ? JSON.parse(fs.readFileSync(CURATED, "utf8")) : {};
  const curatedHosts = curatedFile.hosts ?? {};
  const curatedUrls = curatedFile.urls ?? {};
  const curated = curatedFile.records ?? {};
  const usedHostRules = new Set<string>();
  const usedUrlRules = new Set<string>();

  const hostRule = (host: string): CuratedEvidence => {
    for (const [pattern, rule] of Object.entries(curatedHosts)) {
      if (host === pattern || host.endsWith(`.${pattern}`)) {
        usedHostRules.add(pattern);
        return rule;
      }
    }
    return {};
  };
  const urlRule = (url: string): CuratedEvidence => {
    const bare = url.replace(/\/+$/, "");
    for (const [pattern, rule] of Object.entries(curatedUrls)) {
      const p = pattern.replace(/\/+$/, "");
      if (bare === p || bare.startsWith(`${p}/`)) {
        usedUrlRules.add(pattern);
        return rule;
      }
    }
    return {};
  };

  const byId = new Map<string, EvidenceRecord>();
  let citationLines = 0;
  let unparsed = 0;

  // English is the source of truth. Translations carry the same URLs by
  // construction (the translation validator enforces it), so counting them
  // would inflate every usage count sixfold without adding a relationship.
  for (const w of walked.filter((x) => x.locale === "en")) {
    const m = /^##\s+Sources([\s\S]*)$/m.exec(w.body);
    if (!m) continue;
    const section = w.kind === "insight" ? "insights" : `${w.category}/${w.subtopic}`;

    // Inline citations in the prose. A link placed next to the claim it
    // supports is the strongest claim-to-evidence signal in the corpus,
    // and ingesting only the Sources block left those sources out of the
    // registry entirely — so the link checker could not tell whether the
    // registry covered them.
    const prose = w.body.replace(/^##\s+Sources[\s\S]*/im, "");
    for (const link of prose.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
      const url = link[2];
      const anchor = link[1].trim().replace(/\s+/g, " ");
      const id = evidenceIdFor(url);
      const use: EvidenceUse = {
        kind: "article",
        slug: w.slug,
        section,
        supports: `Cited inline as "${anchor}"`,
      };
      const existing = byId.get(id);
      if (existing) {
        if (!existing.usedBy.some((u) => u.slug === w.slug)) existing.usedBy.push(use);
        if (!existing.topics.includes(section)) existing.topics.push(section);
        continue;
      }
      const host = hostOf(url);
      const { sourceType, provenance } = classify(host, anchor);
      const cur: CuratedEvidence = {
        ...hostRule(host),
        ...urlRule(url),
        ...(curated[id] ?? {}),
      };
      byId.set(id, {
        evidenceId: id,
        title: anchor,
        organization: cur.organization ?? "",
        url,
        host,
        doi: cur.doi ?? doiOf(url, anchor),
        sourceType: cur.sourceType ?? sourceType,
        sourceTypeProvenance: cur.sourceType ? "curated" : provenance,
        topics: [section],
        usedBy: [use],
        isLiveDataset: cur.isLiveDataset ?? false,
        updateFrequency: cur.updateFrequency,
        verificationStatus: "unchecked",
        notes: cur.notes,
      });
    }

    for (const raw of m[1].split("\n")) {
      if (!/^\s*\d+\.\s/.test(raw)) continue;
      citationLines += 1;
      const c = CITATION.exec(raw);
      if (!c?.groups) {
        unparsed += 1;
        continue;
      }
      const org = cleanOrg(c.groups.org ?? "");
      const supports = c.groups.note.trim().replace(/\s+/g, " ");

      // A numbered citation can name more than one link — "[P waves](…)
      // and [S waves](…)" is one reference to two pages of the same
      // resource. Registering only the first left the second cited but
      // untracked, which the registry check then reported.
      const links = [
        ...raw.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g),
      ].map((m2) => ({ title: m2[1].trim(), url: m2[2] }));

      for (const link of links) {
        const url = link.url;
        const id = evidenceIdFor(url);
        const title = link.title;

        const use: EvidenceUse = { kind: "article", slug: w.slug, section, supports };
        const existing = byId.get(id);
        if (existing) {
          if (!existing.usedBy.some((u) => u.slug === w.slug && u.supports === supports)) {
            existing.usedBy.push(use);
          }
          if (!existing.topics.includes(section)) existing.topics.push(section);
          // Prefer the longest title and a non-empty organisation:
          // different articles cite the same source with different detail.
          if (title.length > existing.title.length) existing.title = title;
          if (!existing.organization && org) existing.organization = org;
          continue;
        }

        const host = hostOf(url);
        const { sourceType, provenance } = classify(host, title);
        const cur: CuratedEvidence = {
          ...hostRule(host),
          ...urlRule(url),
          ...(curated[id] ?? {}),
        };
        byId.set(id, {
          evidenceId: id,
          title,
          organization: cur.organization ?? org,
          url,
          host,
          doi: cur.doi ?? doiOf(url, title),
          sourceType: cur.sourceType ?? sourceType,
          sourceTypeProvenance: cur.sourceType ? "curated" : provenance,
          topics: [section],
          usedBy: [use],
          isLiveDataset: cur.isLiveDataset ?? false,
          updateFrequency: cur.updateFrequency,
          verificationStatus: "unchecked",
          notes: cur.notes,
        });
      }
    }
  }

  // Glossary sources. Registered the same way so the link checker, the
  // stale-source report and the usage counts cover them too.
  const { GLOSSARY } = await import("../lib/glossary");
  let glossaryCitations = 0;
  for (const g of GLOSSARY) {
    for (const s of g.relatedSources ?? []) {
      glossaryCitations += 1;
      const id = evidenceIdFor(s.url);
      const use: EvidenceUse = {
        kind: "glossary",
        slug: g.slug,
        section: "glossary",
        supports: `Definition of ${g.term}`,
      };
      const existing = byId.get(id);
      if (existing) {
        existing.usedBy.push(use);
        if (!existing.topics.includes("glossary")) existing.topics.push("glossary");
        continue;
      }
      const host = hostOf(s.url);
      const { sourceType, provenance } = classify(host, s.label);
      const cur: CuratedEvidence = {
        ...hostRule(host),
        ...urlRule(s.url),
        ...(curated[id] ?? {}),
      };
      byId.set(id, {
        evidenceId: id,
        title: s.label,
        organization: cur.organization ?? "",
        url: s.url,
        host,
        doi: cur.doi ?? doiOf(s.url, s.label),
        sourceType: cur.sourceType ?? sourceType,
        sourceTypeProvenance: cur.sourceType ? "curated" : provenance,
        topics: ["glossary"],
        usedBy: [use],
        isLiveDataset: cur.isLiveDataset ?? false,
        updateFrequency: cur.updateFrequency,
        verificationStatus: "unchecked",
        notes: cur.notes,
      });
    }
  }

  const records = [...byId.values()].sort((a, b) =>
    a.evidenceId.localeCompare(b.evidenceId),
  );
  for (const r of records) {
    r.topics.sort();
    r.usedBy.sort((a, b) => a.slug.localeCompare(b.slug));
  }

  const registry: EvidenceRegistry = {
    generatedDate: new Date().toISOString().slice(0, 10),
    records,
  };

  const serialised = JSON.stringify(registry, null, 1) + "\n";

  if (check) {
    if (!fs.existsSync(REGISTRY)) {
      console.error("✗ registry.json does not exist — run npm run evidence:build");
      process.exit(1);
    }
    const current = JSON.parse(fs.readFileSync(REGISTRY, "utf8")) as EvidenceRegistry;
    const stripDate = (r: EvidenceRegistry) => JSON.stringify(r.records);
    if (stripDate(current) !== stripDate(registry)) {
      console.error(
        `✗ registry.json is stale: corpus has ${records.length} distinct sources, registry has ${current.records.length}. Run npm run evidence:build.`,
      );
      process.exit(1);
    }
    console.log(`✓ registry.json is current — ${records.length} sources`);
    return;
  }

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(REGISTRY, serialised, "utf8");

  const uses = records.reduce((a, r) => a + r.usedBy.length, 0);
  const shared = records.filter((r) => r.usedBy.length > 1).length;
  const byType: Record<string, number> = {};
  for (const r of records) byType[r.sourceType] = (byType[r.sourceType] ?? 0) + 1;

  console.log(`✓ data/evidence/registry.json`);
  console.log(`  ${citationLines} article citation lines parsed (${unparsed} unrecognised) + ${glossaryCitations} glossary citations`);
  console.log(`  ${records.length} distinct sources · ${uses} article uses · ${shared} cited by more than one article`);
  const live = records.filter((r) => r.isLiveDataset).length;
  console.log(`  by type: ${Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
  console.log(`  ${live} marked as continuously-updated products`);

  // A curation rule that matches nothing is either a typo or a source that
  // left the corpus. Either way it should not sit there looking effective.
  const deadHostRules = Object.keys(curatedHosts).filter((h) => !usedHostRules.has(h));
  const deadUrlRules = Object.keys(curatedUrls).filter((u) => !usedUrlRules.has(u));
  const deadIdRules = Object.keys(curated).filter((k) => !byId.has(k));
  for (const [label, list] of [
    ["host", deadHostRules],
    ["url", deadUrlRules],
    ["evidenceId", deadIdRules],
  ] as const) {
    if (list.length) {
      console.log(`  ⚠ ${list.length} curated ${label} rule(s) matched nothing: ${list.slice(0, 5).join(", ")}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
