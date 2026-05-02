/**
 * Internal linking engine.
 *
 * Two responsibilities:
 *   1. Build a keyword → URL index from the corpus (titles, tags, slugs).
 *   2. Inject a bounded number of internal links into article body
 *      markdown, idempotently (running it twice is a no-op because we
 *      skip text that is already inside a markdown link).
 *
 * Compatible with the existing schema: it uses the body markdown only.
 * It does not modify frontmatter, does not touch the `## Sources`
 * section, and does not touch headings, fenced code, or HTML.
 *
 * Designed to run as a build step (see `scripts/build-internal-links.ts`)
 * rather than at request time — once the index is large, page-render-time
 * linking gets expensive and produces inconsistent results across pages.
 */

export const DEFAULT_LINK_LIMIT = 8;
export const RELATED_LINK_LIMIT = 3;

/** A single article's contribution to the link graph. */
export type LinkableArticle = {
  /** URL the link should point at — typically `/<locale>/<category>/<subtopic>/<slug>`. */
  url: string;
  /** Slug of the article — used to skip self-links. */
  slug: string;
  /** Article type — pillars get higher priority so SEO articles link UP first. */
  type: "seo" | "pillar" | "expert";
  /** Title; treated as the primary keyword. */
  title: string;
  /** Frontmatter tags. */
  tags: string[];
};

export type KeywordEntry = {
  keyword: string;
  url: string;
  /** Owner article slug — used to skip self-links during injection. */
  ownerSlug: string;
  /** Higher = preferred when two entries share a keyword. */
  priority: number;
};

/**
 * Build the keyword index for a set of articles. Pillars have higher
 * priority than SEO articles, which have higher priority than expert
 * pieces — so an SEO article will link UP to its pillar before linking
 * sideways.
 *
 * Keywords come from: article title, tags, and a humanized form of
 * the slug. Length-sorted descending so multi-word phrases win over
 * substring matches.
 */
export function buildKeywordIndex(articles: LinkableArticle[]): KeywordEntry[] {
  const entries: KeywordEntry[] = [];
  for (const a of articles) {
    const priority = a.type === "pillar" ? 100 : a.type === "seo" ? 50 : 30;
    const candidates = new Set<string>();
    candidates.add(a.title);
    for (const tag of a.tags) candidates.add(tag);
    candidates.add(a.slug.replace(/-/g, " "));
    for (const raw of candidates) {
      const keyword = raw.trim();
      if (keyword.length < 4) continue;
      entries.push({
        keyword,
        url: a.url,
        ownerSlug: a.slug,
        priority,
      });
    }
  }
  entries.sort(
    (x, y) => y.keyword.length - x.keyword.length || y.priority - x.priority,
  );
  return entries;
}

export type InjectResult = {
  body: string;
  injected: { keyword: string; url: string }[];
  skipped: { keyword: string; reason: "not-found" | "self" | "limit" }[];
};

/**
 * Inject internal links into body markdown.
 *
 * Behavior:
 *   - First mention of each keyword only (so the same word doesn't
 *     become a forest of links).
 *   - Up to `limit` total links per article.
 *   - Skips text inside fenced code, inline code, existing markdown
 *     links, headings, raw HTML, and any line starting with `## Sources`
 *     through the next `## ` (to keep the sources block untouched).
 */
export function injectInternalLinks(
  body: string,
  index: KeywordEntry[],
  selfSlug: string,
  options: { limit?: number } = {},
): InjectResult {
  const limit = options.limit ?? DEFAULT_LINK_LIMIT;

  // Mask protected regions with placeholders so the keyword regex
  // cannot match inside them. Restore them at the end.
  //
  // Critical: when we successfully inject a new link inside the loop
  // below, we ALSO mask that new link immediately. Otherwise the next
  // iteration's regex can match a keyword inside the URL of the link
  // we just wrote, producing nested-link garbage like
  // `[Climate](/en/...temperate-forest-[carbon](/en/...)-sink-decline)`.
  const placeholders: string[] = [];
  const maskOne = (s: string): string => {
    const tok = ` PH${placeholders.length} `;
    placeholders.push(s);
    return tok;
  };
  const mask = (input: string, pattern: RegExp): string =>
    input.replace(pattern, (match) => maskOne(match));

  let working = body;
  // Order matters: fence the most aggressive masks first.
  working = mask(working, /```[\s\S]*?```/g); // fenced code
  working = mask(working, /`[^`\n]+`/g); // inline code
  working = mask(working, /\[[^\]]+\]\([^)]+\)/g); // existing links
  working = mask(working, /<[^>]+>/g); // raw HTML / autolinks
  working = mask(working, /^#{1,6}.*$/gm); // headings
  working = mask(working, /^##\s+Sources[\s\S]*?(?=^##\s|\Z)/gim); // sources block

  const injected: { keyword: string; url: string }[] = [];
  const skipped: InjectResult["skipped"] = [];
  const used = new Set<string>();

  for (const entry of index) {
    if (injected.length >= limit) {
      skipped.push({ keyword: entry.keyword, reason: "limit" });
      continue;
    }
    if (entry.ownerSlug === selfSlug) {
      skipped.push({ keyword: entry.keyword, reason: "self" });
      continue;
    }
    const kwLower = entry.keyword.toLowerCase();
    if (used.has(kwLower)) continue;

    const escaped = entry.keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`\\b(${escaped})\\b`, "i");
    const m = re.exec(working);
    if (!m || m.index === undefined) {
      skipped.push({ keyword: entry.keyword, reason: "not-found" });
      continue;
    }
    const before = working.slice(0, m.index);
    const after = working.slice(m.index + m[0].length);
    // Mask the new link as a single placeholder so subsequent
    // iterations cannot match keywords inside the URL or the link text.
    const newLink = `[${m[0]}](${entry.url})`;
    working = `${before}${maskOne(newLink)}${after}`;
    used.add(kwLower);
    injected.push({ keyword: entry.keyword, url: entry.url });
  }

  // Restore protected regions. Loop until no placeholders remain to
  // handle nested cases (a placeholder inside a placeholder is not
  // possible in our masking, but the loop is cheap and defensive).
  while (/ PH\d+ /.test(working)) {
    working = working.replace(/ PH(\d+) /g, (_, i) => placeholders[Number(i)]);
  }

  return { body: working, injected, skipped };
}

/**
 * Build a per-article suggested-related-list using tag overlap. The
 * existing content loader has its own getRelatedArticles() that uses
 * this same heuristic at render time; this function exists for the
 * link-build script so it can write back a `related:` frontmatter
 * suggestion when none exists.
 */
export function suggestRelated<T extends LinkableArticle & { subtopic?: string }>(
  article: T,
  pool: T[],
  limit = RELATED_LINK_LIMIT,
): T[] {
  const tags = new Set(article.tags);
  const candidates = pool.filter(
    (a) => a.slug !== article.slug && a.type !== "pillar",
  );
  const ranked = candidates
    .map((a) => ({
      a,
      sameSubtopic:
        article.subtopic && a.subtopic === article.subtopic ? 1 : 0,
      overlap: a.tags.filter((t) => tags.has(t)).length,
    }))
    .sort((x, y) => {
      if (x.sameSubtopic !== y.sameSubtopic) return y.sameSubtopic - x.sameSubtopic;
      return y.overlap - x.overlap;
    })
    .slice(0, limit)
    .map((x) => x.a);
  return ranked;
}
