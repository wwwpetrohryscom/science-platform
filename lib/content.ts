import type { Category } from "@/lib/seo";
import { articles, insights, discussions } from "@/content/sample-articles";

/**
 * Content domain types.
 *
 * NOTE: This module is the seam between the UI and the eventual CMS.
 * Today it reads from a typed in-repo dataset. Tomorrow, swap the
 * implementations of `getArticles`, `getArticleBySlug`, etc. with
 * calls to your CMS client (Sanity, Contentful, Payload, Notion,
 * direct DB). Components should NEVER import from `@/content/*`
 * directly — they go through this module.
 */

export type ArticleType = "seo" | "expert" | "discussion";

export type Author = {
  name: string;
  title: string;
  bio: string;
  /** External profile or institution page. */
  url?: string;
};

export type ArticleSection = {
  /** kebab-case identifier used as the in-page anchor. */
  id: string;
  heading: string;
  /** Markdown-light: paragraphs separated by blank lines. */
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Article = {
  title: string;
  slug: string;
  category: Category;
  excerpt: string;
  /** Long-form structured body. Each section becomes a TOC entry. */
  content: ArticleSection[];
  author: Author;
  /** ISO 8601 — first publication date. */
  publishedDate: string;
  /** ISO 8601 — REQUIRED. Drives re-indexing signals for search engines. */
  updatedDate: string;
  /** Reading time in minutes — pre-computed at content time. */
  readingTime: number;
  tags: string[];
  type: ArticleType;
  /** Optional FAQ — rendered with FAQPage JSON-LD. */
  faq?: FaqItem[];
  /** Slugs of related articles — drives internal linking. */
  related?: string[];
  /** Optional hero image URL. */
  heroImage?: string;
};

export type Insight = {
  title: string;
  slug: string;
  category: Category;
  excerpt: string;
  /** Insights are punchier than articles — a single argument, defended. */
  argument: string;
  body: ArticleSection[];
  author: Author;
  publishedDate: string;
  updatedDate: string;
  readingTime: number;
  tags: string[];
  related?: string[];
};

export type DiscussionComment = {
  id: string;
  authorName: string;
  authorTitle: string;
  /** Whether the participant has been verified by the platform. */
  isExpert: boolean;
  postedAt: string;
  body: string;
};

export type Discussion = {
  title: string;
  slug: string;
  category: Category;
  topic: string;
  /** Lead expert framing the conversation. */
  moderator: Author;
  publishedDate: string;
  updatedDate: string;
  status: "open" | "closed" | "scheduled";
  participantCount: number;
  comments: DiscussionComment[];
  tags: string[];
};

/* ----------------------------------------------------------------
   Read API — keep this surface stable. CMS swap-in happens here.
---------------------------------------------------------------- */

export async function getArticles(): Promise<Article[]> {
  // TODO(cms): replace with `await cms.articles.list()`
  return [...articles].sort(byUpdatedDesc);
}

export async function getArticlesByCategory(
  category: Category,
): Promise<Article[]> {
  const all = await getArticles();
  return all.filter((a) => a.category === category);
}

export async function getArticleBySlug(
  slug: string,
): Promise<Article | undefined> {
  // TODO(cms): replace with `await cms.articles.get(slug)`
  return articles.find((a) => a.slug === slug);
}

export async function getRelatedArticles(
  article: Article,
  limit = 3,
): Promise<Article[]> {
  const all = await getArticles();

  // 1. Explicit "related" wins.
  const explicit = (article.related ?? [])
    .map((slug) => all.find((a) => a.slug === slug))
    .filter((a): a is Article => Boolean(a));

  if (explicit.length >= limit) return explicit.slice(0, limit);

  // 2. Fall back to same-category, ranked by tag overlap.
  const fallback = all
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .map((a) => ({
      article: a,
      score: a.tags.filter((t) => article.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.article)
    .filter((a) => !explicit.find((e) => e.slug === a.slug));

  return [...explicit, ...fallback].slice(0, limit);
}

export async function getFeaturedInsights(limit = 2): Promise<Insight[]> {
  return [...insights].sort(byUpdatedDesc).slice(0, limit);
}

export async function getInsights(): Promise<Insight[]> {
  return [...insights].sort(byUpdatedDesc);
}

export async function getInsightBySlug(
  slug: string,
): Promise<Insight | undefined> {
  return insights.find((i) => i.slug === slug);
}

export async function getDiscussions(): Promise<Discussion[]> {
  return [...discussions].sort(byUpdatedDesc);
}

/* ----------------------------------------------------------------
   Helpers
---------------------------------------------------------------- */

function byUpdatedDesc<T extends { updatedDate: string }>(a: T, b: T) {
  return b.updatedDate.localeCompare(a.updatedDate);
}

/**
 * Format an ISO date for display. Server-rendered, locale-stable.
 */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Compute reading time from a word count. Useful when content moves
 * to a CMS that doesn't pre-compute it.
 */
export function readingTimeFromWords(words: number): number {
  return Math.max(1, Math.round(words / 220));
}
