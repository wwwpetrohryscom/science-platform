#!/usr/bin/env tsx
/**
 * Glossary validator.
 *
 * Errors: duplicate slug or term, a relatedArticle that does not exist,
 * a source URL that is not in the evidence registry, an empty definition.
 * Warnings: a term with no source, a short definition long enough to be
 * an explanation, and a term no article or entity refers to.
 *
 * The registry check is the substantive one. A glossary source that is
 * not also cited by an article is a URL nothing else has checked, and it
 * is exactly where an unverified link would accumulate unnoticed.
 *
 * Localizations are checked against the same contract as translated
 * articles: the English entry is the concept, a localization is that
 * concept written in another language. So a localization may not name a
 * slug the English glossary does not define, may not be the English text
 * copied across, and may not quietly lose a figure the English entry
 * asserts. Number drift is a warning rather than an error because some
 * languages spell small numerals out; it prints the values so the
 * difference can be settled without opening the file.
 */
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { GLOSSARY, allGlossaryLocalizations } from "../lib/glossary";
import { allEvidence } from "../lib/evidence/index";
import { allEntities } from "../lib/entities/index";

type Issue = { severity: "error" | "warning"; rule: string; message: string; where: string };

/**
 * Numbers the English text states that the localization does not.
 *
 * Digit grouping and the decimal mark differ by language — 1,386 in
 * English is 1 386 in French and 1.386 in German — so both sides are
 * normalised to a bare numeral before comparison. Only numbers missing
 * from the localization are reported; a localization is free to add one
 * (a spelled-out English "forty" written as 40, say).
 *
 * A digit fused to a letter is part of an identifier rather than a
 * quantity — "WG1" is the working group, and French names it "Groupe de
 * travail I". The rule is about figures the entry asserts, so those are
 * skipped; "Landsat 9" and "Sentinel-3" still count, because the digit
 * there is separated and does travel between languages.
 */
