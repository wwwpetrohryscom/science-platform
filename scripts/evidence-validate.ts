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
 * All three checks start from the same evidence: a sentence that links a
 * live product inline *and* quotes a figure. A live product cited only
 * as an explainer — NOAA's bleaching tutorial, say — needs no edition,
 * and warning about it teaches the reader of the report to skim.
 *
 *   1. live-figure-undated: the sentence states the number with no
 *      temporal anchor of any kind. The reader sees a fixed fact.
 *   2. live-source-undated: the number is anchored in prose, but the
 *      Sources entry still does not say which release was read, so the
 *      figure cannot be reproduced from the bibliography.
 *   3. live-anchor-stale: the figure is anchored to the article's own
 *      review, and that review is old enough that "as of" now points
 *      somewhere the product has since moved away from.
 *
 * Figures are detected after link *targets* are stripped, because a
 * digit inside a URL is not a claim. `.../product/50km/tutorial/...`
 * read as a quoted measurement before this was fixed, and three of the
 * four sentences the check reported were that same false positive.
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

/**
 * A year, an "as of", a named release, or a month-year. A version or
 * collection identifier counts: "version 6.1" names an edition of a
 * live product exactly as a date would, and is the form the data
 * providers themselves use.
 */
const TEMPORAL =
  /\b(19|20)\d{2}\b|\bas of\b|\bas at\b|\blatest\b|\bcurrent(?:ly)?\b|\bto date\b|\bmost recent\b|\bannual mean\b|\bedition\b|\brelease\b|\bassessment\b|\bbulletin\b|\breport\b|\bversion \d|\bcollection \d|\bv\d+(?:\.\d+)?\b|\bread in\b/i;

/**
 * A number that is likely an observation rather than a formula constant.
 * A bare four-digit year is excluded: "the record begins in 1979" is a
 * date, not a quantity read off a live product, and treating it as one
 * pulled explainer citations into a gate about quoted measurements.
 */
const FIGURE_UNIT =
  /\d[\d,.]*\s*(?:%|per cent|percent|ppm|ppb|mm|cm|km|m²|km²|ha|Gt|Mt|Pg|GW|MW|TWh|°C|K|petagram|tonnes?|million|billion|thousand)\b/;
const FIGURE_BARE = /\b\d[\d,.]{2,}\b/g;
const YEAR = /^(?:1[89]|20)\d{2}$/;

function hasFigure(prose: string): boolean {
  if (FIGURE_UNIT.test(prose)) return true;
  FIGURE_BARE.lastIndex = 0;
  for (const m of prose.matchAll(FIGURE_BARE)) {
    if (!YEAR.test(m[0])) return true;
  }
  return false;
}

/** Link text survives, link targets do not: a digit in a URL is not a claim. */
function proseOf(sentence: string): string {
  return sentence.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
}

/** Months between an ISO calendar date and now. */
function monthsSince(iso: string, now: Date): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return 0;
  const then = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
}

function sentences(text: string): string[] {
  // Split into markdown blocks first. Collapsing newlines before
  // splitting made a paragraph, the heading after it and the whole
  // bullet list below into one "sentence", so an untimed lead-in
  // inherited every figure and link in the section that followed it.
  const blocks = text
    .split(/\n\s*\n|\n(?=\s*(?:#{1,6}\s|[-*+]\s|\d+\.\s|\||>))/)
    .map((b) => b.replace(/\n+/g, " ").trim())
    .filter(Boolean);

  // Then on sentence-final punctuation followed by a space and a capital
  // or a bracket. Markdown links keep their internals.
  return blocks.flatMap((b) =>
    b
      .split(/(?<=[.!?])\s+(?=[A-Z(\[*])/)
      .map((s) => s.trim())
      .filter(Boolean),
  );
}

/**
 * How long an "as of our review" anchor stays meaningful. Eighteen
 * months is chosen so an article reviewed within the last annual cycle
 * of the major products is not flagged, and one that has missed a cycle
 * is.
 */
const STALE_AFTER_MONTHS = 18;

async function main() {
  const asJson = process.argv.includes("--json");
  const now = new Date();
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

  // One pass over the prose. Everything below is driven by sentences
  // that quote a figure from a live product; nothing fires on a live
  // source that is only ever cited as an explainer.
  const walked = await walkAllContent();
  const quoted = new Map<string, Set<string>>(); // evidenceId -> slugs quoting a figure from it

  for (const w of walked.filter((x) => x.locale === "en")) {
    const body = w.body.replace(/^##\s+Sources[\s\S]*/im, "");
    for (const sentence of sentences(body)) {
      const urls = [...sentence.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
      if (urls.length === 0) continue;

      const records = urls
        .map((u) => {
          const exact = live.find((r) => r.url === u);
          if (exact) return exact;
          try {
            const host = new URL(u).hostname.replace(/^www\./, "");
            return live.find((r) => r.host === host);
          } catch {
            return undefined;
          }
        })
        .filter((r): r is NonNullable<typeof r> => Boolean(r));
      if (records.length === 0) continue;

      const prose = proseOf(sentence);
      if (!hasFigure(prose)) continue;

      for (const r of records) {
        const set = quoted.get(r.evidenceId) ?? new Set<string>();
        set.add(w.slug);
        quoted.set(r.evidenceId, set);
      }

      if (!TEMPORAL.test(prose)) {
        issues.push({
          severity: "warning",
          rule: "live-figure-undated",
          message: `figure quoted from a continuously-updated product with no date in the sentence: "${prose.slice(0, 150)}"`,
          where: path.relative(PROJECT_ROOT, w.filepath),
        });
        continue;
      }

      // Anchored in prose. If the anchor is the article's own review
      // date rather than a named release, it ages.
      const updated = (w.frontmatter.updatedDate ?? w.frontmatter.publishDate) as string | undefined;
      if (updated && monthsSince(updated, now) > STALE_AFTER_MONTHS) {
        issues.push({
          severity: "warning",
          rule: "live-anchor-stale",
          message: `quotes a live figure but was last reviewed ${updated}, ${monthsSince(updated, now)} months ago`,
          where: path.relative(PROJECT_ROOT, w.filepath),
        });
      }
    }
  }

  // Bibliographic, and only for sources a figure was actually taken from.
  for (const r of live) {
    const slugs = quoted.get(r.evidenceId);
    if (!slugs) continue;
    const stamped = TEMPORAL.test(r.title) || r.usedBy.some((u) => TEMPORAL.test(u.supports));
    if (!stamped) {
      issues.push({
        severity: "warning",
        rule: "live-source-undated",
        message: `a figure is quoted from ${r.host} but the citation names no edition, release or read date — quoted by ${[...slugs].slice(0, 3).join(", ")}`,
        where: r.evidenceId,
      });
    }
  }

  // A stale article trips once per quoted figure; report it once.
  const seenStale = new Set<string>();
  const deduped = issues.filter((i) => {
    if (i.rule !== "live-anchor-stale") return true;
    if (seenStale.has(i.where)) return false;
    seenStale.add(i.where);
    return true;
  });
  issues.length = 0;
  issues.push(...deduped);

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
