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
  /** Canonical path: `/<category>/<subtopic>/<slug>` */
  url: string;
};

export type Insight = {
  slug: string;
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
   We read the content tree once at module load time. Next.js
   bundles this in the server build; the disk reads happen at build
   and at runtime in the Node server. Static generation makes the
   runtime cost a one-time hit.

   When swapping to a CMS, replace `loadAllArticles` and
   `loadAllInsights` with the equivalent network reads — the
   downstream API stays identical.
---------------------------------------------------------------- */

const CONTENT_ROOT = path.join(process.cwd(), "content");

function listMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".md"))
    .map((d) => path.join(dir, d.name));
}

function loadAllArticles(): Article[] {
  const out: Article[] = [];

  for (const cat of categories) {
    for (const sub of cat.subtopics) {
      const dir = path.join(CONTENT_ROOT, cat.slug, sub.slug);
      for (const file of listMarkdownFiles(dir)) {
        const slug = path.basename(file, ".md");
        const article = parseArticle({
          file,
          slug,
          category: cat.slug,
          subtopic: sub.slug,
        });
        out.push(article);
      }
    }
  }

  return out;
}

function loadAllInsights(): Insight[] {
  const dir = path.join(CONTENT_ROOT, "insights");
  return listMarkdownFiles(dir).map((file) => {
    const slug = path.basename(file, ".md");
    return parseInsight({ file, slug });
  });
}

/* ----------------------------------------------------------------
   Parsers
---------------------------------------------------------------- */

type ArticleParseInput = {
  file: string;
  slug: string;
  category: CategorySlug;
  subtopic: string;
};

function parseArticle({
  file,
  slug,
  category,
  subtopic,
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

  return {
    slug,
    category,
    subtopic,
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
    url: `/${category}/${subtopic}/${slug}`,
  };
}

function parseInsight({ file, slug }: { file: string; slug: string }): Insight {
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
    url: `/insight/${slug}`,
  };
}

/* ----------------------------------------------------------------
   Markdown rendering + TOC extraction

   Content is authored in-house and trusted, so we render to HTML
   with marked and inject via dangerouslySetInnerHTML. If the source
   ever opens to untrusted input, swap in DOMPurify or react-markdown.
---------------------------------------------------------------- */

marked.setOptions({ gfm: true, breaks: false });

// Custom renderer: add stable IDs to H2/H3 for in-page anchors.
// We build all heading depths inline (rather than delegating to the
// base renderer) because marked's renderer-call signature is brittle
// across versions and we only need standard <hN> output anyway.
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
  // gray-matter parses YAML dates into Date objects automatically.
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
   Cached singleton — read from disk once per server process.
---------------------------------------------------------------- */

let _articles: Article[] | null = null;
let _insights: Insight[] | null = null;

function articleStore(): Article[] {
  if (!_articles) _articles = loadAllArticles();
  return _articles;
}

function insightStore(): Insight[] {
  if (!_insights) _insights = loadAllInsights();
  return _insights;
}

/* ----------------------------------------------------------------
   Public API — keep this surface stable. CMS swap-in happens here.
---------------------------------------------------------------- */

export async function getAllArticles(): Promise<Article[]> {
  return [...articleStore()].sort(byUpdatedDesc);
}

export async function getArticlesByCategory(
  category: CategorySlug,
): Promise<Article[]> {
  return (await getAllArticles()).filter((a) => a.category === category);
}

export async function getArticlesBySubtopic(
  category: CategorySlug,
  subtopic: string,
): Promise<Article[]> {
  return (await getAllArticles()).filter(
    (a) => a.category === category && a.subtopic === subtopic,
  );
}

export async function getArticle(
  category: CategorySlug,
  subtopic: string,
  slug: string,
): Promise<Article | undefined> {
  return articleStore().find(
    (a) => a.category === category && a.subtopic === subtopic && a.slug === slug,
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articleStore().find((a) => a.slug === slug);
}

/**
 * The pillar article for a given subtopic, if one exists.
 *
 * Priority:
 *   1. An article with `type: pillar` in that subtopic.
 *   2. (Fallback) the most-recently-updated article in the subtopic.
 *
 * We never return undefined for a populated subtopic — every
 * subtopic should have a "what to read first" entry-point.
 */
export async function getPillarForSubtopic(
  category: CategorySlug,
  subtopic: string,
): Promise<Article | undefined> {
  const inSubtopic = await getArticlesBySubtopic(category, subtopic);
  return inSubtopic.find((a) => a.type === "pillar") ?? inSubtopic[0];
}

/**
 * Internal-linking resolver.
 *
 * Returns up to `limit` related articles using a layered strategy:
 *   1. Explicit `related: [slug, ...]` from frontmatter (in order).
 *   2. Other articles in the same subtopic, ranked by tag overlap.
 *   3. Other articles in the same category, ranked by tag overlap.
 *
 * The pillar article for the current subtopic is always returned
 * separately via `getPillarForSubtopic` — do not include it here.
 */
export async function getRelatedArticles(
  article: Article,
  limit = 3,
): Promise<Article[]> {
  const all = await getAllArticles();
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

/** Counts per-subtopic — for category-page subtopic cards. */
export async function getSubtopicCounts(
  category: CategorySlug,
): Promise<Record<string, number>> {
  const all = await getArticlesByCategory(category);
  const counts: Record<string, number> = {};
  for (const sub of getCategory(category).subtopics) counts[sub.slug] = 0;
  for (const a of all) counts[a.subtopic] = (counts[a.subtopic] ?? 0) + 1;
  return counts;
}

/** Sibling subtopics within the same category — for cross-linking. */
export function getSiblingSubtopics(
  category: CategorySlug,
  currentSubtopic: string,
) {
  return getCategory(category).subtopics.filter(
    (s) => s.slug !== currentSubtopic,
  );
}

/* ---------- Insights ---------- */

export async function getAllInsights(): Promise<Insight[]> {
  return [...insightStore()].sort(byUpdatedDesc);
}

export async function getInsight(slug: string): Promise<Insight | undefined> {
  return insightStore().find((i) => i.slug === slug);
}

export async function getFeaturedInsights(limit = 2): Promise<Insight[]> {
  return (await getAllInsights()).slice(0, limit);
}

/* ---------- Helpers exposed for UI ---------- */

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Validate that a subtopic exists for a category. Used by route
 * handlers that need to throw a 404 on bad URL parameters before
 * doing any data work.
 */
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
