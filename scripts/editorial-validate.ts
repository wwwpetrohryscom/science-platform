#!/usr/bin/env tsx
/**
 * Editorial policy validator.
 *
 * The three policy documents are the pages a reader consults to decide
 * whether to believe the rest of the site. Serving one of them half in
 * the reader's language and half in English would undercut exactly the
 * claim the page is making, so the rule here is all-or-nothing per
 * document per locale, checked structurally rather than trusted.
 *
 * What is checked:
 *   - every section of the English document exists in the translation,
 *     in the same order, with the same number of paragraphs;
 *   - a section with bullets in English has the same number of bullets;
 *   - nothing is empty, and nothing was left in English;
 *   - the contact address and any other literal that must survive
 *     translation is still present;
 *   - the locale files agree with each other on which documents exist,
 *     so a locale cannot be advertised for one policy and silently
 *     missing for another.
 *
 * `updatedDate` is deliberately not translated and not checked here: it
 * is a property of the document, not of a language.
 *
 * Usage: npm run editorial:validate
 */
import fs from "node:fs";
import path from "node:path";

import {
  POLICY_DOCUMENTS,
  localizedPolicyLocales,
  policyLocalization,
  type PolicyDocument,
} from "../lib/editorial";
import { LOCALES, DEFAULT_LOCALE } from "../lib/i18n-config";

/** Literals that must appear verbatim in every language. */
const INVARIANT = ["info@helperg.com", "EcoScienceHub"];

type Issue = { severity: "error" | "warning"; rule: string; message: string };

const issues: Issue[] = [];
const err = (rule: string, message: string) =>
  issues.push({ severity: "error", rule, message });
const warn = (rule: string, message: string) =>
  issues.push({ severity: "warning", rule, message });

function words(s: string): number {
  return s.split(/\s+/).filter(Boolean).length;
}

/**
 * Whether a translated string looks like it was never translated.
 *
 * The first version of this rule compared the two strings for
 * equality, and an injection test walked straight through it: pasting
 * the English paragraph back in with its last sentence trimmed is not
 * equal to the original, so the rule passed a passage that is entirely
 * in English. Equality was checking the form of the string when the
 * question is what language it is in.
 *
 * What separates the two cleanly is lexical overlap — but only over
 * the English words that a translator is supposed to replace. The
 * second version of this rule compared every four-letter token and
 * reported a correctly translated German bullet, because the bullet is
 * mostly a list of agency acronyms ("IPCC, IPBES, UNEP, UNESCO, WMO,
 * WHO, FAO, IAEA, UNCCD, Ramsar") that are identical in every
 * language. Seven of its ten tokens matched, and none of the seven was
 * ever going to be translated.
 *
 * So the comparison set is the tokens that appear lowercase in the
 * English source: ordinary vocabulary, excluding acronyms, proper
 * nouns, institution names and addresses, all of which legitimately
 * survive. Measured over this corpus's translated paragraphs the
 * highest genuine overlap is far below the threshold, while a pasted
 * English passage sits near 1.
 *
 * Short strings are exempt: a heading like "Contact" is the same word
 * in four of these languages and is correct in all of them.
 */
const UNTRANSLATED_OVERLAP = 0.55;
const MIN_TOKENS_TO_JUDGE = 8;

/** Alphabetic tokens of four letters or more, lowercased. */
function contentTokens(s: string): string[] {
  return (s.match(/[A-Za-z]{4,}/g) ?? []).map((w) => w.toLowerCase());
}

/**
 * The English words a translation is expected to replace: those written
 * lowercase in the source, so sentence-initial words, acronyms and
 * proper nouns are all excluded.
 */
function translatableTokens(en: string): Set<string> {
  return new Set(
    (en.match(/[A-Za-z]{4,}/g) ?? [])
      .filter((w) => w === w.toLowerCase())
      .map((w) => w.toLowerCase()),
  );
}

function untranslated(en: string, loc: string): boolean {
  if (words(en) < MIN_TOKENS_TO_JUDGE) return false;
  const target = contentTokens(loc);
  if (target.length < MIN_TOKENS_TO_JUDGE) return false;
  const source = translatableTokens(en);
  if (source.size < 5) return false;
  const shared = target.filter((w) => source.has(w)).length;
  return shared / target.length >= UNTRANSLATED_OVERLAP;
}

