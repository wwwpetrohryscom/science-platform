import { siteConfig } from "@/lib/seo";
import { getAllArticles, getAllInsights } from "@/lib/content";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getMessages,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";
import { escapeXml } from "@/lib/sitemap";

/**
 * RSS feeds, one per locale.
 *
 * The footer has linked `/rss.xml` on every page since the site was
 * built, and no route or file ever produced it — 2,815 pages carrying a
 * link to a 404. A feed is cheap to generate and the promise was
 * already made, so the fix is to keep the promise rather than delete
 * the link.
 *
 * One feed per locale, and a locale gets one only where it has content
 * of its own — the same rule the sitemap, hreflang and the policy pages
 * follow. A French feed padded with English articles would be the
 * localized-URL-without-localized-content problem in a new place.
 */

/** Items in a feed. Enough to be useful, not so many that it is a corpus dump. */
export const FEED_ITEM_LIMIT = 40;

export type FeedItem = {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  author: string;
  categories: string[];
};

export type Feed = {
  locale: Locale;
  /** Public path this feed is served at. */
  path: string;
  title: string;
  description: string;
  items: FeedItem[];
};

/** The path a locale's feed is served at. English keeps the root name. */
export function feedPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/rss.xml" : `/${locale}/rss.xml`;
}

async function itemsFor(locale: Locale): Promise<FeedItem[]> {
  const articles = await getAllArticles(locale);
  const insights = await getAllInsights(locale);

  const entries: FeedItem[] = [
    ...articles.map((a) => ({
      title: a.title,
      description: a.excerpt,
      path: a.url,
      published: a.publishedDate,
      updated: a.updatedDate,
      author: a.author.name,
      categories: [a.category, ...a.tags],
      // A translation the loader served from the English source is not
      // an item in this locale's feed.
      fallback: a.localeFallback,
    })),
    ...insights.map((i) => ({
      title: i.title,
      description: i.excerpt,
      path: i.url,
      published: i.publishedDate,
      updated: i.updatedDate,
      author: i.author.name,
      categories: [i.category, ...i.tags],
      fallback: i.localeFallback,
    })),
  ]
    .filter((e) => !e.fallback)
    .map(({ fallback: _fallback, ...rest }) => rest);

  return entries
    .sort((a, b) => (a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : 0))
    .slice(0, FEED_ITEM_LIMIT);
}

/** Locales with content of their own, and therefore a feed. */
export async function buildFeeds(): Promise<Feed[]> {
  const feeds: Feed[] = [];
  for (const locale of LOCALES) {
    const items = await itemsFor(locale);
    if (items.length === 0) continue;
    const t = translator(getMessages(locale));
    feeds.push({
      locale,
      path: feedPath(locale),
      title: t("site.name"),
      description: t("site.description"),
      items,
    });
  }
  return feeds;
}

function rfc822(date: string): string {
  return new Date(`${date}T00:00:00.000Z`).toUTCString();
}

export function renderFeedXml(feed: Feed): string {
  const home = `${siteConfig.url}${localizedPath(feed.locale, "/")}`;
  const self = `${siteConfig.url}${feed.path}`;
  const latest = feed.items[0]?.updated;

  const items = feed.items
    .map((item) => {
      const url = `${siteConfig.url}${item.path}`;
      const categories = item.categories
        .map((c) => `      <category>${escapeXml(c)}</category>`)
        .join("\n");
      return [
        "    <item>",
        `      <title>${escapeXml(item.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${rfc822(item.published)}</pubDate>`,
        `      <dc:creator>${escapeXml(item.author)}</dc:creator>`,
        `      <description>${escapeXml(item.description)}</description>`,
        categories,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "  <channel>",
    `    <title>${escapeXml(feed.title)}</title>`,
    `    <link>${escapeXml(home)}</link>`,
    `    <description>${escapeXml(feed.description)}</description>`,
    `    <language>${feed.locale}</language>`,
    latest ? `    <lastBuildDate>${rfc822(latest)}</lastBuildDate>` : "",
    `    <atom:link href="${escapeXml(self)}" rel="self" type="application/rss+xml" />`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ]
    .filter((line) => line !== "")
    .join("\n");
}
