/**
 * Sitemap validator.
 *
 * Reads the build artefact at `.next/server/app/sitemap.xml.body` and
 * runs structural assertions against it. Run as part of `npm run
 * seo:validate` after `next build`. The goal is to catch a regression
 * the moment it lands in CI rather than after Search Console pings.
 *
 * Checks:
 *   1. Starts with the XML declaration.
 *   2. Contains a single `<urlset>` opener with the sitemaps.org and
 *      xhtml namespaces.
 *   3. Closes with `</urlset>`.
 *   4. Every `<loc>` is an absolute https URL on the configured host.
 *   5. No `<loc>` is duplicated.
 *   6. No `<url>` block has the whitespace-separated "loc weekly 1"
 *      shape (a regression signature for plain-text serialization).
 *   7. Every hreflang alternate `href=` is absolute and on the host.
 *   8. Every localized URL group has an `x-default` alternate, and
 *      that alternate points at the EN equivalent.
 *
 * Exits 0 on success, 1 with a human-readable report on failure.
 */
import fs from "node:fs";
import path from "node:path";

const SITEMAP_PATH = path.resolve(".next/server/app/sitemap.xml.body");
const META_PATH = path.resolve(".next/server/app/sitemap.xml.meta");

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

function main() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    fail([
      {
        rule: "build-artifact",
        detail: `${SITEMAP_PATH} not found — run \`npm run build\` first.`,
      },
    ]);
  }

  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");
  const issues: Issue[] = [];

  // 1. XML declaration.
  if (!xml.trimStart().startsWith("<?xml")) {
    issues.push({ rule: "xml-declaration", detail: "missing <?xml declaration" });
  }

  // 2. urlset opener with both namespaces.
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
      detail: "<urlset> missing the xhtml namespace declaration",
    });
  }

  // 3. urlset closes.
  if (!xml.includes("</urlset>")) {
    issues.push({ rule: "urlset-close", detail: "missing </urlset>" });
  }

  // 4 + 5. <loc> values must be absolute https URLs on the host, unique.
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
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
      issues.push({
        rule: "loc-https",
        detail: `<loc>${loc}</loc> is not https`,
      });
    }
    if (seen.has(loc)) {
      issues.push({
        rule: "loc-duplicate",
        detail: `duplicate <loc>${loc}</loc>`,
      });
    }
    seen.add(loc);
  }

  // 6. Plain-text regression check. The sitemap UI rendering shows
  //    `https://… weekly 1` as a tag-stripped string, but that text
  //    should never appear in the source XML — if it does, the route
  //    accidentally returned a string instead of MetadataRoute.Sitemap.
  if (/^https:\/\/\S+\s+(?:always|hourly|daily|weekly|monthly|yearly|never)\s+\d/m.test(xml)) {
    issues.push({
      rule: "plain-text-regression",
      detail: "found `URL changefreq priority` shape in raw XML — sitemap may be string-serialized",
    });
  }

  // 7. Every hreflang alternate href must be absolute on the host.
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
  }

  // 8. Each <url> block that has hreflang alternates must include an
  //    x-default that points at the EN equivalent.
  const urlBlocks = xml.split(/<url>/).slice(1);
  for (const block of urlBlocks) {
    const hasAlternates = /<xhtml:link\s+rel="alternate"/.test(block);
    if (!hasAlternates) continue;
    const xDefault = block.match(
      /hreflang="x-default"\s+href="([^"]+)"/,
    );
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

  // 9. Content-Type sanity (advisory — based on the build .meta file).
  if (fs.existsSync(META_PATH)) {
    try {
      const meta = JSON.parse(fs.readFileSync(META_PATH, "utf8")) as {
        headers?: Record<string, string>;
      };
      const ct = meta.headers?.["content-type"] ?? "";
      if (!ct.includes("xml")) {
        issues.push({
          rule: "content-type",
          detail: `build meta declares content-type="${ct}" — expected …/xml`,
        });
      }
    } catch {
      // Non-fatal; we already validated the body.
    }
  }

  if (issues.length > 0) fail(issues);

  console.log(
    `✓ sitemap.xml validated — ${locs.length} <loc> entries, ` +
      `${alts.length} hreflang alternates, ${urlBlocks.length} <url> blocks.`,
  );
}

main();
