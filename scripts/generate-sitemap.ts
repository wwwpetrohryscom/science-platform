/**
 * Build-time sitemap generator.
 *
 * Writes `public/sitemap.xml` directly. The file is then served by
 * Vercel as a static asset, which sidesteps every Next.js layer
 * (middleware, route handlers, edge functions). That matters because:
 *
 *   - middleware never runs for files under /public, so locale
 *     redirection cannot accidentally rewrite /sitemap.xml to
 *     /en/sitemap.xml;
 *   - Vercel domain redirects (apex/www) still apply at the edge —
 *     domain canonicalization belongs in the platform, not the route;
 *   - serving a static asset is the cheapest, most cacheable path.
 *
 * Mirrors the locale + hreflang behaviour of the previous
 * `MetadataRoute.Sitemap` route: same per-content lastmod, same
 * x-default-to-EN policy, same EN-fallback exclusion. The output
 * format matches the previous Next-rendered XML so downstream
 * validation (`scripts/validate-sitemap.ts`) keeps working unchanged.
 *
 * Run as `npm run prebuild`. Output is `.gitignore`d.
 */
import fs from "node:fs";
import path from "node:path";

import { categories, listCategorySlugs } from "../lib/categories";
import { getAllArticles, getAllInsights } from "../lib/content";
import { getDiscussions } from "../lib/discussions";
import {
  DEFAULT_LOCALE,
  LOCALES,
  localeMeta,
  localizedPath,
  type Locale,
} from "../lib/i18n";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecosciencehub.com";
const FALLBACK_LAST_MODIFIED = new Date("2026-05-02");
const POLICY_LAST_MODIFIED = new Date("2026-05-02");

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFreq;
  priority: number;
  /** hreflang map; key is the html-lang code (or "x-default"). */
  alternates: Record<string, string>;
};

function u(loc: Locale, p: string): string {
  return new URL(localizedPath(loc, p), SITE_URL).toString();
}

function toDate(value: string | undefined): Date {
  if (!value) return FALLBACK_LAST_MODIFIED;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? FALLBACK_LAST_MODIFIED : date;
}

function maxDate(dates: Array<Date | undefined>): Date {
  let max = FALLBACK_LAST_MODIFIED;
  for (const d of dates) {
    if (d && d.valueOf() > max.valueOf()) max = d;
  }
  return max;
}

function alternates(
  pathname: string,
  locales: readonly Locale[] = LOCALES,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const loc of locales) {
    out[localeMeta[loc].htmlLang] = u(loc, pathname);
  }
  if (locales.includes(DEFAULT_LOCALE)) {
    out["x-default"] = u(DEFAULT_LOCALE, pathname);
  }
  return out;
}

function indexableLocales<T extends { localeFallback: boolean; locale: Locale }>(
  entries: T[],
): Locale[] {
  return entries.filter((e) => !e.localeFallback).map((e) => e.locale);
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderEntry(entry: SitemapEntry): string {
  const lines: string[] = ["  <url>"];
  lines.push(`    <loc>${escapeXml(entry.url)}</loc>`);
  for (const [hreflang, href] of Object.entries(entry.alternates)) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(href)}" />`,
    );
  }
  lines.push(`    <lastmod>${entry.lastModified.toISOString()}</lastmod>`);
  lines.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
  // Priority must be in [0.0, 1.0]. The site uses one decimal place.
  lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
  lines.push("  </url>");
  return lines.join("\n");
}

