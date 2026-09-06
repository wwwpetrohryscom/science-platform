import { siteConfig } from "@/lib/seo";
import { categories, listCategorySlugs } from "@/lib/categories";
import { getAllArticles, getAllInsights } from "@/lib/content";
import { getDiscussions, discussionLocales } from "@/lib/discussions";
import { listGlossaryAlphabetical, listGlossarySlugs } from "@/lib/glossary";
import { POLICY_DOCUMENTS, policyLocales, listDesksForDisplay } from "@/lib/editorial";
import { INDICATORS, indicatorPath, indicatorLocales } from "@/lib/scientific-data/index";
import { TOOLS, toolPath } from "@/lib/tools/registry";
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

  const discussionsByLocale = new Map<
    Locale,
    Awaited<ReturnType<typeof getDiscussions>>
  >();
  for (const locale of LOCALES) {
    discussionsByLocale.set(locale, await getDiscussions(locale));
  }
  const discussions = discussionsByLocale.get(DEFAULT_LOCALE) ?? [];

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

  // Only locales that actually have a translation. A discussion served
  // from the English fallback is noindex, so listing it here would
  // advertise a page we are telling crawlers not to index.
  const discussionEntries = discussions.flatMap((discussion) => {
    const path = `/discussions/${discussion.slug}`;
    const translated = discussionLocales(discussion.slug);
    const alternates = buildLocalizedAlternates(path, translated);

    return translated.map((locale) =>
      entry(locale, path, toDate(discussion.updatedDate), "weekly", 0.6, alternates),
    );
  });

  // Glossary — one URL per locale that actually defines the term, with
  // alternates restricted to those locales. A term localized into three
  // languages advertises three; an English-only term advertises one. The
  // rule is the same as everywhere else on the site: hreflang lists a
  // language only where there is something to read in it.
  const glossaryEntries: SitemapEntry[] = [];
  const glossaryTerms = listGlossaryAlphabetical();
  const glossaryLastModified = glossaryTerms.reduce(
    (max, t) => (t.updatedDate > max ? t.updatedDate : max),
    "1970-01-01",
  );
  const glossaryLocales = LOCALES.filter(
    (l) => listGlossarySlugs(l).length > 0,
  );
  const glossaryAlternates = buildLocalizedAlternates(
    "/glossary",
    glossaryLocales,
  );
  for (const locale of glossaryLocales) {
    glossaryEntries.push(
      entry(
        locale,
        "/glossary",
        toDate(glossaryLastModified),
        "monthly",
        locale === DEFAULT_LOCALE ? 0.6 : 0.5,
        glossaryAlternates,
      ),
    );
  }
  for (const term of glossaryTerms) {
    const path = `/glossary/${term.slug}`;
    const termLocales = LOCALES.filter((l) =>
      listGlossarySlugs(l).includes(term.slug),
    );
    const alternates = buildLocalizedAlternates(path, termLocales);
    for (const locale of termLocales) {
      glossaryEntries.push(
        entry(
          locale,
          path,
          toDate(term.updatedDate),
          "monthly",
          locale === DEFAULT_LOCALE ? 0.5 : 0.4,
          alternates,
        ),
      );
    }
  }

  // Editorial and legal pages — EN-only, same reasoning as the glossary:
  // they are untranslated, so hreflang must not advertise a localized
  // version and the localized renders are excluded from the index.
  const editorialEntries: SitemapEntry[] = [];
  const editorialAlternates = (path: string) =>
    buildLocalizedAlternates(path, [DEFAULT_LOCALE]);

  editorialEntries.push(
    entry(
      DEFAULT_LOCALE,
      "/editorial",
      POLICY_LAST_MODIFIED,
      "monthly",
      0.5,
      editorialAlternates("/editorial"),
    ),
  );
  for (const desk of listDesksForDisplay()) {
    const path = `/editorial/${desk.id}`;
    editorialEntries.push(
      entry(
        DEFAULT_LOCALE,
        path,
        maxDate(allArticleDates),
        "weekly",
        0.5,
        editorialAlternates(path),
      ),
    );
  }
  for (const path of ["/privacy-policy", "/cookie-policy", "/terms-of-use"]) {
    editorialEntries.push(
      entry(
        DEFAULT_LOCALE,
        path,
        POLICY_LAST_MODIFIED,
        "yearly",
        0.3,
        editorialAlternates(path),
      ),
    );
  }
  // The three policy documents are the exception to the EN-only rule
  // above: each is translated in full or not at all, and
  // `policyLocales` reports the locales where it exists. A locale is
  // listed here — and in the hreflang set — only where the whole
  // document is readable in that language, which is the same list the
  // route's generateStaticParams builds from.
  for (const doc of POLICY_DOCUMENTS) {
    const path = `/${doc.slug}`;
    const locales = policyLocales(doc.slug);
    const alternates = buildLocalizedAlternates(path, locales);
    for (const locale of locales) {
      editorialEntries.push(
        entry(
          locale,
          path,
          toDate(doc.updatedDate),
          "yearly",
          locale === DEFAULT_LOCALE ? 0.4 : 0.3,
          alternates,
        ),
      );
    }
  }

  // Data and tool pages. Every one exists in every locale — the frame
  // around the numbers is fully translated — so every locale is listed
  // in the hreflang set, unlike the article corpus where a locale is
  // advertised only where the article exists in it.
  const dataEntries: SitemapEntry[] = [];
  // The hubs and the tools exist everywhere; an indicator exists only
  // where its explanatory body has been translated, so its hreflang set
  // is its own.
  const dataPaths: Array<{ path: string; locales: Locale[] }> = [
    { path: "/data", locales: [...LOCALES] },
    { path: "/tools", locales: [...LOCALES] },
    ...INDICATORS.map((i) => ({
      path: indicatorPath(i.indicatorId),
      locales: indicatorLocales(i.indicatorId) as Locale[],
    })),
    ...TOOLS.map((t) => ({ path: toolPath(t.slug), locales: [...LOCALES] })),
  ];
  for (const { path: p, locales } of dataPaths) {
    const alternates = buildLocalizedAlternates(p, locales);
    for (const locale of locales) {
      dataEntries.push(
        entry(
          locale,
          p,
          maxDate(allArticleDates),
          "monthly",
          locale === DEFAULT_LOCALE ? 0.6 : 0.5,
          alternates,
        ),
      );
    }
  }

  return dedupe([
    ...structuralEntries,
    ...contentEntries,
    ...discussionEntries,
    ...glossaryEntries,
    ...editorialEntries,
    ...dataEntries,
  ]);
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

  // The xml-stylesheet processing instruction makes the sitemap render
  // as a friendly HTML table in browsers without affecting how crawlers
  // parse it (Googlebot/Bingbot ignore PIs). Without it, browsers fall
  // back to "tag-stripped flat text" which can read as if the sitemap
  // is malformed even when the underlying XML is correct.
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}
