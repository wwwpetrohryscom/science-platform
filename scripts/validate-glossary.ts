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
 */
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { GLOSSARY } from "../lib/glossary";
import { allEvidence } from "../lib/evidence/index";
import { allEntities } from "../lib/entities/index";

type Issue = { severity: "error" | "warning"; rule: string; message: string; where: string };

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
  console.log(
    `\n${GLOSSARY.length} glossary terms · ${errors.length} errors · ${issues.length - errors.length} warnings`,
  );
  void path;
  void PROJECT_ROOT;
  if (errors.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
