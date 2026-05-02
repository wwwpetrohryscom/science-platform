import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked, type Tokens } from "marked";

import {
  categories,
  getCategory,
  getSubtopic,
  isCategorySlug,
  type CategorySlug,
} from "@/lib/categories";
import { getAuthor, type Author } from "@/lib/authors";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localizedPath,
  type Locale,
} from "@/lib/i18n";

/* ----------------------------------------------------------------
   Types
---------------------------------------------------------------- */

export type ArticleType = "seo" | "pillar" | "expert";

export type FaqItem = {
  question: string;
  answer: string;
};

export type TocItem = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export type Article = {
  // Identity (derived from path)
  slug: string;
  category: CategorySlug;
  subtopic: string;

  // i18n
  /** Locale this article was loaded for (the *requested* locale). */
  locale: Locale;
  /**
   * Locale this article was actually parsed from. Differs from `locale`
   * when the requested translation is missing and the loader fell back
   * to the default-locale (English) source.
   */
  sourceLocale: Locale;
  /** True when content was served from the EN fallback. */
  localeFallback: boolean;
  /**
   * The locales for which a translation of this article exists on disk.
   * Used to drive hreflang and the language switcher's per-article
   * "is the translation there?" lookup.
   */
  availableLocales: Locale[];

  // Frontmatter
  title: string;
  type: ArticleType;
  excerpt: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: number;
  tags: string[];
  related: string[];
  /** Optional. If unset, the article is its own pillar reference (when type === "pillar"). */
  pillar?: string;
  heroImage?: string;
  faq?: FaqItem[];

  // Resolved
  author: Author;

  // Body
  /** Raw markdown source. Useful for excerpts, search indexing, RSS. */
  rawBody: string;
  /** Rendered HTML, ready to inject. Server-side only — content is trusted. */
  html: string;
  /** Headings extracted from rawBody for the in-page table of contents. */
  toc: TocItem[];

  // URL
  /** Canonical path: `/<locale>/<category>/<subtopic>/<slug>` */
  url: string;
};

export type Insight = {
  slug: string;
  locale: Locale;
  sourceLocale: Locale;
  localeFallback: boolean;
  availableLocales: Locale[];
  title: string;
  excerpt: string;
  /** The single load-bearing claim, surfaced above the fold. */
  argument: string;
  category: CategorySlug;
  publishedDate: string;
  updatedDate: string;
  readingTime: number;
  tags: string[];
  related: string[];
  author: Author;
  rawBody: string;
  html: string;
  toc: TocItem[];
  url: string;
};

/* ----------------------------------------------------------------
   File-system loader
   ---------------------------------------------------------------
   Each locale has its own content tree under /content/<locale>/.
   We load every locale lazily on first access and cache results
   in-process so file IO stays a one-time hit per locale.

   For requested-locale ⇒ source-locale resolution: we first look in
   the requested locale's tree; if the slug isn't there, we fall back
   to the default locale (English) and mark `localeFallback: true`.
   This is the article-level fallback that satisfies the requirement
   "do not expose broken pages".
---------------------------------------------------------------- */

const CONTENT_ROOT = path.join(process.cwd(), "content");

function localeRoot(locale: Locale): string {
  return path.join(CONTENT_ROOT, locale);
}

function listMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".md"))
    .map((d) => path.join(dir, d.name));
}

/**
 * Discover the set of locales for which a translation of a given
 * (category, subtopic, slug) exists on disk. Always includes EN
 * because EN serves as the universal fallback even when the source
 * file is the only one in the tree.
 */
function discoverAvailableLocales(
  category: CategorySlug,
  subtopic: string,
  slug: string,
): Locale[] {
  const out: Locale[] = [];
  for (const loc of LOCALES) {
    const file = path.join(
      localeRoot(loc),
      category,
      subtopic,
      `${slug}.md`,
    );
    if (fs.existsSync(file)) out.push(loc);
  }
  // Guarantee EN is present even if only as the fallback source so
  // every article has at least one canonical reference.
  if (!out.includes(DEFAULT_LOCALE)) out.push(DEFAULT_LOCALE);
  return out;
}

function discoverInsightLocales(slug: string): Locale[] {
  const out: Locale[] = [];
  for (const loc of LOCALES) {
    const file = path.join(localeRoot(loc), "insights", `${slug}.md`);
    if (fs.existsSync(file)) out.push(loc);
  }
  if (!out.includes(DEFAULT_LOCALE)) out.push(DEFAULT_LOCALE);
  return out;
}

