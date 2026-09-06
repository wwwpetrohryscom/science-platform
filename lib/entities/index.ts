/**
 * Entity graph accessors. Read-only; the graph is built by
 * scripts/entities-build.ts.
 */
import fs from "node:fs";
import path from "node:path";

import type { Entity, EntityCategory, EntityGraph } from "./types";
import { glossaryLocalization } from "@/lib/glossary";

export type { Entity, EntityCategory, EntityGraph } from "./types";

const GRAPH_PATH = path.join(process.cwd(), "data", "entities", "graph.json");
const LOCALIZED_PATH = path.join(
  process.cwd(),
  "data",
  "entities",
  "localized.json",
);

let localizedCache: Record<string, Record<string, string>> | null = null;

function localizedNames(): Record<string, Record<string, string>> {
  if (localizedCache) return localizedCache;
  if (!fs.existsSync(LOCALIZED_PATH)) return (localizedCache = {});
  return (localizedCache = JSON.parse(
    fs.readFileSync(LOCALIZED_PATH, "utf8"),
  ) as Record<string, Record<string, string>>);
}

/**
 * The entity's name in a language.
 *
 * There is one graph. A locale changes what its nodes are called, never
 * which nodes exist or how they relate — a concept that is a child of
 * another in English is a child of it in Russian, and an entity that has
 * no French article still has a French name.
 *
 * The name is resolved in one order, and the order is the point:
 *
 *   1. The glossary, where the entity names a glossary term that the
 *      locale has localized. The glossary entry is the longer, sourced
 *      treatment of the same concept, so letting the graph carry a
 *      second translation of the same word is how the two drift apart.
 *   2. data/entities/localized.json, for the entities the glossary does
 *      not define.
 *   3. The English canonical name. A label is a label; showing the
 *      English word is honest, and inventing one is not.
 */
export function entityName(
  entity: Pick<Entity, "id" | "canonicalName" | "glossaryId">,
  locale: string,
): string {
  if (locale === "en") return entity.canonicalName;
  if (entity.glossaryId) {
    const g = glossaryLocalization(entity.glossaryId, locale);
    if (g) return g.term;
  }
  return localizedNames()[locale]?.[entity.id] ?? entity.canonicalName;
}

/** True when `locale` has its own name for this entity. */
export function hasLocalizedEntityName(
  entity: Pick<Entity, "id" | "glossaryId">,
  locale: string,
): boolean {
  if (locale === "en") return true;
  if (entity.glossaryId && glossaryLocalization(entity.glossaryId, locale)) {
    return true;
  }
  return Boolean(localizedNames()[locale]?.[entity.id]);
}

/** Locales with at least one localized entity name. */
export function localizedEntityLocales(): string[] {
  return Object.keys(localizedNames());
}

let cache: EntityGraph | null = null;

export function loadGraph(): EntityGraph {
  if (cache) return cache;
  if (!fs.existsSync(GRAPH_PATH)) return (cache = { generatedDate: "", entities: [] });
  return (cache = JSON.parse(fs.readFileSync(GRAPH_PATH, "utf8")) as EntityGraph);
}

export function allEntities(): Entity[] {
  return loadGraph().entities;
}

export function entityById(id: string): Entity | undefined {
  return allEntities().find((e) => e.id === id);
}

/** Entities attached to an article, for the "related concepts" surface. */
export function entitiesForArticle(slug: string): Entity[] {
  return allEntities().filter((e) => e.relatedArticles.includes(slug));
}

export function entitiesByCategory(): Map<EntityCategory, Entity[]> {
  const map = new Map<EntityCategory, Entity[]>();
  for (const e of allEntities()) {
    const list = map.get(e.category) ?? [];
    list.push(e);
    map.set(e.category, list);
  }
  return map;
}

/** Readable label for an entity category. */
export const ENTITY_CATEGORY_LABEL: Record<EntityCategory, string> = {
  concept: "Concept",
  process: "Process",
  ecosystem: "Ecosystem",
  biome: "Biome",
  species_group: "Group of organisms",
  molecule: "Molecule",
  gene_concept: "Genetics",
  biological_process: "Biological process",
  physical_law: "Physical law",
  physical_quantity: "Physical quantity",
  energy_system: "Energy system",
  pollutant: "Pollutant",
  environmental_indicator: "Environmental indicator",
  scientific_method: "Method",
};
