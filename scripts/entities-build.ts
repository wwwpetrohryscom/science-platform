#!/usr/bin/env tsx
/**
 * Build the entity graph.
 *
 * Reads the hand-authored definitions in data/entities/definitions.json,
 * attaches the articles and evidence the corpus actually contains, and
 * writes data/entities/graph.json.
 *
 * Attachment rules, in full:
 *
 *   - An article is related to an entity if the article's own `tags`
 *     include one of the entity's `matchTags`, or if the article's slug
 *     is listed in `matchSlugs`.
 *   - AND the article sits inside one of the entity's declared
 *     `sections`.
 *
 * Prose is never scanned. The previous automated linking pass matched
 * the word "cells" in an article about photovoltaic cells to an article
 * about cell biology, and no amount of care makes prose matching safe
 * for words like "cell", "energy" or "resolution". Tags are authored
 * deliberately by whoever wrote the article; the section constraint then
 * refuses a match that is right in the wrong discipline. The builder
 * reports any tag match it refused on those grounds, so the guard's work
 * is visible rather than silent.
 *
 * Usage:
 *   npm run entities:build
 *   npm run entities:build -- --check
 */
import fs from "node:fs";
import path from "node:path";

import { walkAllContent, PROJECT_ROOT } from "./_lib";
import { loadRegistry } from "../lib/evidence/index";
import type { Entity, EntityDefinition, EntityGraph } from "../lib/entities/types";

const DATA_DIR = path.join(PROJECT_ROOT, "data", "entities");
const DEFS = path.join(DATA_DIR, "definitions.json");
const GRAPH = path.join(DATA_DIR, "graph.json");

function inSections(section: string, category: string, sections: string[]): boolean {
  return sections.some((s) => s === category || s === section || section.startsWith(`${s}/`));
}

async function main() {
  const check = process.argv.includes("--check");
  const defs = (JSON.parse(fs.readFileSync(DEFS, "utf8")) as { entities: EntityDefinition[] })
    .entities;
  const walked = (await walkAllContent()).filter((w) => w.locale === "en");
  const registry = loadRegistry();

  const evidenceBySlug = new Map<string, string[]>();
  for (const r of registry.records) {
    for (const u of r.usedBy) {
      const list = evidenceBySlug.get(u.slug) ?? [];
      list.push(r.evidenceId);
      evidenceBySlug.set(u.slug, list);
    }
  }

  const refusals: string[] = [];
  const entities: Entity[] = defs.map((d) => {
    const tagSet = new Set(d.matchTags.map((t) => t.toLowerCase()));
    const slugSet = new Set(d.matchSlugs ?? []);
    const related = new Set<string>();

    for (const w of walked) {
      const section = w.kind === "insight" ? "insights" : `${w.category}/${w.subtopic}`;
      const allowed = inSections(section, w.category, d.sections);
      const tags = (Array.isArray(w.frontmatter.tags) ? w.frontmatter.tags : []).map((t) =>
        String(t).toLowerCase(),
      );
      const tagHit = tags.some((t) => tagSet.has(t));
      const slugHit = slugSet.has(w.slug);

      if ((tagHit || slugHit) && allowed) {
        related.add(w.slug);
      } else if (tagHit && !allowed) {
        // The section guard doing its job. Recorded rather than dropped so
        // a definition with the wrong `sections` is visible.
        refusals.push(`${d.id} × ${w.slug} (${section}) — tag matched outside declared sections`);
      }
    }

    const evidenceIds = new Set<string>();
    for (const slug of related) {
      for (const id of evidenceBySlug.get(slug) ?? []) evidenceIds.add(id);
    }

    return {
      ...d,
      childEntities: [],
      relatedArticles: [...related].sort(),
      evidenceIds: [...evidenceIds].sort(),
    };
  });

  // Children are the inverse of declared parents — derived so the two
  // directions cannot disagree.
  const byId = new Map(entities.map((e) => [e.id, e]));
  for (const e of entities) {
    for (const parentId of e.parentEntities ?? []) {
      const parent = byId.get(parentId);
      if (parent && !parent.childEntities.includes(e.id)) parent.childEntities.push(e.id);
    }
  }
  for (const e of entities) e.childEntities.sort();

  const graph: EntityGraph = {
    generatedDate: new Date().toISOString().slice(0, 10),
    entities: entities.sort((a, b) => a.id.localeCompare(b.id)),
  };
  const serialised = JSON.stringify(graph, null, 1) + "\n";

  if (check) {
    if (!fs.existsSync(GRAPH)) {
      console.error("✗ graph.json missing — run npm run entities:build");
      process.exit(1);
    }
    const current = JSON.parse(fs.readFileSync(GRAPH, "utf8")) as EntityGraph;
    if (JSON.stringify(current.entities) !== JSON.stringify(graph.entities)) {
      console.error("✗ graph.json is stale — run npm run entities:build");
      process.exit(1);
    }
    console.log(`✓ graph.json is current — ${entities.length} entities`);
    return;
  }

  fs.writeFileSync(GRAPH, serialised, "utf8");

  const linked = entities.filter((e) => e.relatedArticles.length > 0).length;
  const articleLinks = entities.reduce((a, e) => a + e.relatedArticles.length, 0);
  const covered = new Set(entities.flatMap((e) => e.relatedArticles));
  console.log("✓ data/entities/graph.json");
  console.log(`  ${entities.length} entities · ${linked} attached to at least one article`);
  console.log(`  ${articleLinks} entity-article links covering ${covered.size} distinct articles`);
  console.log(`  ${entities.reduce((a, e) => a + e.evidenceIds.length, 0)} entity-evidence links`);
  if (refusals.length) {
    console.log(`  ${refusals.length} tag match(es) refused by the section guard:`);
    for (const r of refusals.slice(0, 8)) console.log(`    - ${r}`);
  } else {
    console.log("  section guard refused nothing");
  }
  const orphans = entities.filter((e) => e.relatedArticles.length === 0).map((e) => e.id);
  if (orphans.length) console.log(`  ⚠ ${orphans.length} entities with no article: ${orphans.join(", ")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
