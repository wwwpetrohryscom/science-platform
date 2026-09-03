#!/usr/bin/env tsx
/**
 * Link glossary terms into the articles that already declare them.
 *
 * The constraint that makes this safe is that the pairing is authored,
 * not discovered. A term is only ever linked inside an article listed in
 * that term's own `relatedArticles`. The script never searches the
 * corpus for a word and decides what it means — which is the operation
 * that produced `[cells]` pointing at cell biology from an article about
 * photovoltaic cells.
 *
 * On top of that pairing, four guards:
 *   - the term must appear verbatim as a whole phrase;
 *   - a single-word term must be long and distinctive, because short
 *     common words are ambiguous however they were paired;
 *   - masked regions are never touched: headings, existing links, code
 *     spans, table rows and the whole Sources block;
 *   - at most three new glossary links per article, and never the same
 *     term twice.
 *
 * Usage:
 *   npm run glossary:link            # dry run, prints what it would do
 *   npm run glossary:link -- --apply
 */
import fs from "node:fs";

import matter from "gray-matter";
import { walkAllContent } from "./_lib";
import { GLOSSARY } from "../lib/glossary";

const MAX_NEW_PER_ARTICLE = 3;
const MIN_SINGLE_WORD_LENGTH = 9;

/**
 * Single words long enough to pass the length test that still mean
 * different things in different disciplines. Never linked on their own.
 */
const AMBIGUOUS = new Set([
  "resolution",
  "sensitivity",
  "resistance",
  "efficiency",
  "population",
  "concentration",
  "conductivity",
  "generation",
  "transmission",
  "radiation",
  "attenuation",
  "saturation",
  "circulation",
  "speciation",
  "adaptation",
  "convection",
  "reflectance",
  "signature",
  "structure",
  "emissivity",
]);

const PLACEHOLDER = /__G(\d+)__/g;

function maskProtected(body: string): {
  masked: string;
  restore: (s: string) => string;
} {
  const store: string[] = [];
  const put = (m: string) => {
    const tok = `__G${store.length}__`;
    store.push(m);
    return tok;
  };
  let out = body;
  out = out.replace(/^##\s+Sources[\s\S]*/im, put);
  out = out.replace(/```[\s\S]*?```/g, put);
  out = out.replace(/`[^`\n]+`/g, put);
  out = out.replace(/\[[^\]]*\]\([^)]*\)/g, put);
  out = out.replace(/^#{1,6}.*$/gm, put);
  out = out.replace(/^\s*\|.*$/gm, put);
  return {
    masked: out,
    /**
     * Restores in a loop, because the masks nest: a heading containing a
     * link is masked as a link first and then as a heading, so a single
     * pass hands back a heading that still contains the link's
     * placeholder. One pass left `__G16__` inside two published headings
     * before this was fixed.
     */
    restore: (s: string) => {
      let out = s;
      for (let i = 0; i < 10 && PLACEHOLDER.test(out); i += 1) {
        PLACEHOLDER.lastIndex = 0;
        out = out.replace(PLACEHOLDER, (_, n) => store[Number(n)]);
      }
      PLACEHOLDER.lastIndex = 0;
      return out;
    },
  };
}

function eligible(term: string): boolean {
  const words = term.trim().split(/\s+/);
  if (words.length >= 2) return true;
  const w = words[0].toLowerCase();
  return w.length >= MIN_SINGLE_WORD_LENGTH && !AMBIGUOUS.has(w);
}

async function main() {
  const apply = process.argv.includes("--apply");
  const walked = (await walkAllContent()).filter((w) => w.locale === "en");
  const bySlug = new Map(walked.map((w) => [w.slug, w]));

  const wanted = new Map<string, { slug: string; term: string }[]>();
  for (const g of GLOSSARY) {
    if (!eligible(g.term)) continue;
    for (const ra of g.relatedArticles ?? []) {
      const list = wanted.get(ra.slug) ?? [];
      list.push({ slug: g.slug, term: g.term });
      wanted.set(ra.slug, list);
    }
  }

  let linked = 0;
  let files = 0;
  let noMatch = 0;

  for (const [articleSlug, terms] of wanted) {
    const w = bySlug.get(articleSlug);
    if (!w) continue;
    const parsed = matter(fs.readFileSync(w.filepath, "utf8"));
    let body = parsed.content;

    // Longest term first, so "cation exchange capacity" is linked before
    // "capacity" and the shorter match cannot nest inside the longer.
    const ordered = [...terms].sort((a, b) => b.term.length - a.term.length);
    let added = 0;

    for (const t of ordered) {
      if (added >= MAX_NEW_PER_ARTICLE) break;
      if (body.includes(`/en/glossary/${t.slug})`)) continue;
      // An article whose whole subject is the term does not need to link
      // the one-line definition of its own title.
      if (articleSlug.includes(t.slug) || t.slug.includes(articleSlug)) continue;

      const { masked, restore } = maskProtected(body);
      const escaped = t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(?<![\\w-])(${escaped})(?![\\w-])`, "i");
      const m = re.exec(masked);
      if (!m || m.index === undefined) {
        noMatch += 1;
        continue;
      }
      const replaced =
        masked.slice(0, m.index) +
        `[${m[1]}](/en/glossary/${t.slug})` +
        masked.slice(m.index + m[1].length);
      body = restore(replaced);
      added += 1;
      linked += 1;
    }

    if (added > 0) {
      files += 1;
      if (apply) {
        const out = (
          matter.stringify as unknown as (
            content: string,
            data: Record<string, unknown>,
          ) => string
        )(body, parsed.data as Record<string, unknown>);
        fs.writeFileSync(w.filepath, out, "utf8");
      }
    }
  }

  console.log(
    `${apply ? "linked" : "would link"} ${linked} glossary terms across ${files} articles`,
  );
  console.log(
    `  ${noMatch} term/article pairs skipped: the term does not appear verbatim in the article`,
  );
  if (!apply) console.log("  (dry run — pass --apply to write)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
