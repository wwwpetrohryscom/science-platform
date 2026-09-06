#!/usr/bin/env tsx
/**
 * Localization depth report.
 *
 * Counting translated files says how much has been translated. It does
 * not say whether a reader can stay in their language, which is the
 * thing this platform is trying to become true. The number that answers
 * that is the same-locale link resolution rate: of the internal article
 * links a translated article offers, what share lead somewhere that is
 * also translated.
 *
 * A link to an untranslated article is not broken — the platform serves
 * the English text under the localized URL, marked as a fallback — but
 * it is the end of the reader's own language, and a corpus can be 100%
 * "translated" by that count while every second link leaves it.
 *
 * Usage: npm run content:localization
 *        npm run content:localization -- --json
 */
import fs from "node:fs";

import matter from "gray-matter";
import { walkAllContent, LOCALES } from "./_lib";
import { DEFAULT_LOCALE } from "../lib/i18n-config";
import {
  listGlossarySlugs,
  glossaryLocalization,
} from "../lib/glossary";
import { allEntities, hasLocalizedEntityName } from "../lib/entities/index";

const INTERNAL = /\]\((\/[a-z]{2}\/[^)]+)\)/g;
const SITEWIDE = /^\/[a-z]{2}\/(editorial|sourcing-policy|corrections|editorial-standards)/;

type Row = {
  locale: string;
  files: number;
  articleLinks: number;
  sameLocale: number;
  glossaryLinks: number;
  glossaryLocalized: number;
  glossaryTerms: number;
  entitiesNamed: number;
  /** Internal links the English original has that this translation does
   *  not — the translation is behind, not wrong. */
  linksBehind: number;
};

async function main() {
  const asJson = process.argv.includes("--json");
  const walked = await walkAllContent();
  const slugsByLocale = new Map<string, Set<string>>();
  for (const w of walked) {
    const s = slugsByLocale.get(w.locale) ?? new Set<string>();
    s.add(w.slug);
    slugsByLocale.set(w.locale, s);
  }

  const entities = allEntities();
  const rows: Row[] = [];
  // Which English articles a translated corpus most wants next, ranked
  // by how many of its own links currently leave the language.
  const gaps = new Map<string, number>();

  for (const locale of LOCALES) {
    const own = slugsByLocale.get(locale) ?? new Set<string>();
    const files = walked.filter((w) => w.locale === locale);
    const row: Row = {
      locale,
      files: files.length,
      articleLinks: 0,
      sameLocale: 0,
      glossaryLinks: 0,
      glossaryLocalized: 0,
      glossaryTerms: listGlossarySlugs(locale).length,
      entitiesNamed: entities.filter((e) => hasLocalizedEntityName(e, locale))
        .length,
      linksBehind: 0,
    };

    for (const f of files) {
      const body = matter(fs.readFileSync(f.filepath, "utf8"))
        .content.replace(/^##\s+Sources[\s\S]*/im, "");
      for (const m of body.matchAll(INTERNAL)) {
        const url = m[1];
        if (SITEWIDE.test(url)) continue;
        const slug = url.replace(/\/$/, "").split("/").pop() ?? "";
        if (url.includes("/glossary/")) {
          row.glossaryLinks += 1;
          if (locale === DEFAULT_LOCALE || glossaryLocalization(slug, locale)) {
            row.glossaryLocalized += 1;
          }
          continue;
        }
        row.articleLinks += 1;
        if (own.has(slug)) row.sameLocale += 1;
        else if (locale !== DEFAULT_LOCALE) {
          gaps.set(slug, (gaps.get(slug) ?? 0) + 1);
        }
      }
    }
    if (locale !== DEFAULT_LOCALE) {
      for (const f of files) {
        const en = walked.find(
          (w) => w.locale === DEFAULT_LOCALE && w.slug === f.slug,
        );
        if (!en) continue;
        const count = (text: string) =>
          [...text.replace(/^##\s+Sources[\s\S]*/im, "").matchAll(INTERNAL)]
            .map((m) => m[1].replace(/^\/[a-z]{2}\//, "/"))
            .filter((u) => !SITEWIDE.test(`/xx${u}`));
        const enLinks = count(
          matter(fs.readFileSync(en.filepath, "utf8")).content,
        );
        const trLinks = new Set(
          count(matter(fs.readFileSync(f.filepath, "utf8")).content),
        );
        row.linksBehind += enLinks.filter((u) => !trLinks.has(u)).length;
      }
    }
    rows.push(row);
  }

  if (asJson) {
    console.log(
      JSON.stringify(
        { rows, gaps: [...gaps].sort((a, b) => b[1] - a[1]).slice(0, 40) },
        null,
        2,
      ),
    );
    return;
  }

  const pct = (a: number, b: number) => (b ? `${((a / b) * 100).toFixed(1)}%` : "—");
  console.log(
    "locale  files  art-links  same-locale   glossary-links  localized  terms  entities  links-behind",
  );
  for (const r of rows) {
    console.log(
      `${r.locale.padEnd(6)} ${String(r.files).padStart(6)} ${String(r.articleLinks).padStart(10)} ` +
        `${pct(r.sameLocale, r.articleLinks).padStart(12)} ${String(r.glossaryLinks).padStart(16)} ` +
        `${pct(r.glossaryLocalized, r.glossaryLinks).padStart(10)} ${String(r.glossaryTerms).padStart(6)} ` +
        `${String(r.entitiesNamed).padStart(9)} ${String(r.linksBehind).padStart(13)}`,
    );
  }
  console.log(
    "\nlinks-behind: internal links the English original has that the\n" +
      "translation does not. Not a fidelity defect — an internal link is\n" +
      "navigation, not a claim — but it is the size of the re-translation\n" +
      "backlog, and it is the number that grows silently when the English\n" +
      "corpus is re-linked.",
  );

  const ranked = [...gaps].sort((a, b) => b[1] - a[1]).slice(0, 15);
  if (ranked.length) {
    console.log(
      "\nMost-linked articles no locale has translated (inbound links from translations):",
    );
    for (const [slug, n] of ranked) {
      console.log(`  ${String(n).padStart(3)}  ${slug}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
