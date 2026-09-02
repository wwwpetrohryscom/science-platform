#!/usr/bin/env tsx
/**
 * Re-stamp metadata across the corpus.
 *
 * What it does:
 *   1. Bump `updatedDate` if the article *prose* changed since the last
 *      run. Tracked via a private `_bodyHash` field in frontmatter,
 *      which survives `git clone` and CI checkouts (mtime does not).
 *
 *      The hash is computed over the prose with link targets stripped
 *      (see `hashProse` in ./_lib), so an internal-linking pass or a
 *      repaired citation URL does NOT bump the date. `updatedDate` is
 *      published as sitemap `lastmod` and schema.org `dateModified`;
 *      bumping it for a link repair would be a false freshness signal.
 *
 *      A file with no stored hash gets the hash recorded WITHOUT a date
 *      bump — first contact establishes the baseline, it does not
 *      declare that everything was revised today.
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
import { walkAllContent, writeDoc, hashProse, todayISO, type WalkedArticle } from "./_lib";

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
  let baselined = 0;
  for (const w of walked) {
    const newHash = hashProse(w.body);
    const oldHash = String(w.frontmatter[HASH_KEY] ?? "");
    const hadHash = oldHash.length > 0;
    const changed = hadHash && oldHash !== newHash;

    const fm: Record<string, unknown> = { ...w.frontmatter };
    if (changed || force) {
      fm.updatedDate = todayISO();
      fm[HASH_KEY] = newHash;
      bumped += 1;
    } else if (!hadHash) {
      // Record the baseline without claiming the page was revised today.
      fm[HASH_KEY] = newHash;
      baselined += 1;
    } else if (oldHash !== newHash) {
      fm[HASH_KEY] = newHash;
    }

    // Only compute readingTime if it's missing or the body changed.
    // Hand-curated values (set explicitly in frontmatter) should not
    // be silently overwritten by an estimator that may disagree.
    if (typeof fm.readingTime !== "number" || changed || force) {
      fm.readingTime = estimateReadingTime(w.body);
    }

    // Propagate pillar pointer for non-pillar siblings without one, and
    // remove one from a pillar. A pillar that declares itself as its own
    // pillar makes the hub/spoke relationship circular; eleven articles
    // in the corpus carried that, so the cleanup runs unconditionally
    // rather than only on the propagation path.
    if (w.kind === "article") {
      const key = `${w.locale}/${w.category}/${w.subtopic}`;
      if (String(fm.type) === "pillar") {
        delete fm.pillar;
      } else if (!fm.pillar) {
        const pillarSlug = pillars.get(key);
        if (pillarSlug) fm.pillar = pillarSlug;
      }
    }

    await writeDoc(w.filepath, fm, w.body);
  }

  console.log(
    `Re-stamped metadata. ${bumped} file(s) had updatedDate bumped; ` +
      `${baselined} file(s) had a prose hash recorded for the first time (no date change).`,
  );
  void path; // keep for IDE-only path completions
  void ((w: WalkedArticle) => w); // keep import for type stability
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
