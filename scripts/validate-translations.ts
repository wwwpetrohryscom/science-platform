#!/usr/bin/env tsx
/**
 * Translation fidelity checks.
 *
 * A translation may change every word and must change none of the
 * evidence. These rules check the parts that carry meaning across the
 * language boundary, because those are the parts a fluent-sounding
 * translation can quietly get wrong:
 *
 *   - the set of external source URLs,
 *   - the internal-link targets (path identical, locale prefix swapped),
 *   - the frontmatter identity fields (type, author, dates, tags,
 *     related, pillar) — tags in particular are corpus-wide identifiers
 *     used to match related articles across locales, and translating
 *     one breaks that matching silently,
 *   - the numbers.
 *
 * Numbers are compared after normalising locale conventions: thousands
 * separated by '.', ',' or a (narrow/non-breaking) space, decimals
 * marked by ',' or '.'. Genuine differences remain — English spells
 * "Forty-five percent" where Spanish writes "45 por ciento", Spanish
 * renders "3 billion" as "3000 millones", and Russian writes "2018-19"
 * as "2018-2019". Those are correct localization, so a numeric
 * difference is reported as a WARNING for a human to read, never as a
 * build failure. Everything else here is an error.
 *
 * Usage:
 *   npm run content:translations
 *   tsx scripts/validate-translations.ts --json
 */
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { PROJECT_ROOT, CONTENT_ROOT, LOCALES, type Locale } from "./_lib";

type Issue = {
  severity: "error" | "warning";
  rule: string;
  message: string;
  filepath: string;
};

const IDENTITY_FIELDS = [
  "type",
  "author",
  "publishedDate",
  "updatedDate",
  "pillar",
] as const;

