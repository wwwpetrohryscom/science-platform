#!/usr/bin/env tsx
/**
 * Write the per-locale search indexes to public/search/<locale>.json.
 *
 * Built as static files rather than served from a route: the site is
 * statically rendered, and a JSON file the CDN serves is both cheaper
 * and inspectable in the repository.
 *
 * Usage: npm run search:build
 *        npm run search:build -- --check   # fail if the files are stale
 */
import fs from "node:fs/promises";
import path from "node:path";

import { searchIndexPath } from "@/lib/search-core";
import { buildAllSearchIndexes } from "@/lib/search-index";

async function main() {
  const check = process.argv.includes("--check");
  // No build timestamp in the payload: it would make every build differ
  // from the last and turn "is this index stale?" — the question
  // `--check` exists to answer — into one that can never be answered
  // yes. The file changes when the corpus changes and not otherwise.
  const indexes = await buildAllSearchIndexes();
  let stale = 0;

  for (const index of indexes) {
    const payload = `${JSON.stringify(index)}\n`;
    const target = path.join(
      process.cwd(),
      "public",
      ...searchIndexPath(index.locale).split("/").filter(Boolean),
    );

    if (check) {
      const current = await fs.readFile(target, "utf8").catch(() => null);
      if (current !== payload) {
        stale += 1;
        console.log(`✗ ${searchIndexPath(index.locale)} is stale`);
      }
      continue;
    }

    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, payload, "utf8");
    const kb = (Buffer.byteLength(payload) / 1024).toFixed(1);
    const byKind = index.docs.reduce<Record<string, number>>((acc, d) => {
      acc[d.kind] = (acc[d.kind] ?? 0) + 1;
      return acc;
    }, {});
    console.log(
      `✓ ${searchIndexPath(index.locale)} — ${index.docs.length} docs ` +
        `(${Object.entries(byKind)
          .map(([k, n]) => `${n} ${k}`)
          .join(", ")}), ${kb} kB`,
    );
  }

  if (check) {
    if (stale) {
      console.log(`\n${stale} index file(s) stale — run \`npm run search:build\``);
      process.exit(1);
    }
    console.log(`\n✓ ${indexes.length} search index file(s) current`);
    return;
  }

  console.log(`\n${indexes.length} index file(s) written`);
}

main().catch((error) => {
  console.error("Failed to build the search index");
  console.error(error);
  process.exit(1);
});