async function buildEntries(): Promise<SitemapEntry[]> {
  // ---- Phase 1: load corpus once ----
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
    for (const a of articles) {
      const p = `/${a.category}/${a.subtopic}/${a.slug}`;
      articlesByPath.set(p, [...(articlesByPath.get(p) ?? []), a]);
    }
    for (const i of insights) {
      const p = `/insight/${i.slug}`;
      insightsByPath.set(p, [...(insightsByPath.get(p) ?? []), i]);
    }
  }
  const discussions = await getDiscussions();

  // ---- Index dates for structural lastmod inheritance ----
  const updatedByCategory = new Map<string, Date[]>();
  const updatedBySubtopic = new Map<string, Date[]>();
  const allArticleDates: Date[] = [];
  const allInsightDates: Date[] = [];
  const allDiscussionDates: Date[] = discussions.map((d) =>
    toDate(d.updatedDate),
  );
  for (const articles of articlesByPath.values()) {
    for (const a of articles) {
      if (a.localeFallback) continue;
      const d = toDate(a.updatedDate);
      allArticleDates.push(d);
      updatedByCategory.set(a.category, [
        ...(updatedByCategory.get(a.category) ?? []),
        d,
      ]);
      const subKey = `${a.category}/${a.subtopic}`;
      updatedBySubtopic.set(subKey, [
        ...(updatedBySubtopic.get(subKey) ?? []),
        d,
      ]);
    }
  }
  for (const insights of insightsByPath.values()) {
    for (const i of insights) {
      if (i.localeFallback) continue;
      allInsightDates.push(toDate(i.updatedDate));
    }
  }
  const siteLastMod = maxDate([
    ...allArticleDates,
    ...allInsightDates,
    ...allDiscussionDates,
  ]);

  // ---- Phase 2: structural pages ----
  const structural: Array<{
    pathname: string;
    changeFrequency: ChangeFreq;
    priority: number;
    lastModified: Date;
  }> = [
    {
      pathname: "/",
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified: siteLastMod,
    },
    {
      pathname: "/insights",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: maxDate(allInsightDates),
    },
    {
      pathname: "/discussions",
      changeFrequency: "daily",
      priority: 0.7,
      lastModified: maxDate(allDiscussionDates),
    },
    {
      pathname: "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    {
      pathname: "/cookie-policy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    {
      pathname: "/terms-of-use",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: POLICY_LAST_MODIFIED,
    },
    ...listCategorySlugs().map((slug) => ({
      pathname: `/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      lastModified: maxDate(updatedByCategory.get(slug) ?? []),
    })),
    ...categories.flatMap((cat) =>
      cat.subtopics.map((sub) => ({
        pathname: `/${cat.slug}/${sub.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.85,
        lastModified: maxDate(
          updatedBySubtopic.get(`${cat.slug}/${sub.slug}`) ?? [],
        ),
      })),
    ),
  ];

  const structuralEntries: SitemapEntry[] = structural.flatMap(
    ({ pathname, changeFrequency, priority, lastModified }) =>
      LOCALES.map((loc) => ({
        url: u(loc, pathname),
        lastModified,
        changeFrequency,
        priority,
        alternates: alternates(pathname),
      })),
  );

  // ---- Phase 3: content pages ----
  const contentEntries: SitemapEntry[] = [];
  for (const [pathname, articles] of articlesByPath) {
    const locales = indexableLocales(articles);
    for (const a of articles.filter((x) => !x.localeFallback)) {
      contentEntries.push({
        url: u(a.locale, pathname),
        lastModified: toDate(a.updatedDate),
        changeFrequency: "monthly",
        priority: a.type === "pillar" ? 0.9 : 0.8,
        alternates: alternates(pathname, locales),
      });
    }
  }
  for (const [pathname, insights] of insightsByPath) {
    const locales = indexableLocales(insights);
    for (const i of insights.filter((x) => !x.localeFallback)) {
      contentEntries.push({
        url: u(i.locale, pathname),
        lastModified: toDate(i.updatedDate),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternates(pathname, locales),
      });
    }
  }

  const discussionEntries: SitemapEntry[] = discussions.flatMap((d) =>
    LOCALES.map((loc) => {
      const pathname = `/discussions/${d.slug}`;
      return {
        url: u(loc, pathname),
        lastModified: toDate(d.updatedDate),
        changeFrequency: "weekly" as ChangeFreq,
        priority: 0.6,
        alternates: alternates(pathname),
      };
    }),
  );

  // Dedupe by URL — same path × locale shouldn't appear twice across
  // structural and content phases. First write wins.
  const seen = new Set<string>();
  return [...structuralEntries, ...contentEntries, ...discussionEntries].filter(
    (e) => {
      if (seen.has(e.url)) return false;
      seen.add(e.url);
      return true;
    },
  );
}

async function main() {
  const entries = await buildEntries();
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map(renderEntry),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = path.resolve("public/sitemap.xml");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(
    `✓ wrote ${outPath} (${entries.length} URLs, ${xml.length} bytes)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
