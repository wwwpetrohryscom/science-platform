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

export const DEFAULT_LINK_LIMIT = 5;
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
  /** Taxonomy category — the disciplinary boundary a keyword may not
   *  silently cross. See the note on sections below. */
  category?: string;
  /** Slugs the article's own frontmatter names as related. These may be
   *  linked across categories, because a human declared the pairing. */
  related?: string[];
};

export type KeywordEntry = {
  keyword: string;
  url: string;
  /** Owner article slug — used to skip self-links during injection. */
  ownerSlug: string;
  /** Owner's taxonomy category, for the section guard. */
  ownerCategory?: string;
  /** Higher = preferred when two entries share a keyword. */
  priority: number;
};

/**
 * Minimum words in a link anchor.
 *
 * Single-word keywords are the mechanism behind anchor stuffing. An
 * index that contains "carbon", "cells", "energy" or "measurement"
 * will match those words somewhere in almost every article and link
 * them — frequently in a sense the target page is not about. The
 * corpus accumulated links like `[cells](/en/biology/cells/what-is-a-cell)`
 * inside a sentence about photovoltaic cells, and
 * `[measurement](/en/physics/quantum-basics/electromagnetic-spectrum-applications)`
 * inside a sentence about forest-carbon measurement.
 *
 * Requiring two words does not fix wrong-sense linking on its own, but
 * it removes the class of keyword that makes it near-certain.
 */
export const MIN_ANCHOR_WORDS = 2;

/**
 * Anchors whose referent is fixed by the sentence, not by the index.
 *
 * MIN_ANCHOR_WORDS removes single words, and `crossesSection` removes
 * matches that jump a discipline. Neither catches a two-word phrase that
 * names a general thing inside one discipline, and the corpus filled up
 * with exactly that:
 *
 *   - "land surface" is a plain geographic noun in every one of the 15
 *     sentences that carried it ("3 per cent of the global land
 *     surface"), all linked to an article about biosphere-climate
 *     interactions.
 *   - "satellite products" linked to primary production, in sentences
 *     about burned area and about the accuracy of thermal retrievals.
 *   - "land use" linked to forest ecosystems, in a sentence about
 *     bookkeeping models and in a list of radiative forcing agents.
 *   - "energy budget" is the planet's radiation balance in six
 *     sentences, the surface energy balance in three, and the power
 *     draw of a quantum computer in one. All ten went to the same two
 *     articles.
 *   - "gas exchange" is air-sea in the ocean articles, alveolar in the
 *     physiology articles, and canopy-scale above a flux tower.
 *
 * These are not near-misses to be tuned. The string genuinely does not
 * determine the target, so the index must not claim it. A human can
 * still link any of them by hand, and `related` frontmatter still works
 * — this only stops the automatic pass from guessing.
 */
export const GENERIC_ANCHORS: ReadonlySet<string> = new Set([
  "land surface",
  "land use",
  "satellite products",
  "energy budget",
  "gas exchange",
]);

/**
 * Sections.
 *
 * Two words being identical does not make them the same idea. "Energy
 * budget" in an article about the cell is the ATP economy; in
 * atmospheric physics it is the planet's radiation balance. The index
 * knows only the string, so left alone it links the first to the
 * second — which is the photovoltaic-cells failure in a new costume,
 * and the reason the entity graph confines every concept to declared
 * sections rather than trusting the match.
 *
 * A keyword may therefore only be linked inside an article of the same
 * category, with one exception: a target the source article's own
 * frontmatter names as `related`. That pairing was authored, and an
 * authored pairing is the only kind this codebase trusts across a
 * disciplinary boundary.
 */
export function crossesSection(
  entry: Pick<KeywordEntry, "ownerCategory" | "ownerSlug">,
  source: { category?: string; related?: string[] },
): boolean {
  if (!entry.ownerCategory || !source.category) return false;
  if (entry.ownerCategory === source.category) return false;
  return !(source.related ?? []).includes(entry.ownerSlug);
}

