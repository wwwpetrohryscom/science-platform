import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/**
 * robots.txt
 *
 * Policy:
 *   - Public site is fully crawlable.
 *   - Internal/operational paths (`/api/`, build artefacts) are blocked.
 *   - Faceted-search and tracking query parameters are blocked so
 *     crawlers don't burn budget on duplicate URLs (`?q=`, `?utm_*`,
 *     `?fbclid`, `?ref=` …). The canonical URL on each page already
 *     points to the parameter-free version.
 *   - Known well-behaved scraper bots are denied so they don't republish
 *     content. Major search-engine bots (Google, Bing, DuckDuckBot,
 *     Yandex, Baidu, Apple) get explicit allow rules.
 *
 * The `host` directive is non-standard but Yandex and Mail.ru still
 * honour it; Google and Bing ignore it harmlessly.
 */
export default function robots(): MetadataRoute.Robots {
  const blockedPaths = [
    "/api/",
    "/_next/",
    // Surface for any future admin/preview area.
    "/admin/",
    "/draft/",
    "/preview/",
    // Test/demo-only routes (none today, but pre-declared so future
    // additions don't accidentally leak into the index).
    "/test/",
    "/__/",
  ];

  // Faceted-search and tracking parameters. Canonical URLs always omit
  // them, but blocking them at the robots layer prevents wasted crawl
  // and accidental indexing of UTM-tagged links shared on social.
  const blockedParams = [
    "/*?*utm_source=*",
    "/*?*utm_medium=*",
    "/*?*utm_campaign=*",
    "/*?*utm_content=*",
    "/*?*utm_term=*",
    "/*?*fbclid=*",
    "/*?*gclid=*",
    "/*?*mc_cid=*",
    "/*?*ref=*",
    "/*?*q=*",
    "/*?*search=*",
    "/*?*sort=*",
    "/*?*filter=*",
  ];

  const disallow = [...blockedPaths, ...blockedParams];

  // Major search engines — explicit allow with full path access. Splitting
  // them out keeps the file readable and lets us drop search-engine-
  // specific tweaks (e.g. crawl-delay) in one place if ever needed.
  const allowedSearchEngines = [
    "Googlebot",
    "Googlebot-Image",
    "Googlebot-News",
    "Bingbot",
    "Slurp",
    "DuckDuckBot",
    "Baiduspider",
    "YandexBot",
    "Applebot",
  ];

  // Well-known scraper / training-data bots. Blocked by site policy —
  // articles cite primary sources directly; redistribution should follow
  // suit and link back rather than mirror.
  const blockedBots = [
    "GPTBot",
    "ChatGPT-User",
    "CCBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "PerplexityBot",
    "Bytespider",
    "Amazonbot",
    "Applebot-Extended",
    "FacebookBot",
    "Diffbot",
  ];

  return {
    rules: [
      ...allowedSearchEngines.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
      ...blockedBots.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      // Catch-all — applied to every other crawler. Permissive by default,
      // matched by the same blocked-paths and parameter rules.
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
