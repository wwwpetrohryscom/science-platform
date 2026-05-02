#!/usr/bin/env tsx
/**
 * Inject internal links across the entire corpus.
 *
 * Idempotent — running it twice produces no changes because the
 * injector skips text already inside markdown links.
 *
 * Per-locale scoped: links never cross locales, so EN content does
 * not link into FR pages and vice versa.
 *
 * Usage:
 *   npm run content:link
 *   tsx scripts/build-internal-links.ts --dry   # report only, no writes
 */
import path from "node:path";
import { walkAllContent, writeDoc, hashBody, articleUrl, type WalkedArticle } from "./_lib";
import {
  buildKeywordIndex,
  injectInternalLinks,
  type LinkableArticle,
} from "../lib/internal-linking";

async function main() {
  const dry = process.argv.includes("--dry");
  const walked = await walkAllContent();

  // Group by locale — link graph is per-locale.
  const byLocale = new Map<string, WalkedArticle[]>();
  for (const w of walked) {
    const list = byLocale.get(w.locale) ?? [];
    list.push(w);
    byLocale.set(w.locale, list);
  }

  let totalLinks = 0;
  let touchedFiles = 0;

  for (const [locale, group] of byLocale) {
    const linkable: LinkableArticle[] = group
      .filter((g) => g.kind === "article")
      .map((g) => ({
        url: articleUrl(g),
        slug: g.slug,
        type: (String(g.frontmatter.type) as LinkableArticle["type"]) ?? "seo",
        title: String(g.frontmatter.title ?? ""),
        tags: Array.isArray(g.frontmatter.tags)
          ? (g.frontmatter.tags as string[])
          : [],
      }));

    const index = buildKeywordIndex(linkable);

    for (const w of group) {
      const before = hashBody(w.body);
      const result = injectInternalLinks(w.body, index, w.slug);
      const after = hashBody(result.body);
      if (result.injected.length > 0) {
        totalLinks += result.injected.length;
      }
      if (before === after) continue;
      touchedFiles += 1;
      const rel = path.relative(process.cwd(), w.filepath);
      console.log(`→ ${rel}: +${result.injected.length} links`);

      if (!dry) {
        // Bumping updatedDate here is intentional — we changed the body.
        await writeDoc(
          w.filepath,
          { ...w.frontmatter, updatedDate: new Date().toISOString().slice(0, 10) },
          result.body,
        );
      }
    }
    void locale;
  }

  console.log(
    `\n${touchedFiles} file(s) modified · ${totalLinks} link(s) injected${
      dry ? " (dry run)" : ""
    }`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