function loadArticlesForLocale(locale: Locale): Article[] {
  const out: Article[] = [];

  // Determine the slug-set to render for this locale: the union of
  // the locale's own slugs PLUS every English slug (because missing
  // translations fall back to English).
  for (const cat of categories) {
    for (const sub of cat.subtopics) {
      const localizedDir = path.join(
        localeRoot(locale),
        cat.slug,
        sub.slug,
      );
      const englishDir = path.join(
        localeRoot(DEFAULT_LOCALE),
        cat.slug,
        sub.slug,
      );

      const localizedSlugs = new Set(
        listMarkdownFiles(localizedDir).map((f) =>
          path.basename(f, ".md"),
        ),
      );
      const englishSlugs = new Set(
        listMarkdownFiles(englishDir).map((f) =>
          path.basename(f, ".md"),
        ),
      );
      const slugs = new Set<string>([...localizedSlugs, ...englishSlugs]);

      for (const slug of slugs) {
        const localizedFile = path.join(localizedDir, `${slug}.md`);
        const fallbackFile = path.join(englishDir, `${slug}.md`);
        const localeAvailable = fs.existsSync(localizedFile);
        const file = localeAvailable ? localizedFile : fallbackFile;
        if (!fs.existsSync(file)) continue; // shouldn't happen — set union covers it.

        const article = parseArticle({
          file,
          slug,
          category: cat.slug,
          subtopic: sub.slug,
          requestedLocale: locale,
          sourceLocale: localeAvailable ? locale : DEFAULT_LOCALE,
        });
        out.push(article);
      }
    }
  }

  return out;
}

function loadInsightsForLocale(locale: Locale): Insight[] {
  const localizedDir = path.join(localeRoot(locale), "insights");
  const englishDir = path.join(localeRoot(DEFAULT_LOCALE), "insights");

  const localizedSlugs = new Set(
    listMarkdownFiles(localizedDir).map((f) => path.basename(f, ".md")),
  );
  const englishSlugs = new Set(
    listMarkdownFiles(englishDir).map((f) => path.basename(f, ".md")),
  );
  const slugs = new Set<string>([...localizedSlugs, ...englishSlugs]);

  const out: Insight[] = [];
  for (const slug of slugs) {
    const localizedFile = path.join(localizedDir, `${slug}.md`);
    const fallbackFile = path.join(englishDir, `${slug}.md`);
    const localeAvailable = fs.existsSync(localizedFile);
    const file = localeAvailable ? localizedFile : fallbackFile;
    if (!fs.existsSync(file)) continue;

    out.push(
      parseInsight({
        file,
        slug,
        requestedLocale: locale,
        sourceLocale: localeAvailable ? locale : DEFAULT_LOCALE,
      }),
    );
  }
  return out;
}

/* ----------------------------------------------------------------
   Parsers
---------------------------------------------------------------- */

type ArticleParseInput = {
  file: string;
  slug: string;
  category: CategorySlug;
  subtopic: string;
  requestedLocale: Locale;
  sourceLocale: Locale;
};

function parseArticle({
  file,
  slug,
  category,
  subtopic,
  requestedLocale,
  sourceLocale,
}: ArticleParseInput): Article {
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  // Schema validation — fail loud at build time so authoring mistakes
  // surface immediately instead of producing broken pages.
  const fm = data as Record<string, unknown>;
  requireString(fm, "title", file);
  requireString(fm, "excerpt", file);
  requireString(fm, "type", file);
  requireString(fm, "author", file);
  requireDate(fm, "publishedDate", file);
  requireDate(fm, "updatedDate", file);

  const type = fm.type as string;
  if (type !== "seo" && type !== "pillar" && type !== "expert") {
    throw new Error(
      `${file}: type must be one of "seo" | "pillar" | "expert" (got "${type}").`,
    );
  }

  const tags = Array.isArray(fm.tags) ? (fm.tags as string[]) : [];
  const related = Array.isArray(fm.related) ? (fm.related as string[]) : [];
  const faq = Array.isArray(fm.faq)
    ? (fm.faq as FaqItem[]).map((q) => ({
        question: String(q.question),
        answer: String(q.answer),
      }))
    : undefined;

  const author = getAuthor(String(fm.author));
  const html = renderMarkdown(content);
  const toc = extractToc(content);
  const availableLocales = discoverAvailableLocales(category, subtopic, slug);

  return {
    slug,
    category,
    subtopic,
    locale: requestedLocale,
    sourceLocale,
    localeFallback: requestedLocale !== sourceLocale,
    availableLocales,
    title: String(fm.title),
    type,
    excerpt: String(fm.excerpt),
    publishedDate: toIsoDate(fm.publishedDate),
    updatedDate: toIsoDate(fm.updatedDate),
    readingTime:
      typeof fm.readingTime === "number"
        ? fm.readingTime
        : estimateReadingTime(content),
    tags,
    related,
    pillar: typeof fm.pillar === "string" ? fm.pillar : undefined,
    heroImage: typeof fm.heroImage === "string" ? fm.heroImage : undefined,
    faq,
    author,
    rawBody: content,
    html,
    toc,
    url: localizedPath(requestedLocale, `/${category}/${subtopic}/${slug}`),
  };
}