function walk(dir: string, out: string[] = []): string[] {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function bodyProse(raw: string): string {
  const { content } = matter(raw);
  return content.replace(/^##\s+Sources[\s\S]*/im, "");
}

const EXTERNAL = /\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g;
const INTERNAL = /\]\((\/[a-z]{2}\/[^)#?\s]*)/g;
/** A number, allowing '.' ',' or a space class as a group separator. */
const NUMBER = /\d[\d.,   ]*\d|\d/g;

function normaliseNumber(raw: string): string {
  let n = raw.trim().replace(/[.,]$/, "");
  // Space-separated groups (fr, ru convention) -> no separator.
  n = n.replace(/[   ](?=\d{3}(?:\D|$))/g, "");
  // '.' or ',' used as a thousands separator -> removed.
  n = n.replace(/(?<=\d)[.,](?=\d{3}(?:\D|$))/g, "");
  // Remaining ',' is a decimal mark.
  n = n.replace(",", ".");
  const f = Number(n);
  return Number.isFinite(f) ? String(f) : n;
}

function multiset(values: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const v of values) m.set(v, (m.get(v) ?? 0) + 1);
  return m;
}

function diffMultiset(a: Map<string, number>, b: Map<string, number>) {
  const onlyA: string[] = [];
  const onlyB: string[] = [];
  for (const [k, n] of a) {
    const d = n - (b.get(k) ?? 0);
    for (let i = 0; i < d; i++) onlyA.push(k);
  }
  for (const [k, n] of b) {
    const d = n - (a.get(k) ?? 0);
    for (let i = 0; i < d; i++) onlyB.push(k);
  }
  return { onlyA, onlyB };
}

function main() {
  const asJson = process.argv.includes("--json");
  const issues: Issue[] = [];
  let checked = 0;

  for (const locale of LOCALES) {
    if (locale === "en") continue;
    for (const file of walk(path.join(CONTENT_ROOT, locale))) {
      const rel = path.relative(PROJECT_ROOT, file);
      const source = file.replace(
        `${path.sep}${locale}${path.sep}`,
        `${path.sep}en${path.sep}`,
      );
      if (!fs.existsSync(source)) {
        issues.push({
          severity: "error",
          rule: "orphan-translation",
          message: `no English source at ${path.relative(PROJECT_ROOT, source)} — the loader matches translations by path, so this file renders as nothing`,
          filepath: rel,
        });
        continue;
      }
      checked += 1;

      const enRaw = fs.readFileSync(source, "utf8");
      const trRaw = fs.readFileSync(file, "utf8");
      const en = matter(enRaw);
      const tr = matter(trRaw);

      // Identity frontmatter.
      for (const key of IDENTITY_FIELDS) {
        const a = en.data[key];
        const b = tr.data[key];
        const norm = (v: unknown) =>
          v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? "");
        if (norm(a) !== norm(b)) {
          issues.push({
            severity: "error",
            rule: "translation-frontmatter",
            message: `${key} is "${norm(b)}" but the English source has "${norm(a)}"`,
            filepath: rel,
          });
        }
      }
      const arr = (v: unknown) => (Array.isArray(v) ? v.map(String) : []);
      for (const key of ["tags", "related"] as const) {
        const a = arr(en.data[key]).join("|");
        const b = arr(tr.data[key]).join("|");
        if (a !== b) {
          issues.push({
            severity: "error",
            rule: "translation-frontmatter",
            message: `${key} differs from the English source — these are corpus-wide slugs, not prose`,
            filepath: rel,
          });
        }
      }
      if (tr.data._bodyHash !== undefined && en.data._bodyHash === tr.data._bodyHash) {
        issues.push({
          severity: "warning",
          rule: "translation-frontmatter",
          message: "_bodyHash copied from the English source",
          filepath: rel,
        });
      }
      for (const key of ["title", "excerpt"] as const) {
        if (String(en.data[key] ?? "") === String(tr.data[key] ?? "")) {
          issues.push({
            severity: "warning",
            rule: "untranslated-field",
            message: `${key} is identical to the English`,
            filepath: rel,
          });
        }
      }

      // Sources heading convention.
      if (!/^##\s+Sources/im.test(tr.content)) {
        issues.push({
          severity: "error",
          rule: "sources-heading",
          message:
            'the "## Sources" heading must stay in English — the validator and the linker both key on it',
          filepath: rel,
        });
      }

      // External citations: identical set.
      const enUrls = multiset([...enRaw.matchAll(EXTERNAL)].map((m) => m[1]));
      const trUrls = multiset([...trRaw.matchAll(EXTERNAL)].map((m) => m[1]));
      const urlDiff = diffMultiset(enUrls, trUrls);
      if (urlDiff.onlyA.length || urlDiff.onlyB.length) {
        issues.push({
          severity: "error",
          rule: "translation-sources",
          message: `citation set differs from the English source — missing: ${
            urlDiff.onlyA.slice(0, 3).join(", ") || "none"
          }; added: ${urlDiff.onlyB.slice(0, 3).join(", ") || "none"}`,
          filepath: rel,
        });
      }

      // Internal links: same paths, this locale's prefix.
      const strip = (l: string) => l.replace(/^\/[a-z]{2}\//, "/");
      const enLinks = multiset(
        [...en.content.matchAll(INTERNAL)].map((m) => strip(m[1])),
      );
      const trMatches = [...tr.content.matchAll(INTERNAL)].map((m) => m[1]);
      for (const l of trMatches) {
        if (!l.startsWith(`/${locale}/`) && !l.startsWith("/en/")) {
          issues.push({
            severity: "error",
            rule: "translation-link-prefix",
            message: `internal link ${l} uses neither /${locale}/ nor the English-only /en/ prefix`,
            filepath: rel,
          });
        } else if (l.startsWith("/en/") && !/^\/en\/(glossary|editorial|sourcing-policy|editorial-standards|corrections)/.test(l)) {
          issues.push({
            severity: "error",
            rule: "translation-link-prefix",
            message: `internal link ${l} still points at the English article; only the English-only routes (glossary, editorial, policies) may keep /en/`,
            filepath: rel,
          });
        }
      }
      const trLinks = multiset(trMatches.map(strip));
      const linkDiff = diffMultiset(enLinks, trLinks);
      if (linkDiff.onlyA.length || linkDiff.onlyB.length) {
        issues.push({
          severity: "warning",
          rule: "translation-links",
          message: `internal-link targets differ from the English — missing: ${
            linkDiff.onlyA.slice(0, 3).join(", ") || "none"
          }; added: ${linkDiff.onlyB.slice(0, 3).join(", ") || "none"}`,
          filepath: rel,
        });
      }

      // Numbers — warning only, see the module note.
      const enNums = multiset(
        (bodyProse(enRaw).match(NUMBER) ?? []).map(normaliseNumber),
      );
      const trNums = multiset(
        (bodyProse(trRaw).match(NUMBER) ?? []).map(normaliseNumber),
      );
      const numDiff = diffMultiset(enNums, trNums);
      if (numDiff.onlyA.length || numDiff.onlyB.length) {
        issues.push({
          severity: "warning",
          rule: "translation-numbers",
          message: `numbers differ — only in EN: ${
            numDiff.onlyA.slice(0, 6).join(", ") || "none"
          } | only here: ${numDiff.onlyB.slice(0, 6).join(", ") || "none"}. Check each: spelled-out numerals, the "mil millones" scale and year formatting legitimately differ.`,
          filepath: rel,
        });
      }
    }
  }

  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  if (asJson) {
    console.log(JSON.stringify({ checked, issues }, null, 2));
    process.exit(errors.length > 0 ? 1 : 0);
  }

  for (const i of issues) {
    console.log(
      `${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.filepath} — ${i.message}`,
    );
  }
  console.log(
    `\n${checked} translations · ${errors.length} errors · ${warnings.length} warnings`,
  );
  if (errors.length > 0) process.exit(1);
}

main();