function checkDocument(doc: PolicyDocument, locale: string) {
  const loc = policyLocalization(doc.slug, locale);
  if (!loc) {
    err(
      "policy-missing",
      `${locale}: no translation of "${doc.slug}" — the locale file exists but this document is absent, so the site would advertise a language it cannot serve for this page`,
    );
    return;
  }

  for (const field of ["title", "eyebrow", "summary"] as const) {
    if (!loc[field] || !loc[field].trim()) {
      err("policy-empty", `${locale}/${doc.slug}: "${field}" is empty`);
    }
    if (untranslated(doc[field], loc[field] ?? "")) {
      err(
        "policy-untranslated",
        `${locale}/${doc.slug}: "${field}" is still in English`,
      );
    }
  }

  if (loc.sections.length !== doc.sections.length) {
    err(
      "policy-section-count",
      `${locale}/${doc.slug}: ${loc.sections.length} sections against ${doc.sections.length} in English — a policy is published whole or not at all`,
    );
    return;
  }

  doc.sections.forEach((en, i) => {
    const t = loc.sections[i];
    const where = `${locale}/${doc.slug} §${i + 1} ("${en.heading}")`;
    if (!t.heading || !t.heading.trim()) {
      err("policy-empty", `${where}: heading is empty`);
    }
    if (untranslated(en.heading, t.heading ?? "")) {
      err("policy-untranslated", `${where}: heading is still in English`);
    }
    if (t.paragraphs.length !== en.paragraphs.length) {
      err(
        "policy-paragraph-count",
        `${where}: ${t.paragraphs.length} paragraphs against ${en.paragraphs.length} in English`,
      );
    }
    t.paragraphs.forEach((p, j) => {
      if (!p.trim()) err("policy-empty", `${where}: paragraph ${j + 1} is empty`);
      const enP = en.paragraphs[j];
      if (enP && untranslated(enP, p)) {
        err(
          "policy-untranslated",
          `${where}: paragraph ${j + 1} is still in English`,
        );
      }
    });
    const enB = en.bullets ?? [];
    const tB = t.bullets ?? [];
    if (tB.length !== enB.length) {
      err(
        "policy-bullet-count",
        `${where}: ${tB.length} bullets against ${enB.length} in English`,
      );
    }
    tB.forEach((b, j) => {
      if (!b.trim()) err("policy-empty", `${where}: bullet ${j + 1} is empty`);
      if (enB[j] && untranslated(enB[j], b)) {
        err(
          "policy-untranslated",
          `${where}: bullet ${j + 1} is still in English`,
        );
      }
    });
  });

  // Invariants that must survive translation.
  const flat = [
    loc.title,
    loc.eyebrow,
    loc.summary,
    ...loc.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.bullets ?? []),
    ]),
  ].join("\n");
  const enFlat = [
    doc.title,
    doc.eyebrow,
    doc.summary,
    ...doc.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.bullets ?? []),
    ]),
  ].join("\n");
  for (const literal of INVARIANT) {
    if (enFlat.includes(literal) && !flat.includes(literal)) {
      err(
        "policy-invariant-lost",
        `${locale}/${doc.slug}: "${literal}" appears in the English document but not in this translation`,
      );
    }
  }
}

function main() {
  const json = process.argv.includes("--json");
  const locales = localizedPolicyLocales();

  // Every locale file must be a real locale, and every locale except
  // the default should have one — otherwise the language switcher
  // offers a language for the articles that the policies cannot honour.
  for (const l of locales) {
    if (!LOCALES.includes(l)) {
      err("policy-unknown-locale", `data/editorial/localized.${l}.json is not a supported locale`);
    }
  }
  for (const l of LOCALES) {
    if (l === DEFAULT_LOCALE) continue;
    if (!locales.includes(l)) {
      warn(
        "policy-locale-absent",
        `${l}: no policy translations, so /${l}/sourcing-policy and its siblings will 404 while articles are served in ${l}`,
      );
    }
  }

  for (const locale of locales) {
    for (const doc of POLICY_DOCUMENTS) checkDocument(doc, locale);
  }

  // The files on disk should be the ones the loader read.
  const dir = path.join(process.cwd(), "data", "editorial");
  const onDisk = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => /^localized\.[a-z]{2}\.json$/.test(f)).length
    : 0;
  if (onDisk !== locales.length) {
    err(
      "policy-file-mismatch",
      `${onDisk} localization files on disk but ${locales.length} loaded — a file failed to parse`,
    );
  }

  const errors = issues.filter((i) => i.severity === "error").length;
  const warnings = issues.length - errors;

  if (json) {
    console.log(JSON.stringify({ locales, documents: POLICY_DOCUMENTS.length, errors, warnings, issues }, null, 2));
  } else {
    for (const i of issues) {
      console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.message}`);
    }
    const sections = POLICY_DOCUMENTS.reduce((n, d) => n + d.sections.length, 0);
    console.log(
      `\n${POLICY_DOCUMENTS.length} policy documents · ${sections} sections · ` +
        `localized: ${locales.length ? locales.map((l) => `${l} ${POLICY_DOCUMENTS.filter((d) => policyLocalization(d.slug, l)).length}/${POLICY_DOCUMENTS.length}`).join(" · ") : "none"}`,
    );
    console.log(`${errors} errors · ${warnings} warnings`);
  }

  if (errors > 0) process.exit(1);
}

main();
