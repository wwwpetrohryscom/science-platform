/**
 * Entity graph accessors. Read-only; the graph is built by
 * scripts/entities-build.ts.
 */
import fs from "node:fs";
import path from "node:path";

import type { Entity, EntityCategory, EntityGraph } from "./types";

export type { Entity, EntityCategory, EntityGraph } from "./types";

const GRAPH_PATH = path.join(process.cwd(), "data", "entities", "graph.json");

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