type InsightParseInput = {
  file: string;
  slug: string;
  requestedLocale: Locale;
  sourceLocale: Locale;
};

function parseInsight({
  file,
  slug,
  requestedLocale,
  sourceLocale,
}: InsightParseInput): Insight {
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Record<string, unknown>;

  requireString(fm, "title", file);
  requireString(fm, "excerpt", file);
  requireString(fm, "argument", file);
  requireString(fm, "author", file);
  requireString(fm, "category", file);
  requireDate(fm, "publishedDate", file);
  requireDate(fm, "updatedDate", file);

  const category = String(fm.category);
  if (!isCategorySlug(category)) {
    throw new Error(`${file}: invalid category "${category}".`);
  }

  return {
    slug,
    locale: requestedLocale,
    sourceLocale,
    localeFallback: requestedLocale !== sourceLocale,
    availableLocales: discoverInsightLocales(slug),
    title: String(fm.title),
    excerpt: String(fm.excerpt),
    argument: String(fm.argument),
    category,
    publishedDate: toIsoDate(fm.publishedDate),
    updatedDate: toIsoDate(fm.updatedDate),
    readingTime:
      typeof fm.readingTime === "number"
        ? fm.readingTime
        : estimateReadingTime(content),
    tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
    related: Array.isArray(fm.related) ? (fm.related as string[]) : [],
    author: getAuthor(String(fm.author)),
    rawBody: content,
    html: renderMarkdown(content),
    toc: extractToc(content),
    url: localizedPath(requestedLocale, `/insight/${slug}`),
  };
}

/* ----------------------------------------------------------------
   Markdown rendering + TOC extraction

   Content is authored in-house and trusted, so we render to HTML
   with marked and inject via dangerouslySetInnerHTML. If the source
   ever opens to untrusted input, swap in DOMPurify or react-markdown.
---------------------------------------------------------------- */

marked.setOptions({ gfm: true, breaks: false });

const renderer = new marked.Renderer();
renderer.heading = function ({ tokens, depth }: Tokens.Heading) {
  const text = this.parser.parseInline(tokens);
  if (depth === 2 || depth === 3) {
    const id = slugifyHeading(stripTags(text));
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  }
  return `<h${depth}>${text}</h${depth}>`;
};

function renderMarkdown(md: string): string {
  return marked.parse(md, { renderer, async: false }) as string;
}

function extractToc(md: string): TocItem[] {
  const tokens = marked.lexer(md);
  const items: TocItem[] = [];
  for (const token of tokens) {
    if (token.type === "heading" && (token.depth === 2 || token.depth === 3)) {
      items.push({
        id: slugifyHeading(token.text),
        text: token.text,
        depth: token.depth as 2 | 3,
      });
    }
  }
  return items;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, "");
}

/* ----------------------------------------------------------------
   Validation helpers — keep authoring honest.
---------------------------------------------------------------- */

function requireString(
  fm: Record<string, unknown>,
  key: string,
  file: string,
): void {
  if (typeof fm[key] !== "string" || (fm[key] as string).trim() === "") {
    throw new Error(`${file}: frontmatter "${key}" is required (string).`);
  }
}

function requireDate(
  fm: Record<string, unknown>,
  key: string,
  file: string,
): void {
  const v = fm[key];
  if (v instanceof Date) return;
  if (typeof v === "string" && !Number.isNaN(Date.parse(v))) return;
  throw new Error(
    `${file}: frontmatter "${key}" must be a date (got ${typeof v}). Required for SEO re-indexing.`,
  );
}

