/**
 * Taxonomy: categories and their subtopics.
 *
 * This module is the SINGLE SOURCE OF TRUTH for the site's
 * hierarchical structure. Every route, breadcrumb, sitemap entry,
 * and internal link traverses this tree.
 *
 * Adding a new subtopic is a one-line change here — routes are
 * generated dynamically (`generateStaticParams`) and the navigation
 * picks it up automatically.
 *
 * Adding a new top-level category requires (a) one entry here and
 * (b) a new `/app/<category>/...` directory tree. We keep the route
 * directories explicit (rather than a single `/[category]` dynamic)
 * because per-category routing improves SEO clarity and makes
 * category-specific tweaks (custom hero, custom OG) trivial.
 */

export type CategorySlug = "ecology" | "biology" | "physics";

export type Subtopic = {
  slug: string;
  label: string;
  description: string;
  /**
   * Search intent this subtopic is built to satisfy. Drives meta
   * description, FAQ scaffolding, and pillar-article framing.
   */
  intent: string;
};

export type CategoryDefinition = {
  slug: CategorySlug;
  label: string;
  /** Short tagline used in hero and category cards. */
  tagline: string;
  /** Long description used in metadata and category-page header. */
  description: string;
  /** Visual accent token referenced by Tailwind classes. */
  accent: "primary" | "accent";
  subtopics: Subtopic[];
};

export const categories: CategoryDefinition[] = [
  {
    slug: "ecology",
    label: "Ecology",
    tagline: "Ecosystems, climate, and biodiversity",
    description:
      "Long-form, peer-informed writing on the systems that sustain life — ecosystems and their services, the climate that shapes them, and the biodiversity that gives them resilience.",
    accent: "primary",
    subtopics: [
      {
        slug: "ecosystems",
        label: "Ecosystems",
        description:
          "Forests, wetlands, oceans, soils — how energy and matter move through living systems and what disturbance reveals about them.",
        intent:
          "Reader wants to understand how ecosystems function, what destabilizes them, and which interventions hold up under field conditions.",
      },
      {
        slug: "climate-change",
        label: "Climate Change",
        description:
          "Drivers, feedbacks, attribution, and the policy-relevant uncertainties at the frontier of climate science.",
        intent:
          "Reader wants accurate, current explanations of climate mechanisms and the strength of the evidence behind contested claims.",
      },
      {
        slug: "biodiversity",
        label: "Biodiversity",
        description:
          "Why species count is the wrong metric, what genetic and functional diversity actually do, and where conservation efforts are working.",
        intent:
          "Reader wants frameworks for thinking about diversity beyond raw species lists, and evidence-based conservation strategies.",
      },
    ],
  },
  {
    slug: "biology",
    label: "Biology",
    tagline: "From molecules to populations",
    description:
      "Cellular, molecular, evolutionary, and developmental biology — the mechanisms that connect a single sequence of bases to the diversity of living form.",
    accent: "primary",
    subtopics: [
      {
        slug: "cells",
        label: "Cell Biology",
        description:
          "The cell as the fundamental unit of life — its architecture, energetics, signaling, and the methods used to study it.",
        intent:
          "Reader wants a scientifically rigorous understanding of cellular processes without dumbed-down analogies.",
      },
      {
        slug: "genetics",
        label: "Genetics",
        description:
          "Molecular genetics, genomics, and the evolution of genetic systems — what sequencing has revealed, what it cannot resolve.",
        intent:
          "Reader wants to understand the mechanisms by which genetic information is stored, transmitted, and expressed.",
      },
      {
        slug: "evolution",
        label: "Evolution",
        description:
          "Selection, drift, development, and the modern synthesis — including the parts of it that are quietly being revised.",
        intent:
          "Reader wants careful evolutionary explanations grounded in evidence rather than just-so storytelling.",
      },
    ],
  },
  {
    slug: "physics",
    label: "Applied Physics",
    tagline: "Energy, materials, and physical systems",
    description:
      "Applied physics for the climate transition and beyond — energy systems, thermodynamic limits, and the quantum foundations that increasingly matter outside the lab.",
    accent: "accent",
    subtopics: [
      {
        slug: "energy",
        label: "Energy",
        description:
          "Generation, storage, transmission, and the materials and architectures that determine which technologies actually scale.",
        intent:
          "Reader wants honest assessment of energy technologies — what works, what is still in the lab, what the binding constraints are.",
      },
      {
        slug: "thermodynamics",
        label: "Thermodynamics",
        description:
          "The laws that bound every physical system — and the surprisingly modern questions still open at their frontier.",
        intent:
          "Reader wants the conceptual core of thermodynamics applied to real engineering and biological problems.",
      },
      {
        slug: "quantum-basics",
        label: "Quantum Basics",
        description:
          "Quantum mechanics for the practitioner — the parts that matter for sensors, materials, and computing, without the philosophy.",
        intent:
          "Reader wants a working understanding of quantum behavior as it shows up in applied technology.",
      },
    ],
  },
];

/* ----------------------------------------------------------------
   Convenience accessors. Use these everywhere — never index into
   `categories` directly outside this module.
---------------------------------------------------------------- */

const categoryMap: Record<CategorySlug, CategoryDefinition> = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
) as Record<CategorySlug, CategoryDefinition>;

export function getCategory(slug: CategorySlug): CategoryDefinition {
  return categoryMap[slug];
}

export function getSubtopic(
  category: CategorySlug,
  subtopicSlug: string,
): Subtopic | undefined {
  return getCategory(category).subtopics.find((s) => s.slug === subtopicSlug);
}

export function listCategorySlugs(): CategorySlug[] {
  return categories.map((c) => c.slug);
}

export function listSubtopicSlugs(category: CategorySlug): string[] {
  return getCategory(category).subtopics.map((s) => s.slug);
}

/** Returns true if the given (category, subtopic) pair exists. */
export function isValidSubtopic(
  category: string,
  subtopic: string,
): category is CategorySlug {
  if (!isCategorySlug(category)) return false;
  return getCategory(category).subtopics.some((s) => s.slug === subtopic);
}

export function isCategorySlug(value: string): value is CategorySlug {
  return value === "ecology" || value === "biology" || value === "physics";
}
