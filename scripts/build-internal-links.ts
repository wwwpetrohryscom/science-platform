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
 * English is injected first, and a translation may then only gain links
 * to targets its English original links. Each locale otherwise indexes
 * its own titles and tags and links whatever its own wording happens to
 * match, so the two link sets drift apart article by article and the
 * translation fidelity check reports the drift — correctly, because a
 * translation that links somewhere the original does not is no longer a
 * translation of it. The mirror keeps the anchor in the target language:
 * only the destination is inherited, never the wording.
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

  // Targets each English article links, after its own injection. This is
  // the ceiling for every translation of it.
  const englishTargets = new Map<string, Set<string>>();
  // English articles whose body changed, and the date now stamped on
  // them. The translation contract copies the identity frontmatter from
  // the English article rather than authoring it, so updatedDate has to
  // travel with the revision or every translation of a re-linked article
  // fails the identity check.
  const englishDates = new Map<string, string>();
  // Files the injection loop already rewrote. The restamp pass below
  // works from `walked`, which was read before any of them changed, so
  // rewriting one of these would put its pre-injection body back.
  const alreadyWritten = new Set<string>();
  const targetsIn = (body: string): Set<string> => {
    const out = new Set<string>();
    for (const m of body.matchAll(/\]\(\/[a-z]{2}\/([^)]+)\)/g)) {
      const slug = m[1].replace(/\/$/, "").split("/").pop();
      if (slug) out.add(slug);
    }
    return out;
  };

  // English first, then the rest — the mirror depends on the order.
  const ordered = [...byLocale].sort(([a], [b]) =>
    a === "en" ? -1 : b === "en" ? 1 : a.localeCompare(b),
  );

  for (const [locale, group] of ordered) {
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
        category: g.category,
        related: Array.isArray(g.frontmatter.related)
          ? (g.frontmatter.related as string[])
          : [],
      }));

    const fullIndex = buildKeywordIndex(linkable);

    for (const w of group) {
      // A translation may only gain links to targets its English
      // original has. The keyword — the visible anchor — still comes
      // from this locale's own index, so the prose stays in its own
      // language; what is inherited is the destination.
      const index =
        locale === "en"
          ? fullIndex
          : fullIndex.filter((k) =>
              (englishTargets.get(w.slug) ?? new Set<string>()).has(
                k.url.replace(/\/$/, "").split("/").pop() ?? "",
              ),
            );
      const before = hashBody(w.body);
      const result = injectInternalLinks(w.body, index, w.slug, {
        source: {
          category: w.category,
          related: Array.isArray(w.frontmatter.related)
            ? (w.frontmatter.related as string[])
            : [],
          title: String(w.frontmatter.title ?? ""),
          tags: Array.isArray(w.frontmatter.tags)
            ? (w.frontmatter.tags as string[])
            : [],
        },
      });
      if (locale === "en") englishTargets.set(w.slug, targetsIn(result.body));
      const after = hashBody(result.body);
      if (result.injected.length > 0) {
        totalLinks += result.injected.length;
      }
      if (before === after) continue;
      touchedFiles += 1;
      const rel = path.relative(process.cwd(), w.filepath);
      console.log(`→ ${rel}: +${result.injected.length} links`);

      const stamp = new Date().toISOString().slice(0, 10);
      if (locale === "en") englishDates.set(w.slug, stamp);
      alreadyWritten.add(w.filepath);
      if (!dry) {
        // Bumping updatedDate here is intentional — we changed the body.
        await writeDoc(
          w.filepath,
          { ...w.frontmatter, updatedDate: stamp },
          result.body,
        );
      }
    }
    void locale;
  }

  // Carry the English revision date onto every translation of a
  // re-linked article, including translations that gained no link of
  // their own. Their bodies are now a translation of a slightly older
  // English article, which the translation report says out loud; what
  // they must not do is disagree with the original about its identity.
  let restamped = 0;
  for (const w of walked) {
    if (w.locale === "en") continue;
    if (alreadyWritten.has(w.filepath)) continue;
    const stamp = englishDates.get(w.slug);
    if (!stamp || String(w.frontmatter.updatedDate ?? "") === stamp) continue;
    restamped += 1;
    if (!dry) {
      await writeDoc(w.filepath, { ...w.frontmatter, updatedDate: stamp }, w.body);
    }
  }

  console.log(
    `\n${touchedFiles} file(s) modified · ${totalLinks} link(s) injected${
      dry ? " (dry run)" : ""
    }`,
  );
  if (restamped) {
    console.log(
      `${restamped} translation(s) restamped to their English article's revision date`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
