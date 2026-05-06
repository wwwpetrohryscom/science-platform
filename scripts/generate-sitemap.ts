import fs from "node:fs/promises";
import path from "node:path";

import { buildSitemapEntries, renderSitemapXml } from "@/lib/sitemap";

async function main() {
  const entries = await buildSitemapEntries();
  const xml = renderSitemapXml(entries);
  const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, xml, "utf8");

  console.log(`✓ generated public/sitemap.xml with ${entries.length} URLs`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap.xml");
  console.error(error);
  process.exit(1);
});
