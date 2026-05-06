import { siteConfig } from "@/lib/seo";
import { categories, listCategorySlugs } from "@/lib/categories";
import { getAllArticles, getAllInsights } from "@/lib/content";
import { getDiscussions } from "@/lib/discussions";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localeMeta,
  localizedPath,
  type Locale,
} from "@/lib/i18n";

export type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
  alternates?: Record<string, string>;
};

const FALLBACK_LAST_MODIFIED = new Date("2026-05-02T00:00:00.000Z");
const POLICY_LAST_MODIFIED = new Date("2026-05-02T00:00:00.000Z");

function absoluteLocalizedUrl(locale: Locale, path: string): string {
  return new URL(localizedPath(locale, path), siteConfig.url).toString();
}

function toDate(value: string | undefined): Date {
  if (!value) return FALLBACK_LAST_MODIFIED;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? FALLBACK_LAST_MODIFIED : date;
}

function maxDate(dates: Array<Date | undefined>): Date {
  let max = FALLBACK_LAST_MODIFIED;
  for (const date of dates) {
    if (date && date.valueOf() > max.valueOf()) max = date;
  }
  return max;
}

function indexableLocales<T extends { localeFallback: boolean; locale: Locale }>(
  entries: T[],
): Locale[] {
  return entries
    .filter((entry) => !entry.localeFallback)
    .map((entry) => entry.locale);
}

export function buildLocalizedAlternates(
  path: string,
  locales: readonly Locale[] = LOCALES,
): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[localeMeta[locale].htmlLang] = absoluteLocalizedUrl(locale, path);
  }

  if (locales.includes(DEFAULT_LOCALE)) {
    languages["x-default"] = absoluteLocalizedUrl(DEFAULT_LOCALE, path);
  }

  return languages;
}

function dedupe(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

function entry(
  locale: Locale,
  path: string,
  lastModified: Date,
  changeFrequency: SitemapChangeFrequency,
  priority: number,
  alternates: Record<string, string> = buildLocalizedAlternates(path),
): SitemapEntry {
  return {
    url: absoluteLocalizedUrl(locale, path),
    lastModified: lastModified.toISOString(),
    changeFrequency,
    priority,
    alternates,
  };
}

export async function buildSitemapEntries(): Promise<SitemapEntry[]> {
  const articlesByPath = new Map<
    string,
    Awaited<ReturnType<typeof getAllArticles>>
  >();
  const insightsByPath = new Map<
    string,
    Awaited<ReturnType<typeof getAllInsights>>
  >();

  for (const locale of LOCALES) {
    const [articles, insights] = await Promise.all([
      getAllArticles(locale),
      getAllInsights(locale),
    ]);

    for (const article of articles) {
      const path = `/${article.category}/${article.subtopic}/${article.slug}`;
      articlesByPath.set(path, [...(articlesByPath.get(path) ?? []), article]);
    }

    for (const insight of insights) {
      const path = `/insight/${insight.slug}`;
      insightsByPath.set(path, [...(insightsByPath.get(path) ?? []), insight]);
    }
  }

  const discussions = await getDiscussions();

  const updatedByCategory = new Map<string, Date[]>();
  const updatedBySubtopic = new Map<string, Date[]>();
  const allArticleDates: Date[] = [];
  const allInsightDates: Date[] = [];
  const allDiscussionDates: Date[] = discussions.map((discussion) =>
    toDate(discussion.updatedDate),
  );

  for (const articles of articlesByPath.values()) {
    for (const article of articles) {
      if (article.localeFallback) continue;
      const updated = toDate(article.updatedDate);
      allArticleDates.push(updated);
      updatedByCategory.set(article.category, [
        ...(updatedByCategory.get(article.category) ?? []),
        updated,
      ]);
      updatedBySubtopic.set(`${article.category}/${article.subtopic}`, [
        ...(updatedBySubtopic.get(`${article.category}/${article.subtopic}`) ?? []),
        updated,
      ]);
    }
  }

  for (const insights of insightsByPath.values()) {
    for (const insight of insights) {
      if (!insight.localeFallback) allInsightDates.push(toDate(insight.updatedDate));
    }
  }

  const siteLastModified = maxDate([
    ...allArticleDates,
    ...allInsightDates,
    ...allDiscussionDates,
  ]);

  const structuralPaths: Array<{
    path: string;
    changeFrequency: SitemapChangeFrequency;
    priority: number;
    lastModified: Date;
  }> = [
    {
      path: "/",
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified: siteLastModified,
    },
    {
      path: "/insights",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: maxDate(allInsightDates),
    },
    {
      path: "/discussions",
      changeFrequency: "daily",
      priority: 0.7,
      lastModified: maxDate(allDiscussionDates),
    },
    {
      path: "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    {
      path: "/cookie-policy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    {
      path: "/terms-of-use",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    ...listCategorySlugs().map((slug) => ({
      path: `/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      lastModified: maxDate(updatedByCategory.get(slug) ?? []),
    })),
    ...categories.flatMap((category) =>
      category.subtopics.map((subtopic) => ({
        path: `/${category.slug}/${subtopic.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.85,
        lastModified: maxDate(
          updatedBySubtopic.get(`${category.slug}/${subtopic.slug}`) ?? [],
        ),
      })),
    ),
  ];

  const structuralEntries = structuralPaths.flatMap(
    ({ path, changeFrequency, priority, lastModified }) =>
      LOCALES.map((locale) =>
        entry(locale, path, lastModified, changeFrequency, priority),
      ),
  );

  const contentEntries: SitemapEntry[] = [];

  for (const [path, articles] of articlesByPath) {
    const locales = indexableLocales(articles);
    const alternates = buildLocalizedAlternates(path, locales);

    for (const article of articles.filter((item) => !item.localeFallback)) {
      contentEntries.push(
        entry(
          article.locale,
          path,
          toDate(article.updatedDate),
          "monthly",
          article.type === "pillar" ? 0.9 : 0.8,
          alternates,
        ),
      );
    }
  }

  for (const [path, insights] of insightsByPath) {
    const locales = indexableLocales(insights);
    const alternates = buildLocalizedAlternates(path, locales);

    for (const insight of insights.filter((item) => !item.localeFallback)) {
      contentEntries.push(
        entry(insight.locale, path, toDate(insight.updatedDate), "monthly", 0.7, alternates),
      );
    }
  }

  const discussionEntries = discussions.flatMap((discussion) => {
    const path = `/discussions/${discussion.slug}`;
    const alternates = buildLocalizedAlternates(path);

    return LOCALES.map((locale) =>
      entry(locale, path, toDate(discussion.updatedDate), "weekly", 0.6, alternates),
    );
  });

  return dedupe([...structuralEntries, ...contentEntries, ...discussionEntries]);
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatPriority(priority: number): string {
  return priority.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

export function renderSitemapXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((entry) => {
      const alternateLinks = Object.entries(entry.alternates ?? {})
        .map(
          ([hreflang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(
              hreflang,
            )}" href="${escapeXml(href)}" />`,
        )
        .join("\n");

      return [
        "  <url>",
        `    <loc>${escapeXml(entry.url)}</loc>`,
        `    <lastmod>${escapeXml(entry.lastModified)}</lastmod>`,
        `    <changefreq>${entry.changeFrequency}</changefreq>`,
        `    <priority>${formatPriority(entry.priority)}</priority>`,
        alternateLinks,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}
