#!/usr/bin/env tsx
/**
 * Technical SEO audit against the rendered HTML.
 *
 * This reads `.next/server/app/**\/*.html` — the pages Next actually
 * prerendered — rather than the metadata objects that were supposed to
 * produce them. The difference matters: a canonical that is correct in
 * `generateMetadata` and wrong on the page is still wrong on the page,
 * and only one of those two things is what a crawler sees.
 *
 * Run `npm run build` first; this script fails fast if the output is
 * missing or older than the newest content file.
 *
 * Errors (a crawler is misled):
 *   - a page with no canonical, more than one, or a canonical pointing
 *     somewhere other than itself
 *   - an hreflang alternate pointing at a page that was not built
 *   - a non-reciprocal hreflang pair
 *   - a missing or duplicated x-default
 *   - an indexable page missing from the sitemap, or a noindex page in it
 *   - JSON-LD that does not parse, or a schema type missing a required
 *     property
 *   - more than one FAQPage block on a page
 *   - a schema author URL that was not built
 *   - a page with no <h1> or more than one
 *   - a duplicate <title> or meta description within one locale
 *
 * Warnings (worth a look, not a defect):
 *   - a title long enough to be truncated in results
 *   - a page reachable only at depth 4 or more from its locale home
 *
 * Usage:
 *   npm run seo:audit
 *   tsx scripts/seo-audit.ts --json
 */
import fs from "node:fs";
import path from "node:path";

import { PROJECT_ROOT } from "./_lib";
import { siteConfig } from "../lib/seo";

type Issue = { severity: "error" | "warning"; rule: string; where: string; message: string };

const APP_DIR = path.join(PROJECT_ROOT, ".next", "server", "app");
const SITEMAP = path.join(PROJECT_ROOT, "public", "sitemap.xml");
const MAX_TITLE = 65;
const MAX_DEPTH = 3;

/** Required properties per schema type. Absence is an error, not a nudge. */
const REQUIRED: Record<string, string[]> = {
  Article: ["headline", "datePublished", "author"],
  NewsArticle: ["headline", "datePublished", "author"],
  BreadcrumbList: ["itemListElement"],
  FAQPage: ["mainEntity"],
  Organization: ["name", "url"],
  WebSite: ["name", "url"],
  CollectionPage: ["name"],
  DefinedTerm: ["name"],
  Person: ["name"],
};

type Page = {
  route: string;
  file: string;
  html: string;
};

function walkHtml(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

/** `.next/server/app/en/ecology.html` -> `/en/ecology`; `en.html` -> `/en`. */
function routeOf(file: string): string {
  const rel = path.relative(APP_DIR, file).replace(/\.html$/, "");
  return `/${rel}`;
}

function attr(tag: string, name: string): string | undefined {
  const m = new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i").exec(tag);
  return m?.[1];
}

function tags(html: string, selector: RegExp): string[] {
  return html.match(selector) ?? [];
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");
}

function pathOf(url: string): string | undefined {
  try {
    const u = new URL(url);
    if (u.origin !== new URL(siteConfig.url).origin) return undefined;
    return u.pathname.replace(/\/$/, "") || "/";
  } catch {
    return undefined;
  }
}

/** Every JSON-LD object on the page, flattened through @graph and arrays. */
function jsonLd(html: string, issues: Issue[], where: string): Record<string, unknown>[] {
  const blocks =
    html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) ?? [];
  const out: Record<string, unknown>[] = [];
  for (const block of blocks) {
    const body = block.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, "");
    let parsed: unknown;
    try {
      parsed = JSON.parse(decode(body));
    } catch (e) {
      issues.push({
        severity: "error",
        rule: "schema-unparseable",
        where,
        message: `a JSON-LD block does not parse: ${(e as Error).message}`,
      });
      continue;
    }
    const queue = Array.isArray(parsed) ? [...parsed] : [parsed];
    while (queue.length) {
      const node = queue.shift();
      if (!node || typeof node !== "object") continue;
      const obj = node as Record<string, unknown>;
      if (Array.isArray(obj["@graph"])) queue.push(...(obj["@graph"] as unknown[]));
      if (obj["@type"]) out.push(obj);
    }
  }
  return out;
}

