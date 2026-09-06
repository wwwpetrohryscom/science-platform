/**
 * Search ranking and index types — the half that runs in the browser.
 *
 * Deliberately free of node imports. The client component imports this
 * module and nothing else from the search layer: pulling in
 * `lib/content` or `lib/glossary` would drag `node:fs` into the client
 * bundle, and the failure mode is a build error rather than a runtime
 * one, so it is easy to reintroduce and easy to catch.
 *
 * The index builder that does read the corpus lives in
 * `lib/search-index.ts` and imports from here.
 */

import type { Locale } from "@/lib/i18n-config";

/**
 * Search index.
 *
 * The site had no search. Discovery worked — the rendered audit puts
 * every page within three clicks of its locale home and finds no
 * orphans — but navigation answers "show me what is near this", and a
 * reader who arrives knowing the word they want has no way to ask for
 * it. With 299 English articles and 231 glossary terms, browsing is not
 * a substitute.
 *
 * The index is built per locale and only from what exists in that
 * locale. A translation the loader served from the English source is
 * not in the French index: a French reader searching in French should
 * not be handed English results dressed as French ones, which is the
 * same rule the sitemap, hreflang, the feeds and the policy pages
 * follow.
 *
 * Ranking is deliberately simple and stays in one place (`score`), so
 * the behaviour is testable without a browser. Field weights are not
 * summed across fields for a single term — a word appearing in the
 * title, the excerpt and the tags of one document should not outrank a
 * document that matches two distinct query words, so a document's score
 * is the sum over *query terms* of that term's best field match.
 */

export type SearchKind = "article" | "insight" | "glossary";

export type SearchDoc = {
  /** Locale-prefixed path. */
  url: string;
  title: string;
  excerpt: string;
  kind: SearchKind;
  /** Category slug for articles and insights; absent for glossary terms. */
  category?: string;
  subtopic?: string;
  tags: string[];
};

export type SearchIndex = {
  locale: Locale;
  docs: SearchDoc[];
};

/** Field weights. Highest wins per query term; they are not added up. */
const WEIGHT = { title: 6, tag: 4, excerpt: 2, path: 1 } as const;
/** A whole-word hit is worth more than a prefix hit. */
const EXACT_BONUS = 2;

export function normalise(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function terms(query: string): string[] {
  return normalise(query).split(" ").filter((t) => t.length >= 2);
}

function fieldScore(term: string, field: string, weight: number): number {
  const words = field.split(" ");
  if (words.includes(term)) return weight + EXACT_BONUS;
  if (words.some((w) => w.startsWith(term))) return weight;
  return 0;
}

/**
 * Score one document against one query. Zero means "no match" — a
 * document must match every term to appear at all, so a two-word query
 * narrows rather than widens.
 */
export function score(doc: SearchDoc, query: string): number {
  const qs = terms(query);
  if (qs.length === 0) return 0;
  const title = normalise(doc.title);
  const excerpt = normalise(doc.excerpt);
  const tags = normalise(doc.tags.join(" "));
  const pathText = normalise(doc.url.replace(/[/-]/g, " "));

  let total = 0;
  for (const term of qs) {
    const best = Math.max(
      fieldScore(term, title, WEIGHT.title),
      fieldScore(term, tags, WEIGHT.tag),
      fieldScore(term, excerpt, WEIGHT.excerpt),
      fieldScore(term, pathText, WEIGHT.path),
    );
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

export function search(docs: SearchDoc[], query: string, limit = 30): SearchDoc[] {
  return docs
    .map((doc) => ({ doc, s: score(doc, query) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || a.doc.title.localeCompare(b.doc.title))
    .slice(0, limit)
    .map((r) => r.doc);
}

/** Public path a locale's index is served at. */
export function searchIndexPath(locale: Locale): string {
  return `/search/${locale}.json`;
}
