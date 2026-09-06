#!/usr/bin/env tsx
/**
 * Point translated articles at the localized glossary page.
 *
 * Translations were written when the glossary was English-only, so they
 * carry `/en/glossary/…` links by design — the translation contract
 * lists that prefix as one of the few a translation may keep. Now that a
 * locale can have the term itself, keeping the English link would send a
 * French reader to an English page that has a French equivalent.
 *
 * A link is only swapped where the locale actually has the term. The
 * rest stay at /en/, because the English page is a real destination and
 * a localized one would not exist.
 *
 * Usage:
 *   tsx scripts/glossary-relocalize-links.ts            # dry run
 *   tsx scripts/glossary-relocalize-links.ts --apply
 */
import fs from "node:fs";

import { walkAllContent } from "./_lib";
import { hasLocalizedGlossaryTerm } from "../lib/glossary";

async function main() {
  const apply = process.argv.includes("--apply");
  const walked = (await walkAllContent()).filter((w) => w.locale !== "en");
  let swapped = 0;
  let kept = 0;
  const files = new Set<string>();

  for (const w of walked) {
    const raw = fs.readFileSync(w.filepath, "utf8");
    const out = raw.replace(
      /\]\(\/en\/glossary\/([a-z0-9-]+)\)/g,
      (whole, slug: string) => {
        if (!hasLocalizedGlossaryTerm(slug, w.locale)) {
          kept += 1;
          return whole;
        }
        swapped += 1;
        files.add(w.filepath);
        return `](/${w.locale}/glossary/${slug})`;
      },
    );
    if (out !== raw && apply) fs.writeFileSync(w.filepath, out, "utf8");
  }

  console.log(
    `${apply ? "swapped" : "would swap"} ${swapped} links across ${files.size} files · ${kept} left at /en/ because the term is not localized there`,
  );
  if (!apply) console.log("(dry run — pass --apply to write)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
