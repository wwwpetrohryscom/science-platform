#!/usr/bin/env tsx
/**
 * Pre-screen for the independent verification pass.
 *
 * This does not verify anything. It reads every English page that has
 * no ledger entry and sorts the work, so that reviewer attention lands
 * where defects have actually been found before rather than being
 * spread evenly over a corpus that is mostly fine.
 *
 * The risk signals are the ones that produced real corrections in the
 * previous two waves:
 *
 *   homepage-citation   a source whose URL is a publisher root — it
 *                       supports no particular claim, and every one
 *                       found so far has been decorative
 *   naked-figure        a quantity in a sentence that links nothing,
 *                       so the reader cannot get from the number to
 *                       its source without guessing
 *   consensus-claim     "scientists agree", "it is widely accepted" —
 *                       the shape that manufactures consensus
 *   controversy-claim   "hotly debated", "fierce disagreement" — the
 *                       shape that manufactures controversy
 *   superlative         first / largest / only / unprecedented, which
 *                       are the claims most often carried forward from
 *                       a secondary source without checking
 *   hedge-free-causal   "causes", "proves", "demonstrates that" with
 *                       no qualifier anywhere in the sentence
 *   stale-year          a year that is now old enough that a
 *                       continuously revised quantity has probably
 *                       moved
 *
 * Usage:
 *   npx tsx scripts/verification-screen.ts            # ranked list
 *   npx tsx scripts/verification-screen.ts --json
 *   npx tsx scripts/verification-screen.ts --slug X   # one page
 */
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { reviewsBySlug } from "../lib/verification";

type Signal = { rule: string; weight: number; detail: string };
type Page = { slug: string; path: string; words: number; citations: number; signals: Signal[]; score: number };

/** Publisher roots. A citation to one of these supports nothing specific. */
const HOMEPAGE =
  /^https?:\/\/(www\.)?(nature\.com|science\.org|pnas\.org|cell\.com|thelancet\.com|springer\.com|wiley\.com|sciencedirect\.com|tandfonline\.com|frontiersin\.org|mdpi\.com|plos\.org|elifesciences\.org|royalsocietypublishing\.org|ipcc\.ch|nasa\.gov|noaa\.gov|nih\.gov|who\.int|fao\.org|unep\.org)\/?$/i;

const CONSENSUS = [
  /\bscientists (?:generally )?agree\b/i,
  /\bthe scientific community (?:agrees|has concluded)\b/i,
  /\bit is (?:now )?(?:widely|generally) (?:accepted|agreed|understood)\b/i,
  /\bthere is (?:a )?consensus\b/i,
  /\bno serious (?:scientist|researcher)\b/i,
];

const CONTROVERSY = [
  /\bhotly (?:debated|contested)\b/i,
  /\bfierce(?:ly)? (?:debate|disagreement|contested)\b/i,
  /\braging (?:debate|controversy)\b/i,
  /\bdeeply divided\b/i,
  /\bwar of words\b/i,
];

const SUPERLATIVE =
  /\b(the (?:first|largest|smallest|only|fastest|highest|lowest|most (?:\w+ ){0,2}\w+)|unprecedented|record-breaking|never before)\b/i;

/** Causal verbs that assert mechanism without room to be wrong. */
const HARD_CAUSAL = /\b(proves?|proven|demonstrates? that|establishes? that|confirms? that|causes)\b/i;
const HEDGE =
  /\b(suggest|indicat|associat|correlat|likely|probabl|may|might|appear|estimat|consistent with|evidence for|about|approximately|around|roughly|assessed|reported)\b/i;

/** A quantity worth sourcing, as opposed to a year or a section number. */
const FIGURE =
  /\d[\d,.]*\s*(?:%|per cent|percent|ppm|ppb|mm|cm|km|m²|km²|ha|Gt|Mt|Pg|GW|MW|TWh|kWh|°C|K|tonnes?|million|billion|trillion|thousand|fold|times)\b/;

