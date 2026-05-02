#!/usr/bin/env tsx
/**
 * Re-stamp metadata across the corpus.
 *
 * What it does:
 *   1. Bump `updatedDate` if the body bytes changed since the last run.
 *      We track this via a private `_bodyHash` field in frontmatter
 *      — survives `git clone` and CI checkouts (mtime does not).
 *   2. Recompute `readingTime` from the current body.
 *   3. Propagate `pillar`: when a pillar exists in the same
 *      (locale, category, subtopic) and a sibling lacks `pillar`,
 *      set it to the pillar's slug.
 *
 * Usage:
 *   npm run content:metadata
 *   tsx scripts/update-metadata.ts --force   # bump every file
 */
import path from "node:path";
import { walkAllContent, writeDoc, hashBody, todayISO, type WalkedArticle } from "./_lib";

const HASH_KEY = "_bodyHash";

function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

async function main() {
  const force = process.argv.includes("--force");
  const walked = await walkAllContent();

  // First pass: which slug is the pillar for each (locale/category/subtopic)?
  const pillars = new Map<string, string>();
  for (const w of walked) {
    if (w.kind !== "article") continue;
    if (String(w.frontmatter.type) !== "pillar") continue;
    const key = `${w.locale}/${w.category}/${w.subtopic}`;
    pillars.set(key, w.slug);
  }

  let bumped = 0;
  for (const w of walked) {
    const newHash = hashBody(w.body);
    const oldHash = String(w.frontmatter[HASH_KEY] ?? "");
    const changed = oldHash !== newHash;

    const fm: Record<string, unknown> = { ...w.frontmatter };
    if (changed || force) {
      fm.updatedDate = todayISO();
      fm[HASH_KEY] = newHash;
      bumped += 1;
    }

    fm.readingTime = estimateReadingTime(w.body);

    // Propagate pillar pointer for non-pillar siblings without one.
    if (
      w.kind === "article" &&
      String(fm.type) !== "pillar" &&
      !fm.pillar
    ) {
      const key = `${w.locale}/${w.category}/${w.subtopic}`;
      const pillarSlug = pillars.get(key);
      if (pillarSlug) fm.pillar = pillarSlug;
    }

    await writeDoc(w.filepath, fm, w.body);
  }

  console.log(`Re-stamped metadata. ${bumped} file(s) had updatedDate bumped.`);
  void path; // keep for IDE-only path completions
  void ((w: WalkedArticle) => w); // keep import for type stability
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
