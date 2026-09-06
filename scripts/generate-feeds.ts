#!/usr/bin/env tsx
/**
 * Write the RSS feeds to public/.
 *
 * Same shape as the sitemap generator: the feed is a build artefact
 * rather than a route, so it is a static file the CDN can serve and a
 * reviewer can read in the diff.
 *
 * Usage: npm run feed:generate
 */
import fs from "node:fs/promises";
import path from "node:path";

import { buildFeeds, renderFeedXml } from "@/lib/feed";

async function main() {
  const feeds = await buildFeeds();

  for (const feed of feeds) {
    const target = path.join(
      process.cwd(),
      "public",
      ...feed.path.split("/").filter(Boolean),
    );
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, renderFeedXml(feed), "utf8");
    console.log(`✓ ${feed.path} — ${feed.items.length} items (${feed.locale})`);
  }

  console.log(`\n${feeds.length} feed(s) written`);
}

main().catch((error) => {
  console.error("Failed to generate RSS feeds");
  console.error(error);
  process.exit(1);
});
