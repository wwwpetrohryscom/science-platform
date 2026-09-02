#!/usr/bin/env tsx
/**
 * Corpus report.
 *
 * One place that counts what the site actually contains, so a release
 * note or an audit is reading measurements rather than recollection.
 *
 * Usage:
 *   npm run content:report
 *   npm run content:report -- --json
 *   npm run content:report -- --since 2026-09-02   # wave-scoped deltas
 */
import path from "node:path";

import { walkAllContent, LOCALES, articleUrl, type WalkedArticle } from "./_lib";
import { categories } from "../lib/categories";
import { authors } from "../lib/authors";
import { GLOSSARY } from "../lib/glossary";
import { getDiscussions, discussionLocales } from "../lib/discussions";
import { POLICY_DOCUMENTS } from "../lib/editorial";

type Counts = Record<string, number>;

function bump(c: Counts, k: string, n = 1) {
  c[k] = (c[k] ?? 0) + n;
}

/** Math.min(...xs, 0) always returns <= 0 — the seed wins on any
 *  non-empty positive array, which reported every corpus as having a
 *  zero-word article. */
function minOf(xs: number[]): number {
  return xs.length === 0 ? 0 : xs.reduce((a, b) => (b < a ? b : a));
}

function maxOf(xs: number[]): number {
  return xs.length === 0 ? 0 : xs.reduce((a, b) => (b > a ? b : a));
}

