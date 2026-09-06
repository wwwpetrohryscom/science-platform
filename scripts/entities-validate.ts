#!/usr/bin/env tsx
/**
 * Entity graph validator.
 *
 * Errors: broken references, duplicate ids, a matchSlug or glossaryId
 * that names nothing, an entity with no article, and a localized label
 * that names nothing, collides, or duplicates a name the glossary
 * already gives the same concept.
 * Warnings: an article with no entity, a definition long enough to be
 * competing with the glossary rather than indexing it, and an entity
 * that some locales name and others do not.
 */
import fs from "node:fs";
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import {
  allEntities,
  hasLocalizedEntityName,
} from "../lib/entities/index";
import { GLOSSARY, glossaryLocalization } from "../lib/glossary";

const LOCALIZED_ENTITY_PATH = path.join(
  PROJECT_ROOT,
  "data",
  "entities",
  "localized.json",
);

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

  // --- Localized names ------------------------------------------
  // One graph, six ways of naming its nodes. What is checked is that
  // the naming layer stays a naming layer: every locale names the same
  // set of entities, no locale names one the graph does not have, and
  // no entity is named twice in the same language by two different
  // sources — the glossary and the label file — because that is how a
  // concept ends up with two French names that slowly diverge.
  const localizedNames = fs.existsSync(LOCALIZED_ENTITY_PATH)
    ? (JSON.parse(fs.readFileSync(LOCALIZED_ENTITY_PATH, "utf8")) as Record<
        string,
        Record<string, string>
      >)
    : {};
  const entityIds = new Set(entities.map((e) => e.id));
  const nameLocales = Object.keys(localizedNames);

  for (const [locale, names] of Object.entries(localizedNames)) {
    const seen = new Map<string, string>();
    for (const [id, name] of Object.entries(names)) {
      const where = `${locale}:${id}`;
      if (!entityIds.has(id)) {
        issues.push({
          severity: "error",
          rule: "entity-name-unknown-id",
          message: "no entity with this id, so the label names nothing",
          where,
        });
        continue;
      }
      if (!name.trim()) {
        issues.push({
          severity: "error",
          rule: "entity-name-empty",
          message: "empty label",
          where,
        });
      }
      const entity = entities.find((e) => e.id === id);
      if (entity?.glossaryId && glossaryLocalization(entity.glossaryId, locale)) {
        issues.push({
          severity: "error",
          rule: "entity-name-duplicated",
          message: `the glossary already gives this concept a ${locale} name via "${entity.glossaryId}" — one of the two will drift`,
          where,
        });
      }
      const clash = seen.get(name.trim().toLowerCase());
      if (clash) {
        issues.push({
          severity: "error",
          rule: "entity-name-collision",
          message: `"${name}" is also the ${locale} label for ${clash}`,
          where,
        });
      }
      seen.set(name.trim().toLowerCase(), id);
    }
  }

  for (const e of entities) {
    const missing = nameLocales.filter((l) => !hasLocalizedEntityName(e, l));
    if (missing.length && missing.length < nameLocales.length) {
      issues.push({
        severity: "warning",
        rule: "entity-name-partial",
        message: `named in ${nameLocales.filter((l) => hasLocalizedEntityName(e, l)).join(", ")} but not ${missing.join(", ")}`,
        where: e.id,
      });
    } else if (missing.length === nameLocales.length && nameLocales.length) {
      issues.push({
        severity: "warning",
        rule: "entity-name-missing",
        message: "no locale has a name for this entity; every language shows the English one",
        where: e.id,
      });
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
  const named = nameLocales
    .map(
      (l) =>
        `${l} ${entities.filter((e) => hasLocalizedEntityName(e, l)).length}`,
    )
    .join(" · ");
  console.log(
    `\n${entities.length} entities · ${covered.size}/${walked.length} articles mapped · ` +
      `named: ${named || "en only"}`,
  );
  console.log(
    `${errors.length} errors · ${issues.length - errors.length} warnings`,
  );
  if (errors.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