function wordsIn(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Whether a match sits inside a longer proper name.
 *
 * "Climate change" is a topic. "Copernicus Climate Change Service" and
 * "ESA Climate Change Initiative" are the names of two programmes, and
 * linking the middle of either sends a reader who clicked the name of a
 * service to an article about the phenomenon. The signal is a
 * capitalised word butted directly against the match — on the left in
 * any case, on the right only when the match is itself capitalised, so
 * that an ordinary sentence-initial "Climate change is…" still links.
 *
 * A capital at the very start of a sentence is not evidence of anything,
 * so it is excluded.
 */
export function insideProperName(text: string, start: number, end: number): boolean {
  const before = text.slice(Math.max(0, start - 80), start);
  const after = text.slice(end, end + 80);

  const leftWord = /(?:^|[\s(])(\p{L}[\p{L}'-]*)[ \t]$/u.exec(before);
  if (leftWord) {
    const w = leftWord[1];
    const capitalised = /^\p{Lu}/u.test(w) && w.length > 1;
    // Sentence-initial capitals carry no information.
    const idx = before.lastIndexOf(w);
    const preceding = before.slice(0, idx).replace(/\s+$/, "");
    const sentenceStart = preceding === "" || /[.!?:•\n]$/.test(preceding);
    if (capitalised && !sentenceStart) return true;
  }

  if (/^\p{Lu}/u.test(text.slice(start, end))) {
    const rightWord = /^[ \t](\p{L}[\p{L}'-]*)/u.exec(after);
    if (rightWord && /^\p{Lu}/u.test(rightWord[1]) && rightWord[1].length > 1) {
      return true;
    }
  }
  return false;
}

/**
 * Build the keyword index for a set of articles. Pillars have higher
 * priority than SEO articles, which have higher priority than expert
 * pieces — so an SEO article will link UP to its pillar before linking
 * sideways.
 *
 * Keywords come from: article title, multi-word tags, and a humanized
 * form of the slug. Length-sorted descending so longer phrases win over
 * substring matches.
 *
 * Single-word candidates are dropped entirely — see MIN_ANCHOR_WORDS.
 */
export function buildKeywordIndex(articles: LinkableArticle[]): KeywordEntry[] {
  const entries: KeywordEntry[] = [];
  for (const a of articles) {
    const priority = a.type === "pillar" ? 100 : a.type === "seo" ? 50 : 30;
    const candidates = new Set<string>();
    candidates.add(a.title);
    for (const tag of a.tags) candidates.add(tag.replace(/-/g, " "));
    candidates.add(a.slug.replace(/-/g, " "));
    for (const raw of candidates) {
      const keyword = raw.trim();
      if (keyword.length < 8) continue;
      if (wordsIn(keyword) < MIN_ANCHOR_WORDS) continue;
      // A keyword with a digit in it is a designation, not a topic:
      // "IPCC AR6", "CMIP6", "SSP5 8.5", "Sentinel 2". Those name a
      // report, a model intercomparison or a satellite, and a reader
      // clicking one expects that thing, not whichever article happens
      // to carry the tag. The tag "ipcc-ar6" was linking five separate
      // articles at one page about carbon budgets.
      if (/\d/.test(keyword)) continue;
      // A phrase that names a general thing rather than this article's
      // subject — see GENERIC_ANCHORS.
      if (GENERIC_ANCHORS.has(keyword.toLowerCase())) continue;
      entries.push({
        keyword,
        url: a.url,
        ownerSlug: a.slug,
        ownerCategory: a.category,
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
  skipped: {
    keyword: string;
    reason:
      | "not-found"
      | "self"
      | "limit"
      | "duplicate-target"
      | "anchor-too-short"
      | "cross-section"
      | "own-subject"
      | "proper-name";
  }[];
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
  options: {
    limit?: number;
    /** The article being linked into. Without it the section guard and
     *  the own-subject guard cannot run, so both are skipped and the
     *  behaviour is the old one. */
    source?: { category?: string; related?: string[]; title?: string; tags?: string[] };
  } = {},
): InjectResult {
  const limit = options.limit ?? DEFAULT_LINK_LIMIT;
  const source = options.source;
  // The words this article is itself about. A reader on the climate
  // sensitivity page does not need "climate sensitivity" to be a link
  // to somewhere else, and handing an article's own subject to another
  // page is how a corpus ends up disagreeing with itself about which
  // page owns a concept.
  const ownSubjects = new Set(
    [source?.title ?? "", ...(source?.tags ?? []).map((t) => t.replace(/-/g, " "))]
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean),
  );

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
  // Order matters, and the Sources block has to go first.
  //
  // It used to be masked last, after the heading mask had already
  // replaced `## Sources` with a placeholder — so the pattern anchored
  // on that heading could no longer match and the whole block was left
  // unprotected. Nothing showed for a long time because every citation
  // in a Sources list is already a markdown link, and links are masked;
  // the plain prose between them is not. The failure surfaced as
  // `Intergovernmental Panel on [Climate Change](/de/ecology/...)`
  // inside a citation. A mask that depends on an earlier mask not
  // having run is not a mask.
  working = mask(working, /^##\s+Sources[\s\S]*/gim);
  working = mask(working, /```[\s\S]*?```/g); // fenced code
  working = mask(working, /`[^`\n]+`/g); // inline code
  working = mask(working, /\[[^\]]+\]\([^)]+\)/g); // existing links
  working = mask(working, /<[^>]+>/g); // raw HTML / autolinks
  working = mask(working, /^#{1,6}.*$/gm); // headings

  const injected: { keyword: string; url: string }[] = [];
  const skipped: InjectResult["skipped"] = [];
  const used = new Set<string>();
  // One link per destination per article. Without this the same target
  // was linked three, four, even six times from one page — which reads
  // as anchor stuffing to a reader and to a crawler, and adds nothing
  // after the first occurrence.
  const linkedTargets = new Set<string>();
  // Seed both sets from what the body already links. The page-level
  // rule is "link the idea once", not "add each idea once per run": an
  // article that already links a target by hand does not need the
  // injector to link it again with a different anchor, and doing so is
  // what the corpus's anchor-repeat rule reports.
  for (const m of body.matchAll(/\[([^\]]+)\]\((\/[a-z]{2}\/[^)]+)\)/g)) {
    used.add(m[1].trim().toLowerCase());
    linkedTargets.add(m[2]);
  }

  for (const entry of index) {
    if (injected.length >= limit) {
      skipped.push({ keyword: entry.keyword, reason: "limit" });
      continue;
    }
    if (entry.ownerSlug === selfSlug) {
      skipped.push({ keyword: entry.keyword, reason: "self" });
      continue;
    }
    if (linkedTargets.has(entry.url)) {
      // Burn the keyword rather than letting the next owner claim it.
      // The index is ordered best-owner-first, so passing a keyword
      // down after its best target is taken is how "climate change"
      // ends up pointing at carbon-cycle feedbacks instead of the
      // article about climate change.
      used.add(entry.keyword.toLowerCase());
      skipped.push({ keyword: entry.keyword, reason: "duplicate-target" });
      continue;
    }
    if (source && crossesSection(entry, source)) {
      skipped.push({ keyword: entry.keyword, reason: "cross-section" });
      continue;
    }
    if (ownSubjects.has(entry.keyword.trim().toLowerCase())) {
      skipped.push({ keyword: entry.keyword, reason: "own-subject" });
      continue;
    }
    if (wordsIn(entry.keyword) < MIN_ANCHOR_WORDS) {
      skipped.push({ keyword: entry.keyword, reason: "anchor-too-short" });
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
    if (insideProperName(working, m.index, m.index + m[0].length)) {
      skipped.push({ keyword: entry.keyword, reason: "proper-name" });
      continue;
    }
    const before = working.slice(0, m.index);
    const after = working.slice(m.index + m[0].length);
    // Mask the new link as a single placeholder so subsequent
    // iterations cannot match keywords inside the URL or the link text.
    const newLink = `[${m[0]}](${entry.url})`;
    working = `${before}${maskOne(newLink)}${after}`;
    used.add(kwLower);
    linkedTargets.add(entry.url);
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