function toIsoDate(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

function estimateReadingTime(md: string): number {
  const words = md.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/* ----------------------------------------------------------------
   Per-locale cached singletons.
---------------------------------------------------------------- */

const _articles = new Map<Locale, Article[]>();
const _insights = new Map<Locale, Insight[]>();

function articleStore(locale: Locale): Article[] {
  let s = _articles.get(locale);
  if (!s) {
    s = loadArticlesForLocale(locale);
    _articles.set(locale, s);
  }
  return s;
}

function insightStore(locale: Locale): Insight[] {
  let s = _insights.get(locale);
  if (!s) {
    s = loadInsightsForLocale(locale);
    _insights.set(locale, s);
  }
  return s;
}

/* ----------------------------------------------------------------
   Public API — locale is now a required first parameter.
   When swapping to a CMS, replace the loaders above; this surface
   stays stable.
---------------------------------------------------------------- */

export async function getAllArticles(locale: Locale): Promise<Article[]> {
  return [...articleStore(locale)].sort(byUpdatedDesc);
}

export async function getArticlesByCategory(
  locale: Locale,
  category: CategorySlug,
): Promise<Article[]> {
  return (await getAllArticles(locale)).filter((a) => a.category === category);
}

export async function getArticlesBySubtopic(
  locale: Locale,
  category: CategorySlug,
  subtopic: string,
): Promise<Article[]> {
  return (await getAllArticles(locale)).filter(
    (a) => a.category === category && a.subtopic === subtopic,
  );
}

export async function getArticle(
  locale: Locale,
  category: CategorySlug,
  subtopic: string,
  slug: string,
): Promise<Article | undefined> {
  return articleStore(locale).find(
    (a) => a.category === category && a.subtopic === subtopic && a.slug === slug,
  );
}

export async function getArticleBySlug(
  locale: Locale,
  slug: string,
): Promise<Article | undefined> {
  return articleStore(locale).find((a) => a.slug === slug);
}

export async function getPillarForSubtopic(
  locale: Locale,
  category: CategorySlug,
  subtopic: string,
): Promise<Article | undefined> {
  const inSubtopic = await getArticlesBySubtopic(locale, category, subtopic);
  return inSubtopic.find((a) => a.type === "pillar") ?? inSubtopic[0];
}

export async function getRelatedArticles(
  article: Article,
  limit = 3,
): Promise<Article[]> {
  const all = await getAllArticles(article.locale);
  const candidates = all.filter((a) => a.slug !== article.slug);

  const explicit = (article.related ?? [])
    .map((slug) => candidates.find((a) => a.slug === slug))
    .filter((a): a is Article => Boolean(a));

  const sameSubtopic = candidates
    .filter((a) => a.category === article.category && a.subtopic === article.subtopic)
    .filter((a) => !explicit.find((e) => e.slug === a.slug))
    .sort(byTagOverlap(article.tags));

  const sameCategory = candidates
    .filter((a) => a.category === article.category)
    .filter((a) => !explicit.find((e) => e.slug === a.slug))
    .filter((a) => !sameSubtopic.find((s) => s.slug === a.slug))
    .sort(byTagOverlap(article.tags));

  return [...explicit, ...sameSubtopic, ...sameCategory].slice(0, limit);
}

export async function getSubtopicCounts(
  locale: Locale,
  category: CategorySlug,
): Promise<Record<string, number>> {
  const all = await getArticlesByCategory(locale, category);
  const counts: Record<string, number> = {};
  for (const sub of getCategory(category).subtopics) counts[sub.slug] = 0;
  for (const a of all) counts[a.subtopic] = (counts[a.subtopic] ?? 0) + 1;
  return counts;
}

export function getSiblingSubtopics(
  category: CategorySlug,
  currentSubtopic: string,
) {
  return getCategory(category).subtopics.filter(
    (s) => s.slug !== currentSubtopic,
  );
}

/* ---------- Insights ---------- */

export async function getAllInsights(locale: Locale): Promise<Insight[]> {
  return [...insightStore(locale)].sort(byUpdatedDesc);
}

export async function getInsight(
  locale: Locale,
  slug: string,
): Promise<Insight | undefined> {
  return insightStore(locale).find((i) => i.slug === slug);
}

export async function getFeaturedInsights(
  locale: Locale,
  limit = 2,
): Promise<Insight[]> {
  return (await getAllInsights(locale)).slice(0, limit);
}

/* ---------- Helpers exposed for UI ---------- */

const dateFormatters = new Map<Locale, Intl.DateTimeFormat>();

function dateFormatter(locale: Locale): Intl.DateTimeFormat {
  let f = dateFormatters.get(locale);
  if (!f) {
    f = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    dateFormatters.set(locale, f);
  }
  return f;
}

export function formatDate(iso: string, locale: Locale = DEFAULT_LOCALE): string {
  return dateFormatter(locale).format(new Date(iso));
}

export function assertSubtopicExists(
  category: CategorySlug,
  subtopic: string,
): boolean {
  return Boolean(getSubtopic(category, subtopic));
}

/* ---------- Sorting ---------- */

function byUpdatedDesc<T extends { updatedDate: string }>(a: T, b: T): number {
  return b.updatedDate.localeCompare(a.updatedDate);
}

function byTagOverlap(target: string[]) {
  const set = new Set(target);
  return <T extends { tags: string[]; updatedDate: string }>(a: T, b: T): number => {
    const aScore = a.tags.filter((t) => set.has(t)).length;
    const bScore = b.tags.filter((t) => set.has(t)).length;
    if (aScore !== bScore) return bScore - aScore;
    return b.updatedDate.localeCompare(a.updatedDate);
  };
}
