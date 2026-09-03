#!/usr/bin/env tsx
/**
 * Evidence registry validator, including the temporal-qualifier gate.
 *
 * The gate this file exists for: a figure taken from a continuously
 * updated product is true *as of a date*. NOAA's CO2 growth rate, NASA's
 * cumulative sea-level rise, sea-ice extent, the Red List count and the
 * WDPA coverage share all change between one reader's visit and the
 * next. Printing one of them as a bare number states something the
 * source does not — that the value is fixed.
 *
 * Two checks, both anchored to what is actually written:
 *
 *   1. A citation to a live product should carry an edition or date in
 *      its title or note, so the Sources list says which release the
 *      article read.
 *   2. A sentence that both links a live product inline and states a
 *      number must carry a temporal anchor in that same sentence. This
 *      is the one that catches the real defect, because it looks at the
 *      claim rather than at the bibliography.
 *
 * Both are warnings. A rule that failed the build here would fire on
 * sentences where the number is a definition rather than an observation,
 * and the fix for those is a human reading the sentence.
 *
 * Structural problems with the registry itself are errors.
 *
 * Usage:
 *   npm run evidence:validate
 *   tsx scripts/evidence-validate.ts --json
 */
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { loadRegistry } from "../lib/evidence/index";

type Issue = {
  severity: "error" | "warning";
  rule: string;
  message: string;
  where: string;
};

/** A year, an "as of", a named release, or a month-year. */
const TEMPORAL =
  /\b(19|20)\d{2}\b|\bas of\b|\bas at\b|\blatest\b|\bcurrent(?:ly)?\b|\bto date\b|\bmost recent\b|\bannual mean\b|\bedition\b|\brelease\b|\bassessment\b|\bbulletin\b|\breport\b/i;

/** A number that is likely an observation rather than a formula constant. */
const FIGURE = /\d[\d,.]*\s*(?:%|per cent|percent|ppm|ppb|mm|cm|km|m²|km²|ha|Gt|Mt|Pg|GW|MW|TWh|°C|K|petagram|tonnes?|million|billion|thousand)\b|\b\d[\d,.]{2,}\b/;

function sentences(text: string): string[] {
  // Rough but adequate: split on sentence-final punctuation followed by a
  // space and a capital or a bracket. Markdown links keep their internals.
  return text
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z(\[*])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

async function main() {
  const asJson = process.argv.includes("--json");
  const registry = loadRegistry();
  const issues: Issue[] = [];

  if (registry.records.length === 0) {
    console.error("✗ evidence registry is empty — run npm run evidence:build");
    process.exit(1);
  }

  // Structural.
  const seen = new Set<string>();
  for (const r of registry.records) {
    if (seen.has(r.evidenceId)) {
      issues.push({
        severity: "error",
        rule: "duplicate-id",
        message: `evidenceId ${r.evidenceId} appears more than once`,
        where: "data/evidence/registry.json",
      });
    }
    seen.add(r.evidenceId);
    if (!r.url || !/^https?:\/\//.test(r.url)) {
      issues.push({
        severity: "error",
        rule: "bad-url",
        message: `${r.evidenceId} has no usable URL`,
        where: "data/evidence/registry.json",
      });
    }
    if (r.usedBy.length === 0) {
      issues.push({
        severity: "error",
        rule: "unused-record",
        message: `${r.evidenceId} is in the registry but no article cites it`,
        where: "data/evidence/registry.json",
      });
    }
    if (!r.title.trim()) {
      issues.push({
        severity: "warning",
        rule: "missing-title",
        message: `${r.evidenceId} (${r.host}) has no title`,
        where: "data/evidence/registry.json",
      });
    }
  }

  const live = registry.records.filter((r) => r.isLiveDataset);
  const liveUrls = new Set(live.map((r) => r.url));
  const liveHosts = new Set(live.map((r) => r.host));

  // 1. Citation-level: does the Sources entry say which release?
  for (const r of live) {
    const stamped = TEMPORAL.test(r.title) || r.usedBy.some((u) => TEMPORAL.test(u.supports));
    if (!stamped) {
      issues.push({
        severity: "warning",
        rule: "live-source-undated",
        message: `${r.host} is a continuously-updated product but the citation names no edition or date — cited by ${r.usedBy
          .map((u) => u.slug)
          .slice(0, 3)
          .join(", ")}`,
        where: r.evidenceId,
      });
    }
  }

  // 2. Sentence-level: a figure attributed inline to a live product.
  const walked = await walkAllContent();
  for (const w of walked.filter((x) => x.locale === "en")) {
    const prose = w.body.replace(/^##\s+Sources[\s\S]*/im, "");
    for (const sentence of sentences(prose)) {
      const urls = [...sentence.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
      if (urls.length === 0) continue;
      const hitsLive = urls.some((u) => {
        if (liveUrls.has(u)) return true;
        try {
          return liveHosts.has(new URL(u).hostname.replace(/^www\./, ""));
        } catch {
          return false;
        }
      });
      if (!hitsLive) continue;
      if (!FIGURE.test(sentence)) continue;
      if (TEMPORAL.test(sentence)) continue;
      issues.push({
        severity: "warning",
        rule: "live-figure-undated",
        message: `figure cited to a continuously-updated product with no date in the sentence: "${sentence
          .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
          .slice(0, 150)}"`,
        where: path.relative(PROJECT_ROOT, w.filepath),
      });
    }
  }

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  if (asJson) {
    console.log(JSON.stringify({ records: registry.records.length, live: live.length, issues }, null, 2));
    process.exit(errors.length ? 1 : 0);
  }

  for (const i of issues) {
    console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.where} — ${i.message}`);
  }
  console.log(
    `\n${registry.records.length} evidence records · ${live.length} continuously-updated · ` +
      `${errors.length} errors · ${warnings.length} warnings`,
  );
  if (errors.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