function numbers(text: string): string[] {
  const out: string[] = [];
  const re = /(?<![\p{L}])(?:\d{1,3}(?:[.,\u00a0\u202f ]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?)/gu;
  for (const m of text.match(re) ?? []) {
    let v = m;
    // Strip grouping separators: a separator followed by exactly three
    // digits that are not the end of a decimal fraction.
    v = v.replace(/[.,\u00a0\u202f ](?=\d{3}(?:\D|$))/g, "");
    v = v.replace(",", ".");
    v = v.replace(/^0+(?=\d)/, "");
    if (v.includes(".")) v = v.replace(/0+$/, "").replace(/\.$/, "");
    out.push(v);
  }
  return out;
}

function numberDrift(en: string, tr: string): string[] {
  const have = new Map<string, number>();
  for (const n of numbers(tr)) have.set(n, (have.get(n) ?? 0) + 1);
  const missing: string[] = [];
  for (const n of numbers(en)) {
    const c = have.get(n) ?? 0;
    if (c > 0) have.set(n, c - 1);
    else if (!missing.includes(n)) missing.push(n);
  }
  return missing;
}

async function main() {
  const asJson = process.argv.includes("--json");
  const issues: Issue[] = [];
  const walked = (await walkAllContent()).filter((w) => w.locale === "en");
  const slugs = new Set(walked.map((w) => w.slug));
  const registryUrls = new Set(allEvidence().map((r) => r.url));
  const entityGlossaryIds = new Set(
    allEntities().map((e) => e.glossaryId).filter(Boolean) as string[],
  );

  const seenSlug = new Set<string>();
  const seenTerm = new Map<string, string>();

  for (const g of GLOSSARY) {
    if (seenSlug.has(g.slug)) {
      issues.push({ severity: "error", rule: "duplicate-slug", message: "slug defined twice", where: g.slug });
    }
    seenSlug.add(g.slug);

    const termKey = g.term.trim().toLowerCase();
    if (seenTerm.has(termKey)) {
      issues.push({
        severity: "error",
        rule: "duplicate-term",
        message: `term "${g.term}" also defined by ${seenTerm.get(termKey)}`,
        where: g.slug,
      });
    }
    seenTerm.set(termKey, g.slug);

    if (!g.shortDefinition?.trim() || !g.explanation?.trim()) {
      issues.push({ severity: "error", rule: "empty", message: "missing definition or explanation", where: g.slug });
    }
    if (g.shortDefinition && g.shortDefinition.length > 220) {
      issues.push({
        severity: "warning",
        rule: "short-definition-length",
        message: `shortDefinition is ${g.shortDefinition.length} characters — it is the one-line form`,
        where: g.slug,
      });
    }
    for (const ra of g.relatedArticles ?? []) {
      if (!slugs.has(ra.slug)) {
        issues.push({
          severity: "error",
          rule: "dangling-article",
          message: `relatedArticles names "${ra.slug}", which is not an English article`,
          where: g.slug,
        });
      }
    }
    const sources = g.relatedSources ?? [];
    if (sources.length === 0) {
      issues.push({
        severity: "warning",
        rule: "no-source",
        message: "no related source",
        where: g.slug,
      });
    }
    for (const s of sources) {
      if (!registryUrls.has(s.url)) {
        issues.push({
          severity: "error",
          rule: "source-off-registry",
          message: `source ${s.url} is not cited by any article, so nothing else checks it`,
          where: g.slug,
        });
      }
    }
  }

  // --- Localizations -------------------------------------------------
  // A localization is the same concept in another language. It is a
  // defect for it to name a term that does not exist, to be the English
  // text unchanged, or to drop a number the English entry states.
  const localized = allGlossaryLocalizations();
  const bySlug = new Map(GLOSSARY.map((g) => [g.slug, g]));
  const coverage: Array<[string, number]> = [];

  for (const [locale, entries] of Object.entries(localized)) {
    const seenLocaleTerm = new Map<string, string>();
    let count = 0;
    for (const [slug, loc] of Object.entries(entries)) {
      count += 1;
      const where = `${locale}:${slug}`;
      const base = bySlug.get(slug);
      if (!base) {
        issues.push({
          severity: "error",
          rule: "localization-unknown-slug",
          message: "no English glossary term with this slug, so the localized page would have no concept behind it",
          where,
        });
        continue;
      }
      if (!loc.term?.trim() || !loc.shortDefinition?.trim() || !loc.explanation?.trim()) {
        issues.push({
          severity: "error",
          rule: "localization-empty",
          message: "missing term, shortDefinition or explanation",
          where,
        });
        continue;
      }

      const termKey = loc.term.trim().toLowerCase();
      const clash = seenLocaleTerm.get(termKey);
      if (clash) {
        issues.push({
          severity: "error",
          rule: "localization-duplicate-term",
          message: `term "${loc.term}" is also the ${locale} term for ${clash}`,
          where,
        });
      }
      seenLocaleTerm.set(termKey, slug);

      if (loc.shortDefinition.trim() === base.shortDefinition.trim()) {
        issues.push({
          severity: "error",
          rule: "localization-untranslated",
          message: "shortDefinition is the English text unchanged",
          where,
        });
      }
      if (loc.explanation.trim() === base.explanation.trim()) {
        issues.push({
          severity: "error",
          rule: "localization-untranslated",
          message: "explanation is the English text unchanged",
          where,
        });
      }

      if (loc.shortDefinition.length > 260) {
        issues.push({
          severity: "warning",
          rule: "localization-short-definition-length",
          message: `shortDefinition is ${loc.shortDefinition.length} characters — it is the one-line form`,
          where,
        });
      }

      const ratio = loc.explanation.length / Math.max(1, base.explanation.length);
      if (ratio < 0.6 || ratio > 1.9) {
        issues.push({
          severity: "warning",
          rule: "localization-length-drift",
          message: `explanation is ${Math.round(ratio * 100)}% of the English length (${loc.explanation.length} vs ${base.explanation.length}) — check nothing was dropped or added`,
          where,
        });
      }

      for (const field of ["shortDefinition", "explanation"] as const) {
        const missing = numberDrift(base[field], loc[field]);
        if (missing.length) {
          issues.push({
            severity: "warning",
            rule: "localization-number-drift",
            message: `${field}: English states ${missing.map((m) => `"${m}"`).join(", ")}, absent from the ${locale} text`,
            where,
          });
        }
      }
    }
    coverage.push([locale, count]);
  }

  const localeNames = Object.keys(localized);
  for (const g of GLOSSARY) {
    const have = localeNames.filter((l) => localized[l]?.[g.slug]);
    if (have.length > 0 && have.length < localeNames.length) {
      const gap = localeNames.filter((l) => !localized[l]?.[g.slug]);
      issues.push({
        severity: "warning",
        rule: "localization-partial",
        message: `localized into ${have.join(", ")} but not ${gap.join(", ")}`,
        where: g.slug,
      });
    }
  }

  // Reachability: a term nothing links to and no entity names is a page
  // only the glossary index can reach.
  const linkedFromContent = new Set<string>();
  for (const w of walked) {
    for (const m of w.body.matchAll(/\]\(\/en\/glossary\/([a-z0-9-]+)\)/g)) {
      linkedFromContent.add(m[1]);
    }
  }
  for (const g of GLOSSARY) {
    if (!linkedFromContent.has(g.slug) && !entityGlossaryIds.has(g.slug)) {
      issues.push({
        severity: "warning",
        rule: "unreferenced-term",
        message: "no article links it and no entity names it",
        where: g.slug,
      });
    }
  }

  const errors = issues.filter((i) => i.severity === "error");
  if (asJson) {
    console.log(JSON.stringify({ terms: GLOSSARY.length, issues }, null, 2));
    process.exit(errors.length ? 1 : 0);
  }
  const shown = issues.filter((i) => i.rule !== "unreferenced-term");
  for (const i of shown) {
    console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.where} — ${i.message}`);
  }
  const unref = issues.filter((i) => i.rule === "unreferenced-term").length;
  if (unref) console.log(`⚠ [unreferenced-term] ${unref} terms are reachable only from the glossary index`);
  const cov = Object.entries(allGlossaryLocalizations())
    .map(([l, e]) => `${l} ${Object.keys(e).length}`)
    .join(" · ");
  console.log(
    `\n${GLOSSARY.length} glossary terms · localized: ${cov || "none"}`,
  );
  console.log(
    `${errors.length} errors · ${issues.length - errors.length} warnings`,
  );
  void path;
  void PROJECT_ROOT;
  if (errors.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
