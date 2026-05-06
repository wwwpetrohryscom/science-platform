/**
 * Sitemap validator.
 *
 * Run after `next build`. Supports both Next metadata-route sitemap
 * artefacts and custom `app/sitemap.xml/route.ts` artefacts.
 */
import fs from "node:fs";
import path from "node:path";

const SITEMAP_CANDIDATES = [
  path.resolve(".next/server/app/sitemap.xml.body"),
  path.resolve(".next/server/app/sitemap.xml/route.body"),
];

const META_CANDIDATES = [
  path.resolve(".next/server/app/sitemap.xml.meta"),
  path.resolve(".next/server/app/sitemap.xml/route.meta"),
];

const EXPECTED_HOST =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecosciencehub.com";

type Issue = { rule: string; detail: string };

function fail(issues: Issue[]): never {
  for (const issue of issues) {
    console.error(`✗ [${issue.rule}] ${issue.detail}`);
  }
  console.error(`\n${issues.length} sitemap issue(s) found.`);
  process.exit(1);
}

function firstExisting(paths: string[]): string | null {
  return paths.find((candidate) => fs.existsSync(candidate)) ?? null;
}

function main() {
  const sitemapPath = firstExisting(SITEMAP_CANDIDATES);
  const metaPath = firstExisting(META_CANDIDATES);

  if (!sitemapPath) {
    fail([
      {
        rule: "build-artifact",
        detail:
          `No sitemap build artefact found. Checked: ${SITEMAP_CANDIDATES.join(
            ", ",
          )}. Run \`npm run build\` first.`,
      },
    ]);
  }

  const xml = fs.readFileSync(sitemapPath, "utf8");
  const issues: Issue[] = [];

  if (!xml.trimStart().startsWith("<?xml")) {
    issues.push({ rule: "xml-declaration", detail: "missing <?xml declaration" });
  }

  if (
    !/^<urlset\b[^>]*xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/m.test(
      xml,
    )
  ) {
    issues.push({
      rule: "urlset",
      detail: "<urlset> missing or namespace not sitemaps.org/schemas/sitemap/0.9",
    });
  }

  if (!/xmlns:xhtml="http:\/\/www\.w3\.org\/1999\/xhtml"/.test(xml)) {
    issues.push({
      rule: "urlset-xhtml",
      detail: "<urlset> missing xhtml namespace declaration",
    });
  }

  if (!xml.includes("</urlset>")) {
    issues.push({ rule: "urlset-close", detail: "missing </urlset>" });
  }

  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (locs.length === 0) {
    issues.push({ rule: "loc", detail: "no <loc> entries found" });
  }

  const seen = new Set<string>();
  for (const loc of locs) {
    if (!loc.startsWith(`${EXPECTED_HOST}/`) && loc !== EXPECTED_HOST) {
      issues.push({
        rule: "loc-host",
        detail: `<loc>${loc}</loc> is not on ${EXPECTED_HOST}`,
      });
    }
    if (!/^https:\/\//.test(loc)) {
      issues.push({ rule: "loc-https", detail: `<loc>${loc}</loc> is not https` });
    }
    if (seen.has(loc)) {
      issues.push({ rule: "loc-duplicate", detail: `duplicate <loc>${loc}</loc>` });
    }
    seen.add(loc);
  }

  if (
    /^https:\/\/\S+\s+\d{4}-\d{2}-\d{2}T\S+\s+(?:always|hourly|daily|weekly|monthly|yearly|never)\s+\d(?:\.\d+)?/m.test(
      xml,
    ) ||
    /^https:\/\/\S+\s+(?:always|hourly|daily|weekly|monthly|yearly|never)\s+\d(?:\.\d+)?/m.test(
      xml,
    )
  ) {
    issues.push({
      rule: "plain-text-regression",
      detail:
        "found whitespace-separated sitemap rows in raw output — expected XML elements",
    });
  }

  const alts = [...xml.matchAll(
    /<xhtml:link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/g,
  )];

  for (const [, hreflang, href] of alts) {
    if (!href.startsWith(`${EXPECTED_HOST}/`) && href !== EXPECTED_HOST) {
      issues.push({
        rule: "alternate-host",
        detail: `hreflang="${hreflang}" href="${href}" is not on ${EXPECTED_HOST}`,
      });
    }
    if (!/^https:\/\//.test(href)) {
      issues.push({
        rule: "alternate-https",
        detail: `hreflang="${hreflang}" href="${href}" is not https`,
      });
    }
  }

  const urlBlocks = xml.split(/<url>/).slice(1);
  for (const block of urlBlocks) {
    if (!/<xhtml:link\s+rel="alternate"/.test(block)) continue;

    const xDefault = block.match(/hreflang="x-default"\s+href="([^"]+)"/);
    if (!xDefault) {
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? "(unknown)";
      issues.push({
        rule: "x-default",
        detail: `<loc>${loc}</loc> has alternates but no x-default`,
      });
      continue;
    }

    if (!/\/en(\/|$)/.test(xDefault[1])) {
      issues.push({
        rule: "x-default-points-to-en",
        detail: `x-default ${xDefault[1]} does not point to /en/...`,
      });
    }
  }

  if (metaPath) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf8")) as {
        headers?: Record<string, string>;
      };
      const contentType = Object.entries(meta.headers ?? {}).find(
        ([name]) => name.toLowerCase() === "content-type",
      )?.[1];

      if (contentType && !contentType.includes("xml")) {
        issues.push({
          rule: "content-type",
          detail: `build meta declares content-type="${contentType}" — expected XML`,
        });
      }
    } catch {
      // Body validation is authoritative here.
    }
  }

  if (issues.length > 0) fail(issues);

  console.log(
    `✓ sitemap.xml validated from ${path.relative(process.cwd(), sitemapPath)} — ` +
      `${locs.length} <loc> entries, ${alts.length} hreflang alternates, ` +
      `${urlBlocks.length} <url> blocks.`,
  );
}

main();