function main() {
  const asJson = process.argv.includes("--json");
  const issues: Issue[] = [];

  if (!fs.existsSync(APP_DIR)) {
    console.error("✗ no build output at .next/server/app — run npm run build first");
    process.exit(1);
  }

  const files = walkHtml(APP_DIR);
  const pages: Page[] = files
    .map((file) => ({ route: routeOf(file), file, html: fs.readFileSync(file, "utf8") }))
    .filter((p) => !p.route.startsWith("/_"));
  const built = new Set(pages.map((p) => p.route));

  // Sitemap, as the crawler receives it.
  const sitemapXml = fs.existsSync(SITEMAP) ? fs.readFileSync(SITEMAP, "utf8") : "";
  const sitemapRoutes = new Set(
    [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => pathOf(decode(m[1])))
      .filter((r): r is string => Boolean(r)),
  );

  // A first pass for indexability alone: the link check below needs to
  // know, for every route, whether it is a real page or a 404 rendered
  // at a route with no content in that locale.
  const noindexRoutes = new Set<string>();
  for (const page of pages) {
    const meta = page.html.match(/<meta[^>]+name="robots"[^>]*>/gi) ?? [];
    if (meta.some((t) => /noindex/i.test(attr(t, "content") ?? ""))) noindexRoutes.add(page.route);
  }

  const titles = new Map<string, string[]>();
  const descriptions = new Map<string, string[]>();
  const alternatesByRoute = new Map<string, Map<string, string>>();
  const linksByRoute = new Map<string, string[]>();
  const authorUrls = new Set<string>();

  for (const page of pages) {
    const { route, html } = page;
    const where = route;
    const locale = route.split("/")[1] ?? "";

    // --- indexability -----------------------------------------------
    const robotsMeta = tags(html, /<meta[^>]+name="robots"[^>]*>/gi)
      .map((t) => attr(t, "content") ?? "")
      .join(",");
    const noindex = /noindex/i.test(robotsMeta);

    // Everything below this line is about what a crawler puts in the
    // index. A noindex page is out of scope for all of it: it is
    // usually a 404 rendered at a route that has no content in this
    // locale, and holding it to the rules for an indexable page
    // produced 1,130 findings about pages that do not exist.
    if (noindex) {
      if (/<link[^>]+rel="canonical"/i.test(html) || /<link[^>]+rel="alternate"[^>]+hreflang/i.test(html)) {
        issues.push({
          severity: "error",
          rule: "noindex-declares-canonical",
          where,
          message: "noindex page emits a canonical or hreflang annotation",
        });
      }
      if (sitemapRoutes.has(route)) {
        issues.push({
          severity: "error",
          rule: "noindex-in-sitemap",
          where,
          message: "page is noindex but listed in the sitemap",
        });
      }
      continue;
    }

    if (!sitemapRoutes.has(route)) {
      issues.push({
        severity: "error",
        rule: "indexable-not-in-sitemap",
        where,
        message: "indexable page is absent from the sitemap",
      });
    }

    // --- title and description --------------------------------------
    const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
    const title = titleMatch ? decode(titleMatch[1]).trim() : "";
    if (!title) {
      issues.push({ severity: "error", rule: "no-title", where, message: "no <title>" });
    } else {
      const key = `${locale}::${title.toLowerCase()}`;
      titles.set(key, [...(titles.get(key) ?? []), route]);
      if (title.length > MAX_TITLE) {
        issues.push({
          severity: "warning",
          rule: "title-length",
          where,
          message: `title is ${title.length} characters — "${title.slice(0, 70)}…"`,
        });
      }
    }

    const desc = tags(html, /<meta[^>]+name="description"[^>]*>/gi)
      .map((t) => decode(attr(t, "content") ?? "").trim())
      .filter(Boolean);
    if (desc.length === 0) {
      issues.push({
        severity: "error",
        rule: "no-description",
        where,
        message: "no meta description",
      });
    } else if (desc.length > 1) {
      issues.push({
        severity: "error",
        rule: "duplicate-description-tag",
        where,
        message: `${desc.length} meta description tags on one page`,
      });
    } else if (desc[0]) {
      const key = `${locale}::${desc[0].toLowerCase()}`;
      descriptions.set(key, [...(descriptions.get(key) ?? []), route]);
    }

    // --- canonical --------------------------------------------------
    const canonicals = tags(html, /<link[^>]+rel="canonical"[^>]*>/gi)
      .map((t) => attr(t, "href"))
      .filter((h): h is string => Boolean(h));
    if (canonicals.length === 0) {
      issues.push({ severity: "error", rule: "no-canonical", where, message: "no canonical link" });
    } else if (canonicals.length > 1) {
      issues.push({
        severity: "error",
        rule: "multiple-canonical",
        where,
        message: `${canonicals.length} canonical links`,
      });
    } else {
      const target = pathOf(canonicals[0]);
      if (!target) {
        issues.push({
          severity: "error",
          rule: "canonical-offsite",
          where,
          message: `canonical points off-site: ${canonicals[0]}`,
        });
      } else if (target !== route) {
        issues.push({
          severity: "error",
          rule: "canonical-mismatch",
          where,
          message: `canonical points at ${target}`,
        });
      }
      if (/[?#]/.test(canonicals[0])) {
        issues.push({
          severity: "error",
          rule: "canonical-parameters",
          where,
          message: `canonical carries a query or fragment: ${canonicals[0]}`,
        });
      }
    }

    // --- hreflang ---------------------------------------------------
    const alts = new Map<string, string>();
    let xDefault = 0;
    for (const tag of tags(html, /<link[^>]+rel="alternate"[^>]*>/gi)) {
      const lang = attr(tag, "hreflang");
      const href = attr(tag, "href");
      if (!lang || !href) continue;
      if (lang === "x-default") {
        xDefault += 1;
        continue;
      }
      const target = pathOf(href);
      if (!target) {
        issues.push({
          severity: "error",
          rule: "hreflang-offsite",
          where,
          message: `hreflang ${lang} points off-site: ${href}`,
        });
        continue;
      }
      if (!built.has(target)) {
        issues.push({
          severity: "error",
          rule: "hreflang-unbuilt",
          where,
          message: `hreflang ${lang} points at ${target}, which was not built`,
        });
        continue;
      }
      alts.set(lang, target);
    }
    if (alts.size > 0) {
      alternatesByRoute.set(route, alts);
      if (xDefault === 0) {
        issues.push({
          severity: "error",
          rule: "no-x-default",
          where,
          message: "declares alternates but no x-default",
        });
      }
      if (![...alts.values()].includes(route)) {
        issues.push({
          severity: "error",
          rule: "hreflang-not-self-referential",
          where,
          message: "declares alternates but does not list itself",
        });
      }
    }
    if (xDefault > 1) {
      issues.push({
        severity: "error",
        rule: "multiple-x-default",
        where,
        message: `${xDefault} x-default links`,
      });
    }

    // --- headings ---------------------------------------------------
    const h1 = tags(html, /<h1[\s>]/gi).length;
    if (h1 === 0) {
      issues.push({ severity: "error", rule: "no-h1", where, message: "no <h1>" });
    } else if (h1 > 1) {
      issues.push({ severity: "error", rule: "multiple-h1", where, message: `${h1} <h1> elements` });
    }

    // --- structured data --------------------------------------------
    const nodes = jsonLd(html, issues, where);
    const faqBlocks = nodes.filter((n) => n["@type"] === "FAQPage").length;
    if (faqBlocks > 1) {
      issues.push({
        severity: "error",
        rule: "multiple-faqpage",
        where,
        message: `${faqBlocks} FAQPage blocks — a page may declare one`,
      });
    }
    for (const node of nodes) {
      const type = String(node["@type"]);
      for (const prop of REQUIRED[type] ?? []) {
        if (node[prop] === undefined || node[prop] === null || node[prop] === "") {
          issues.push({
            severity: "error",
            rule: "schema-missing-property",
            where,
            message: `${type} has no ${prop}`,
          });
        }
      }
      if (type === "BreadcrumbList" && Array.isArray(node.itemListElement)) {
        node.itemListElement.forEach((item, i) => {
          const el = item as Record<string, unknown>;
          if (el.position === undefined || el.name === undefined) {
            issues.push({
              severity: "error",
              rule: "breadcrumb-incomplete",
              where,
              message: `breadcrumb item ${i + 1} is missing position or name`,
            });
          }
        });
      }
      if (type === "FAQPage" && Array.isArray(node.mainEntity)) {
        for (const q of node.mainEntity as Record<string, unknown>[]) {
          const answer = q.acceptedAnswer as Record<string, unknown> | undefined;
          if (!answer || !answer.text) {
            issues.push({
              severity: "error",
              rule: "faq-no-answer",
              where,
              message: `FAQ question "${String(q.name).slice(0, 50)}" has no acceptedAnswer text`,
            });
          }
        }
      }
      const author = node.author as Record<string, unknown> | undefined;
      if (author && typeof author.url === "string") {
        const target = pathOf(author.url);
        if (target) authorUrls.add(target);
      }
    }

    // --- internal links ----------------------------------------------
    // Two jobs: feed the depth pass, and catch a link from a page that
    // is in the index to a page that is not. That second one is how
    // 721 links inside the translated corpus were found pointing at
    // routes that render a 404 in their own locale.
    const hrefs = [...new Set(
      [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, "") || "/"),
    )];
    for (const href of hrefs) {
      if (!noindexRoutes.has(href)) continue;
      // A noindex route with an indexable English twin is the locale
      // fallback working as designed: the reader gets the English
      // article plus a notice in their own language, and the page is
      // kept out of the index so it cannot compete with the original.
      // Linking to one is correct. Linking to a noindex page that is
      // NOT that is a link into a dead end.
      const englishTwin = href.replace(/^\/[a-z]{2}\//, "/en/");
      if (englishTwin !== href && built.has(englishTwin) && !noindexRoutes.has(englishTwin)) continue;
      issues.push({
        severity: "error",
        rule: "links-to-dead-end",
        where: route,
        message: `links to ${href}, which is noindex and has no indexable English original`,
      });
    }
    linksByRoute.set(route, hrefs.filter((h) => built.has(h)));
  }

  // --- cross-page: hreflang reciprocity -----------------------------
  for (const [route, alts] of alternatesByRoute) {
    for (const [lang, target] of alts) {
      if (target === route) continue;
      const back = alternatesByRoute.get(target);
      if (!back || ![...back.values()].includes(route)) {
        issues.push({
          severity: "error",
          rule: "hreflang-not-reciprocal",
          where: route,
          message: `lists ${target} as ${lang}, but ${target} does not list it back`,
        });
      }
    }
  }

  // --- cross-page: duplicate metadata -------------------------------
  for (const [key, routes] of titles) {
    if (routes.length > 1) {
      issues.push({
        severity: "error",
        rule: "duplicate-title",
        where: routes[0],
        message: `title "${key.split("::")[1].slice(0, 60)}" is shared by ${routes.length} pages: ${routes.slice(0, 4).join(", ")}`,
      });
    }
  }
  for (const [key, routes] of descriptions) {
    if (routes.length > 1) {
      issues.push({
        severity: "error",
        rule: "duplicate-description",
        where: routes[0],
        message: `description shared by ${routes.length} pages: ${routes.slice(0, 4).join(", ")} — "${key.split("::")[1].slice(0, 50)}…"`,
      });
    }
  }

  // --- cross-page: author pages exist -------------------------------
  for (const url of authorUrls) {
    if (!built.has(url)) {
      issues.push({
        severity: "error",
        rule: "author-url-unbuilt",
        where: url,
        message: "a schema author URL points at a page that was not built",
      });
    }
  }

  // --- crawl depth from each locale home ----------------------------
  const locales = [...new Set(pages.map((p) => p.route.split("/")[1]))].filter(
    (l) => l && built.has(`/${l}`),
  );
  const depth = new Map<string, number>();
  for (const locale of locales) {
    const start = `/${locale}`;
    let frontier = [start];
    depth.set(start, 0);
    let d = 0;
    while (frontier.length) {
      d += 1;
      const next: string[] = [];
      for (const route of frontier) {
        for (const link of linksByRoute.get(route) ?? []) {
          if (depth.has(link)) continue;
          depth.set(link, d);
          next.push(link);
        }
      }
      frontier = next;
    }
  }
  for (const page of pages) {
    // Locale-fallback pages are deliberately kept out of the index and
    // out of the sitemap; they are not orphans, they are the English
    // article answering a URL in another locale.
    if (noindexRoutes.has(page.route)) continue;
    const d = depth.get(page.route);
    if (d === undefined) {
      issues.push({
        severity: "error",
        rule: "orphan-page",
        where: page.route,
        message: "no internal link path reaches this page from its locale home",
      });
    } else if (d > MAX_DEPTH) {
      issues.push({
        severity: "warning",
        rule: "deep-page",
        where: page.route,
        message: `${d} clicks from the locale home`,
      });
    }
  }

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  if (asJson) {
    console.log(JSON.stringify({ pages: pages.length, issues }, null, 2));
    process.exit(errors.length ? 1 : 0);
  }

  const byRule = new Map<string, Issue[]>();
  for (const i of issues) byRule.set(i.rule, [...(byRule.get(i.rule) ?? []), i]);
  for (const [rule, list] of [...byRule.entries()].sort((a, b) => b[1].length - a[1].length)) {
    const mark = list[0].severity === "error" ? "✗" : "⚠";
    console.log(`${mark} [${rule}] ${list.length}`);
    for (const i of list.slice(0, 5)) console.log(`    ${i.where} — ${i.message}`);
    if (list.length > 5) console.log(`    … and ${list.length - 5} more`);
  }

  const deepest = Math.max(...[...depth.values()]);
  console.log(
    `\n${pages.length} rendered pages · ${sitemapRoutes.size} sitemap entries · ` +
      `deepest ${deepest} clicks · ${errors.length} errors · ${warnings.length} warnings`,
  );
  if (errors.length) process.exit(1);
}

main();