const STALE_BEFORE = 2015;

function sentences(text: string): string[] {
  const blocks = text
    .split(/\n\s*\n|\n(?=\s*(?:#{1,6}\s|[-*+]\s|\d+\.\s|\||>))/)
    .map((b) => b.replace(/\n+/g, " ").trim())
    .filter(Boolean);
  return blocks.flatMap((b) =>
    b.split(/(?<=[.!?])\s+(?=[A-Z(\[*])/).map((s) => s.trim()).filter(Boolean),
  );
}

/** Link text survives, link targets do not. */
const proseOf = (s: string) => s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");

async function main() {
  const asJson = process.argv.includes("--json");
  const only = process.argv.includes("--slug")
    ? process.argv[process.argv.indexOf("--slug") + 1]
    : undefined;

  const reviewed = reviewsBySlug();
  const walked = (await walkAllContent()).filter((w) => w.locale === "en");
  const pages: Page[] = [];

  for (const w of walked) {
    if (reviewed.has(w.slug)) continue;
    if (only && w.slug !== only) continue;

    const [body, sources = ""] = w.body.split(/^##\s+Sources\s*$/im);
    const signals: Signal[] = [];

    // --- bibliography ------------------------------------------------
    const citationUrls = [...sources.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
    for (const u of citationUrls) {
      if (HOMEPAGE.test(u)) {
        signals.push({ rule: "homepage-citation", weight: 6, detail: u });
      }
    }

    // --- prose -------------------------------------------------------
    for (const raw of sentences(body)) {
      const s = proseOf(raw);
      const linked = /\]\(/.test(raw);

      if (FIGURE.test(s) && !linked) {
        signals.push({ rule: "naked-figure", weight: 2, detail: s.slice(0, 130) });
      }
      for (const p of CONSENSUS) {
        if (p.test(s)) signals.push({ rule: "consensus-claim", weight: 5, detail: s.slice(0, 130) });
      }
      for (const p of CONTROVERSY) {
        if (p.test(s)) signals.push({ rule: "controversy-claim", weight: 5, detail: s.slice(0, 130) });
      }
      if (SUPERLATIVE.test(s) && !linked) {
        signals.push({ rule: "superlative", weight: 3, detail: s.slice(0, 130) });
      }
      if (HARD_CAUSAL.test(s) && !HEDGE.test(s)) {
        signals.push({ rule: "hedge-free-causal", weight: 3, detail: s.slice(0, 130) });
      }
      for (const m of s.matchAll(/\b(19|20)\d{2}\b/g)) {
        const y = Number(m[0]);
        if (y >= 1990 && y < STALE_BEFORE && FIGURE.test(s)) {
          signals.push({
            rule: "stale-year",
            weight: 2,
            detail: `${y}: ${s.slice(0, 110)}`,
          });
        }
      }
    }

    const score = signals.reduce((a, s) => a + s.weight, 0);
    pages.push({
      slug: w.slug,
      path: path.relative(PROJECT_ROOT, w.filepath),
      words: body.split(/\s+/).filter(Boolean).length,
      citations: citationUrls.length,
      signals,
      score,
    });
  }

  pages.sort((a, b) => b.score - a.score || b.words - a.words);

  if (asJson) {
    console.log(JSON.stringify(pages, null, 2));
    return;
  }

  const byRule = new Map<string, number>();
  for (const p of pages) for (const s of p.signals) byRule.set(s.rule, (byRule.get(s.rule) ?? 0) + 1);

  console.log(`${pages.length} unreviewed English pages\n`);
  console.log("signals by rule:");
  for (const [r, n] of [...byRule].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(4)}  ${r}`);
  }
  console.log("\nranked (score · words · citations · slug):");
  for (const p of pages) {
    console.log(
      `  ${String(p.score).padStart(3)} · ${String(p.words).padStart(4)}w · ${String(p.citations).padStart(2)}c · ${p.slug}`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