function externalUrls(body: string): string[] {
  const stripped = body.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]+`/g, "");
  return [...stripped.matchAll(/\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
}

function internalLinks(body: string): string[] {
  return [...body.matchAll(/\]\((\/[a-z]{2}\/[^)#?\s]*)/g)].map((m) =>
    m[1].replace(/\/$/, ""),
  );
}

function host(u: string): string {
  try {
    return new URL(u).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return u;
  }
}

async function main() {
  const asJson = process.argv.includes("--json");
  const sinceIdx = process.argv.indexOf("--since");
  const since = sinceIdx >= 0 ? process.argv[sinceIdx + 1] : null;

  const walked = await walkAllContent();
  const en = walked.filter((w) => w.locale === "en");

  const byLocale: Counts = {};
  const byCategory: Counts = {};
  const bySubtopic: Counts = {};
  const byType: Counts = {};
  const byAuthor: Counts = {};
  const translationsBySource: Counts = {};

  for (const w of walked) {
    bump(byLocale, w.locale);
    if (w.locale !== "en") bump(translationsBySource, `${w.category}/${w.subtopic}`);
  }
  for (const w of en) {
    bump(byCategory, w.kind === "insight" ? "insight" : w.category);
    if (w.kind === "article") bump(bySubtopic, `${w.category}/${w.subtopic}`);
    bump(byType, w.kind === "insight" ? "insight" : String(w.frontmatter.type ?? "?"));
    bump(byAuthor, String(w.frontmatter.author ?? "?"));
  }

  // Link graph over EN.
  const urlOf = new Map<string, WalkedArticle>();
  for (const w of en) urlOf.set(articleUrl(w), w);
  const inbound = new Map<string, Set<string>>();
  for (const u of urlOf.keys()) inbound.set(u, new Set());
  let internalTotal = 0;
  const outboundCounts: number[] = [];
  for (const w of en) {
    const self = articleUrl(w);
    const links = internalLinks(w.body);
    let out = 0;
    for (const l of links) {
      internalTotal += 1;
      if (urlOf.has(l) && l !== self) {
        inbound.get(l)!.add(self);
        out += 1;
      }
    }
    outboundCounts.push(out);
  }
  const orphans = [...inbound.entries()]
    .filter(([, v]) => v.size === 0)
    .map(([u]) => u);

  // Sources.
  let citationTotal = 0;
  const hosts = new Set<string>();
  const perFileCitations: number[] = [];
  let withSourcesBlock = 0;
  for (const w of en) {
    const urls = externalUrls(w.body);
    citationTotal += urls.length;
    perFileCitations.push(urls.length);
    for (const u of urls) hosts.add(host(u));
    if (/^##\s+Sources/im.test(w.body)) withSourcesBlock += 1;
  }

  // Words — reported, never used as a quality threshold.
  const words = en.map((w) => w.body.trim().split(/\s+/).filter(Boolean).length);

  // Pillars.
  const pillarBySubtopic: Counts = {};
  for (const w of en) {
    if (w.kind === "article" && String(w.frontmatter.type) === "pillar") {
      bump(pillarBySubtopic, `${w.category}/${w.subtopic}`);
    }
  }
  const subtopicsTotal = categories.reduce((a, c) => a + c.subtopics.length, 0);
  const subtopicsWithoutPillar = categories.flatMap((c) =>
    c.subtopics
      .filter((s) => !pillarBySubtopic[`${c.slug}/${s.slug}`])
      .map((s) => `${c.slug}/${s.slug}`),
  );

  // Wave delta.
  const sinceCounts: Counts = {};
  if (since) {
    for (const w of walked) {
      const pub = String(w.frontmatter.publishedDate ?? "").slice(0, 10);
      if (pub >= since) {
        bump(sinceCounts, w.locale);
        bump(sinceCounts, `${w.locale}:${w.kind}`);
      }
    }
  }

  const discussions = await getDiscussions();
  const translatedDiscussions = discussions.filter(
    (d) => discussionLocales(d.slug).length > 1,
  ).length;

  const report = {
    files: walked.length,
    byLocale,
    english: {
      total: en.length,
      byCategory,
      bySubtopic,
      byType,
      byAuthor,
    },
    taxonomy: {
      categories: categories.length,
      subtopics: subtopicsTotal,
      pillars: Object.values(pillarBySubtopic).reduce((a, b) => a + b, 0),
      subtopicsWithoutPillar,
    },
    linking: {
      internalLinks: internalTotal,
      resolvedToArticles: [...inbound.values()].reduce((a, s) => a + s.size, 0),
      avgOutboundPerArticle: Number(
        (outboundCounts.reduce((a, b) => a + b, 0) / (en.length || 1)).toFixed(2),
      ),
      articlesWithNoOutbound: outboundCounts.filter((n) => n === 0).length,
      orphans: orphans.length,
      orphanUrls: orphans,
    },
    sources: {
      citations: citationTotal,
      avgPerArticle: Number((citationTotal / (en.length || 1)).toFixed(2)),
      minPerArticle: minOf(perFileCitations),
      distinctHosts: hosts.size,
      articlesWithSourcesBlock: withSourcesBlock,
      articlesWithoutSourcesBlock: en.length - withSourcesBlock,
    },
    length: {
      avgWords: Math.round(words.reduce((a, b) => a + b, 0) / (words.length || 1)),
      minWords: minOf(words),
      maxWords: maxOf(words),
    },
    platform: {
      editorialDesks: Object.keys(authors).length,
      policyDocuments: POLICY_DOCUMENTS.length,
      glossaryTerms: GLOSSARY.length,
      discussions: discussions.length,
      discussionsWithTranslations: translatedDiscussions,
      locales: LOCALES.length,
    },
    ...(since ? { since, sinceCounts } : {}),
  };

  if (asJson) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  const line = (k: string, v: unknown) =>
    console.log(`  ${k.padEnd(32)} ${String(v)}`);

  console.log("\nCORPUS");
  line("content files", report.files);
  for (const [loc, n] of Object.entries(byLocale)) line(`  ${loc}`, n);
  console.log("\nENGLISH BY CATEGORY");
  for (const [k, n] of Object.entries(byCategory)) line(k, n);
  console.log("\nENGLISH BY SUBTOPIC");
  for (const [k, n] of Object.entries(bySubtopic).sort()) line(k, n);
  console.log("\nBY TYPE");
  for (const [k, n] of Object.entries(byType)) line(k, n);
  console.log("\nBY EDITORIAL DESK");
  for (const [k, n] of Object.entries(byAuthor).sort((a, b) => b[1] - a[1]))
    line(k, n);
  console.log("\nTAXONOMY");
  line("categories", report.taxonomy.categories);
  line("subtopics", report.taxonomy.subtopics);
  line("pillars", report.taxonomy.pillars);
  line("subtopics without pillar", subtopicsWithoutPillar.join(", ") || "none");
  console.log("\nINTERNAL LINKING");
  for (const [k, v] of Object.entries(report.linking))
    if (k !== "orphanUrls") line(k, v);
  if (orphans.length) console.log("  orphans:", orphans.join(", "));
  console.log("\nSOURCES");
  for (const [k, v] of Object.entries(report.sources)) line(k, v);
  console.log("\nLENGTH (reported, not a quality threshold)");
  for (const [k, v] of Object.entries(report.length)) line(k, v);
  console.log("\nPLATFORM");
  for (const [k, v] of Object.entries(report.platform)) line(k, v);
  if (since) {
    console.log(`\nPUBLISHED ON OR AFTER ${since}`);
    for (const [k, v] of Object.entries(sinceCounts).sort()) line(k, v);
  }
  console.log();
  void path;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
