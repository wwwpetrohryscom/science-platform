#!/usr/bin/env tsx
/**
 * Subtopic depth matrix.
 *
 * `content:localization` measures whether a reader can stay in their
 * language once they are reading. This measures something earlier:
 * whether there is enough in their language for a subtopic to be worth
 * entering at all.
 *
 * A subtopic represented by a localized landing page plus one article is
 * a category with nothing in it. Three same-locale articles is the point
 * at which a subtopic hub stops being a list of one thing, and four to
 * six is what a foundational subtopic needs before the internal links
 * between its articles start resolving inside the locale.
 *
 * Usage: npm run content:depth
 *        npm run content:depth -- --json
 */
import { walkAllContent, type WalkedArticle } from "./_lib";
import { LOCALES, DEFAULT_LOCALE } from "../lib/i18n-config";

/** The point at which a subtopic hub stops being a list of one thing. */
const MINIMUM = 3;
/** What a foundational subtopic wants before its internal links resolve. */
const PREFERRED = 4;

async function main() {
  const json = process.argv.includes("--json");
  const walked = await walkAllContent();

  const bySubtopic = new Map<string, Map<string, number>>();
  for (const w of walked as WalkedArticle[]) {
    if (w.kind !== "article") continue;
    const key = `${w.category}/${w.subtopic}`;
    const row = bySubtopic.get(key) ?? new Map<string, number>();
    row.set(w.locale, (row.get(w.locale) ?? 0) + 1);
    bySubtopic.set(key, row);
  }

  const subtopics = [...bySubtopic.keys()].sort();
  const rows = subtopics.map((s) => ({
    subtopic: s,
    counts: Object.fromEntries(LOCALES.map((l) => [l, bySubtopic.get(s)?.get(l) ?? 0])),
  }));

  const summary = LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((l) => ({
    locale: l,
    atMinimum: rows.filter((r) => r.counts[l] >= MINIMUM).length,
    atPreferred: rows.filter((r) => r.counts[l] >= PREFERRED).length,
    below: rows.filter((r) => r.counts[l] < MINIMUM).map((r) => r.subtopic),
    total: rows.reduce((n, r) => n + r.counts[l], 0),
  }));

  if (json) {
    console.log(JSON.stringify({ minimum: MINIMUM, preferred: PREFERRED, rows, summary }, null, 2));
    return;
  }

  const w = Math.max(...subtopics.map((s) => s.length));
  console.log(
    `${"subtopic".padEnd(w)}  ` + LOCALES.map((l) => l.padStart(4)).join(" "),
  );
  for (const r of rows) {
    console.log(
      `${r.subtopic.padEnd(w)}  ` +
        LOCALES.map((l) => {
          const n = r.counts[l];
          const mark = l === DEFAULT_LOCALE || n >= MINIMUM ? " " : "·";
          return `${String(n).padStart(3)}${mark}`;
        }).join(" "),
    );
  }
  console.log(
    `${"TOTAL".padEnd(w)}  ` +
      LOCALES.map((l) =>
        String(rows.reduce((n, r) => n + r.counts[l], 0)).padStart(4),
      ).join(" "),
  );
  console.log(
    `\n· marks a subtopic below ${MINIMUM} same-locale articles — a hub that is a list of one thing.\n`,
  );
  for (const s of summary) {
    console.log(
      `${s.locale}: ${s.atMinimum}/${rows.length} subtopics at ${MINIMUM}+ · ` +
        `${s.atPreferred}/${rows.length} at ${PREFERRED}+ · ${s.total} articles`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
