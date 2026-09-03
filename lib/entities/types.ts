/**
 * Scientific entity graph.
 *
 * The corpus already contains its concepts, but only as prose and as 738
 * free-text tags. Nothing knows that "carbon cycle", "carbon-cycle" and
 * "biogeochemical-cycles" name one thing, or that the carbon cycle is a
 * biogeochemical cycle, or which articles are about it rather than merely
 * mentioning it.
 *
 * This layer names the concepts once, states how they relate, and links
 * them to the articles, glossary entries and evidence that cover them.
 *
 * ── On matching ──────────────────────────────────────────────────────
 * An earlier automated pass linked the word "cells" in an article about
 * photovoltaic cells to an article about cell biology. The word matched;
 * the meaning did not. That failure is designed out here in two ways:
 *
 *   1. An entity is attached to an article through the article's own
 *      authored metadata — its tags and its slug — never by scanning
 *      prose for the entity's name. Prose matching is what produced the
 *      defect and there is no version of it that is safe for a word like
 *      "cell", "energy" or "resolution".
 *
 *   2. Every entity declares the `sections` of the taxonomy it may
 *      appear in. `cell` is confined to biology; `energy-system` to
 *      physics. A match outside its declared sections is refused even if
 *      the tag is identical, so the photovoltaic case cannot recur
 *      structurally rather than by care.
 */

export type EntityCategory =
  | "concept"
  | "process"
  | "ecosystem"
  | "biome"
  | "species_group"
  | "molecule"
  | "gene_concept"
  | "biological_process"
  | "physical_law"
  | "physical_quantity"
  | "energy_system"
  | "pollutant"
  | "environmental_indicator"
  | "scientific_method";

export type EntityDefinition = {
  id: string;
  canonicalName: string;
  /** Other names the same concept goes by, for display and search. */
  aliases: string[];
  /** One or two sentences. Not a substitute for the glossary or an article. */
  definition: string;
  category: EntityCategory;
  /**
   * Taxonomy prefixes this entity may be attached within: a category
   * ("biology") or a subtopic ("ecology/oceans"). A tag match outside
   * these is refused. See the note on matching above.
   */
  sections: string[];
  /** Article tags that identify an article as being about this entity. */
  matchTags: string[];
  /** Articles named explicitly, when a tag would be too broad or absent. */
  matchSlugs?: string[];
  /** Broader concepts. */
  parentEntities?: string[];
  /** Concepts related but not hierarchically. */
  relatedEntities?: string[];
  /** Glossary slug, where the glossary defines the same term. */
  glossaryId?: string;
};

/** An entity definition plus everything derived from the corpus. */
export type Entity = EntityDefinition & {
  /** Derived: narrower entities that name this one as a parent. */
  childEntities: string[];
  /** Derived from tags and explicit slugs, inside `sections`. */
  relatedArticles: string[];
  /** Derived: evidence cited by the related articles. */
  evidenceIds: string[];
};

export type EntityGraph = {
  generatedDate: string;
  entities: Entity[];
};
