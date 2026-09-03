#!/usr/bin/env tsx
/**
 * Entity graph validator.
 *
 * Errors: broken references, duplicate ids, a matchSlug or glossaryId
 * that names nothing, an entity with no article.
 * Warnings: an article with no entity, and a definition long enough to
 * be competing with the glossary rather than indexing it.
 */
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { allEntities } from "../lib/entities/index";
import { GLOSSARY } from "../lib/glossary";

type Issue = { severity: "error" | "warning"; rule: string; message: string; where: string };

async function main() {
  const asJson = process.argv.includes("--json");
  const entities = allEntities();
  const issues: Issue[] = [];

  if (entities.length === 0) {
    console.error("✗ entity graph is empty — run npm run entities:build");
    process.exit(1);
  }

  const walked = (await walkAllContent()).filter((w) => w.locale === "en");
  const slugs = new Set(walked.map((w) => w.slug));
  const glossarySlugs = new Set(GLOSSARY.map((g) => g.slug));
  const ids = new Set<string>();

  for (const e of entities) {
    if (ids.has(e.id)) {
      issues.push({ severity: "error", rule: "duplicate-id", message: `${e.id} defined twice`, where: e.id });
    }
    ids.add(e.id);
  }

  for (const e of entities) {
    for (const key of ["parentEntities", "relatedEntities", "childEntities"] as const) {
      for (const ref of e[key] ?? []) {
        if (!ids.has(ref)) {
          issues.push({
            severity: "error",
            rule: "dangling-reference",
            message: `${key} names "${ref}", which is not an entity`,
            where: e.id,
          });
        }
      }
    }
    for (const s of e.matchSlugs ?? []) {
      if (!slugs.has(s)) {
        issues.push({
          severity: "error",
          rule: "dangling-slug",
          message: `matchSlugs names "${s}", which is not an English article`,
          where: e.id,
        });
      }
    }
    if (e.glossaryId && !glossarySlugs.has(e.glossaryId)) {
      issues.push({
        severity: "error",
        rule: "dangling-glossary",
        message: `glossaryId "${e.glossaryId}" is not a glossary term`,
        where: e.id,
      });
    }
    if (e.relatedArticles.length === 0) {
      issues.push({
        severity: "error",
        rule: "entity-orphan",
        message: "no article is attached — an entity with no content behind it is a stub",
        where: e.id,
      });
    }
    if (!e.definition.trim()) {
      issues.push({ severity: "error", rule: "empty-definition", message: "no definition", where: e.id });
    } else if (e.definition.length > 400) {
      issues.push({
        severity: "warning",
        rule: "definition-length",
        message: `definition is ${e.definition.length} characters — an entity indexes the explanation, it does not replace it`,
        where: e.id,
      });
    }
    if (e.parentEntities?.includes(e.id) || e.relatedEntities?.includes(e.id)) {
      issues.push({ severity: "error", rule: "self-reference", message: "references itself", where: e.id });
    }
  }

  const covered = new Set(entities.flatMap((e) => e.relatedArticles));
  for (const w of walked) {
    if (!covered.has(w.slug)) {
      issues.push({
        severity: "warning",
        rule: "article-unmapped",
        message: "no entity is attached to this article",
        where: path.relative(PROJECT_ROOT, w.filepath),
      });
    }
  }

  const errors = issues.filter((i) => i.severity === "error");
  if (asJson) {
    console.log(JSON.stringify({ entities: entities.length, issues }, null, 2));
    process.exit(errors.length ? 1 : 0);
  }
  for (const i of issues) {
    console.log(`${i.severity === "error" ? "✗" : "⚠"} [${i.rule}] ${i.where} — ${i.message}`);
  }
  console.log(
    `\n${entities.length} entities · ${covered.size}/${walked.length} articles mapped · ` +
      `${errors.length} errors · ${issues.length - errors.length} warnings`,
  );
  if (errors.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
