/**
 * The tools this site publishes.
 *
 * Deliberately client-safe: no node imports, so the hub and the
 * calculators can both read it. What lives here is identity and
 * provenance — the slug, the formula as it is written on the page, which
 * constants the tool uses, and what it deliberately does not do.
 *
 * The `assumptions` field is required for the same reason an indicator's
 * `limitations` is: a calculator that returns a number without saying
 * what it assumed is the most confident-looking way to be wrong.
 */

export type ToolSlug =
  | "energy-unit-converter"
  | "wavelength-frequency-converter"
  | "photon-energy-calculator"
  | "radioactive-decay-calculator"
  | "population-growth-models"
  | "diversity-index-calculator"
  | "carbon-dioxide-mass-converter"
  | "scientific-notation-tool";

export type ToolDefinition = {
  slug: ToolSlug;
  /** Message key prefix in messages/<locale>.json under `tools.<key>`. */
  key: string;
  /** The relationship the tool implements, as it appears on the page. */
  formula: string;
  /** Constant ids from lib/scientific-data/constants used by this tool. */
  usesConstants: string[];
  /** Whether the tool draws on the CIAAW atomic weights. */
  usesAtomicWeights?: boolean;
  category: "physics" | "ecology" | "measurement";
  relatedGlossaryIds: string[];
  relatedArticleSlugs: string[];
  relatedEntityIds: string[];
  relatedIndicatorIds?: string[];
};

export const TOOLS: ToolDefinition[] = [
  {
    slug: "energy-unit-converter",
    key: "energy",
    formula: "E [J] = value × factor(unit)",
    usesConstants: ["elementary-charge"],
    category: "measurement",
    relatedGlossaryIds: [],
    relatedArticleSlugs: [
      "physics/mechanics-waves/energy-work-and-power",
      "physics/mechanics-waves/the-si-and-its-defining-constants",
    ],
    relatedEntityIds: ["energy", "si-unit-system"],
    relatedIndicatorIds: ["ocean-heat-content-0-2000m"],
  },
  {
    slug: "wavelength-frequency-converter",
    key: "wavelength",
    formula: "c = λf",
    usesConstants: ["speed-of-light"],
    category: "physics",
    relatedGlossaryIds: [],
    relatedArticleSlugs: [
      "physics/quantum-basics/electromagnetic-spectrum-applications",
      "physics/quantum-basics/why-wavelength-decides-what-radiation-does",
    ],
    relatedEntityIds: ["electromagnetic-radiation", "wave"],
  },
  {
    slug: "photon-energy-calculator",
    key: "photon",
    formula: "E = hf = hc/λ",
    usesConstants: ["planck-constant", "speed-of-light", "elementary-charge"],
    category: "physics",
    relatedGlossaryIds: [],
    relatedArticleSlugs: [
      "physics/quantum-basics/why-wavelength-decides-what-radiation-does",
      "physics/quantum-basics/wave-particle-duality-explained",
    ],
    relatedEntityIds: ["electromagnetic-radiation", "quantum-mechanics"],
  },
  {
    slug: "radioactive-decay-calculator",
    key: "decay",
    formula: "N(t) = N₀ (½)^(t / t½)",
    usesConstants: [],
    category: "physics",
    relatedGlossaryIds: [],
    relatedArticleSlugs: [
      "physics/matter-radiation/radioactivity-and-radiation-units",
      "physics/matter-radiation/ionising-radiation-exposure-and-risk",
    ],
    relatedEntityIds: ["radioactivity"],
  },
  {
    slug: "population-growth-models",
    key: "population",
    formula: "N(t) = N₀e^(rt) · N(t) = K / (1 + ((K − N₀)/N₀)e^(−rt))",
    usesConstants: [],
    category: "ecology",
    relatedGlossaryIds: [],
    relatedArticleSlugs: [
      "ecology/ecosystems/ecological-succession-explained",
      "biology/evolution/genetic-drift-and-population-size",
    ],
    relatedEntityIds: ["ecosystem"],
  },
  {
    slug: "diversity-index-calculator",
    key: "diversity",
    formula: "H′ = −Σ pᵢ ln pᵢ · D = Σ pᵢ²",
    usesConstants: [],
    category: "ecology",
    relatedGlossaryIds: ["species-evenness"],
    relatedArticleSlugs: [
      "ecology/biodiversity/species-evenness-and-diversity",
      "ecology/biodiversity/species-richness-explained",
      "ecology/biodiversity/why-species-counts-mislead-conservation",
    ],
    relatedEntityIds: ["biodiversity"],
  },
  {
    slug: "carbon-dioxide-mass-converter",
    key: "carbon",
    formula: "m(CO₂) = m(C) × M(CO₂)/M(C)",
    usesConstants: [],
    usesAtomicWeights: true,
    category: "ecology",
    relatedGlossaryIds: ["carbon-sink", "carbon-cycle"],
    relatedArticleSlugs: [
      "ecology/earth-systems/carbon-cycle-explained",
      "ecology/soils/soil-carbon-measurement-and-uncertainty",
      "ecology/forests/forest-carbon-measurement",
    ],
    relatedEntityIds: ["carbon-cycle"],
    relatedIndicatorIds: ["atmospheric-co2", "co2-growth-rate"],
  },
  {
    slug: "scientific-notation-tool",
    key: "notation",
    formula: "x = m × 10ⁿ",
    usesConstants: [],
    category: "measurement",
    relatedGlossaryIds: [],
    relatedArticleSlugs: [
      "physics/mechanics-waves/measurement-uncertainty-explained",
      "physics/mechanics-waves/the-si-and-its-defining-constants",
    ],
    relatedEntityIds: ["measurement-uncertainty", "si-unit-system"],
  },
];

export function getTool(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function toolPath(slug: string): string {
  return `/tools/${slug}`;
}

/**
 * Tools that name this article. Derived from the forward edge rather
 * than authored twice, so the two directions cannot drift apart.
 */
export function toolsForArticle(slug: string): ToolDefinition[] {
  return TOOLS.filter((t) => t.relatedArticleSlugs.includes(slug));
}

/** Tools that name this indicator. */
export function toolsForIndicator(indicatorId: string): ToolDefinition[] {
  return TOOLS.filter((t) => (t.relatedIndicatorIds ?? []).includes(indicatorId));
}
