#!/usr/bin/env tsx
/**
 * Originality audit.
 *
 * `content:validate` already refuses two article bodies that are more
 * than 72% token-identical. That threshold catches a duplicated file
 * and little else: two articles can share every explanatory paragraph
 * and still sit far below it, because scientific prose on adjacent
 * subjects shares a great deal of ordinary vocabulary that a
 * whole-body ratio counts as agreement.
 *
 * The thing worth measuring is narrower — text that was written once
 * and reused, rather than written twice about the same subject. Two
 * signals separate those:
 *
 *   1. A sentence of twelve words or more appearing verbatim in two
 *      different articles. Independent authorship does not produce
 *      that; at twelve words a sentence is a fingerprint.
 *   2. A pair of articles sharing an unusual number of 10-word
 *      sequences. One or two are coincidence and the shared vocabulary
 *      of a discipline; thirty-five is a paragraph that moved.
 *
 * Quotations are excluded from both. Two articles about phosphorus
 * quoting the same USGS sentence are doing exactly what the sourcing
 * standard asks, and a rule that flagged it would push authors to
 * paraphrase sources rather than quote them — the opposite of what this
 * corpus wants. That exclusion is why the numbers here are lower than a
 * naive scan reports: counting quotations, the largest pair overlap in
 * the corpus is 51 shared sequences, and every one of the longest runs
 * inside it is a quoted passage.
 *
 * The `## Sources` block and markdown tables are excluded too. A
 * citation line and a table row are structured records rather than
 * prose, and two articles citing the same paper should say so
 * identically.
 *
 * Usage: npm run content:originality
 *        npm run content:originality -- --json
 */
import { walkAllContent } from "./_lib";
import { DEFAULT_LOCALE } from "../lib/i18n-config";

/** Minimum words for a sentence to be a fingerprint rather than a phrase. */
export const MIN_SENTENCE_WORDS = 12;

/** Shingle width, in words. */
export const N = 10;

/**
 * Shared shingles above which a pair is reported.
 *
 * The corpus's largest unquoted pair overlap when this gate was written
 * was 28, between two greenhouse-gas articles that necessarily describe
 * the same measurement network. 35 sits above the observed ceiling and
 * well below anything a copied paragraph would produce.
 */
export const MAX_SHARED_SHINGLES = 35;

/** A quoted span long enough to be a quotation. Straight and curly. */
const QUOTED = /["“][^"”]{20,}["”]/g;

export function prose(body: string): string {
  return body
    .replace(/^##\s+Sources[\s\S]*/im, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^\|.*$/gm, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(QUOTED, " ");
}

export function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.split(/\s+/).filter(Boolean).join(" "))
    .filter((s) => s.split(" ").length >= MIN_SENTENCE_WORDS);
}

export function shingles(text: string): Set<string> {
  const w = text
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + N <= w.length; i++) out.add(w.slice(i, i + N).join(" "));
  return out;
}

type Issue = { severity: "error" | "warning"; rule: string; message: string };

async function main() {
  const json = process.argv.includes("--json");
  const walked = await walkAllContent();
  const docs = walked
    .filter((w) => w.locale === DEFAULT_LOCALE)
    .map((w) => {
      const text = prose(w.body);
      return {
        rel: w.filepath.replace(`${process.cwd()}/`, ""),
        sentences: sentences(text),
        shingles: shingles(text),
      };
    });

  const issues: Issue[] = [];

  // 1. Verbatim sentences.
  const bySentence = new Map<string, string[]>();
  for (const d of docs) {
    for (const s of new Set(d.sentences)) {
      bySentence.set(s, [...(bySentence.get(s) ?? []), d.rel]);
    }
  }
  let repeated = 0;
  for (const [s, files] of bySentence) {
    if (files.length < 2) continue;
    repeated += 1;
    const shown = s.length > 160 ? `${s.slice(0, 160)}…` : s;
    issues.push({
      severity: "error",
      rule: "verbatim-sentence",
      message:
        `the same ${s.split(" ").length}-word sentence appears in ${files.length} articles — ` +
        `${files.join(", ")}\n    "${shown}"`,
    });
  }

  // 2. Pairwise shingle overlap, built from an inverted index so the
  //    cost is in the shared sequences rather than in n² comparisons.
  //    A sequence occurring in more than six articles is standing
  //    language, not a transplanted passage, and is skipped.
  const index = new Map<string, string[]>();
  for (const d of docs) {
    for (const sh of d.shingles) index.set(sh, [...(index.get(sh) ?? []), d.rel]);
  }
  const pairs = new Map<string, number>();
  for (const files of index.values()) {
    if (files.length < 2 || files.length > 6) continue;
    for (let i = 0; i < files.length; i++) {
      for (let j = i + 1; j < files.length; j++) {
        const key = [files[i], files[j]].sort().join(" ");
        pairs.set(key, (pairs.get(key) ?? 0) + 1);
      }
    }
  }
  const ranked = [...pairs.entries()].sort((a, b) => b[1] - a[1]);
  for (const [key, count] of ranked) {
    if (count < MAX_SHARED_SHINGLES) break;
    const [a, b] = key.split(" ");
    issues.push({
      severity: "warning",
      rule: "shared-passages",
      message: `${count} shared ${N}-word sequences outside quotations — ${a} × ${b}`,
    });
  }

  const errors = issues.filter((i) => i.severity === "error").length;
  const warnings = issues.length - errors;
  const shared = [...index.values()].filter((f) => f.length > 1).length;
  const top = ranked[0];

  if (json) {
    console.log(
      JSON.stringify(
        {
          articles: docs.length,
          sentencesChecked: bySentence.size,
          repeatedSentences: repeated,
          distinctShingles: index.size,
          sharedShingles: shared,
          maxPairOverlap: top ? top[1] : 0,
          errors,
          warnings,
          issues,
        },
        null,
        2,
      ),
    );
  } else {
    for (const i of issues) {
      console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.message}`);
    }
    console.log(
      `\n${docs.length} English articles · ${bySentence.size} sentences of ` +
        `${MIN_SENTENCE_WORDS}+ words · ${repeated} repeated verbatim`,
    );
    console.log(
      `${index.size} distinct ${N}-word sequences · ${shared} appear in more than one ` +
        `article (${((100 * shared) / index.size).toFixed(2)}%) · largest pair overlap ` +
        `${top ? top[1] : 0}`,
    );
    console.log(`${errors} errors · ${warnings} warnings`);
  }

  if (errors > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
