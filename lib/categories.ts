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
      {
        slug: "earth-systems",
        label: "Earth System Science",
        description:
          "The planet as one coupled system — how the atmosphere, ocean, ice, land, and life exchange energy and matter, and what that coupling explains that no single component can.",
        intent:
          "Reader wants to understand the Earth as a coupled system: what its components are, how energy and matter move between them, which feedbacks and modes of variability arise from the coupling, and how models and observations are used to study the whole.",
      },
      {
        slug: "earth-observation",
        label: "Earth Observation",
        description:
          "How satellites and sensors observe the planet — the methods, data products, and uncertainties behind measuring environmental change from space.",
        intent:
          "Reader wants to understand how Earth is observed from space: the satellites and sensors, how raw signals become scientific data, and the limits of remote-sensing measurements.",
      },
      {
        slug: "conservation",
        label: "Conservation Science",
        description:
          "Protected areas, species recovery, restoration, and invasive-species management \u2014 what conservation interventions achieve, and how that is measured.",
        intent:
          "Reader wants to know which conservation interventions have measurable effects, how effectiveness is evaluated, and where the evidence is weaker than the headlines suggest.",
      },
      {
        slug: "oceans",
        label: "Oceans & Marine Science",
        description:
          "Ocean circulation, chemistry, productivity, and marine ecosystems \u2014 how the ocean works as a habitat and as a component of the climate system.",
        intent:
          "Reader wants to understand marine ecosystems and ocean processes: what lives there, what drives productivity, and how warming, acidification, and extraction change them.",
      },
      {
        slug: "freshwater",
        label: "Freshwater & Wetlands",
        description:
          "Rivers, lakes, groundwater, and wetlands \u2014 the smallest reservoirs in the water cycle and the most heavily used, and what determines their condition.",
        intent:
          "Reader wants to understand freshwater systems: how they function, how their quality and quantity are measured, and what degrades or restores them.",
      },
      {
        slug: "forests",
        label: "Forests & Land Cover",
        description:
          "Forest structure, disturbance, carbon, and land-cover change \u2014 what forests do biologically and what they are counted as doing in carbon accounting.",
        intent:
          "Reader wants rigorous treatment of forest ecology and forest carbon: how forests are measured, what deforestation and degradation statistics mean, and where estimates disagree.",
      },
      {
        slug: "soils",
        label: "Soils & the Land Surface",
        description:
          "Soil formation, soil carbon, soil biology, and land degradation \u2014 the thin, slow-forming layer that most terrestrial life depends on.",
        intent:
          "Reader wants to understand soils as a system: how they form, what lives in them, how soil carbon is measured, and what degradation and restoration actually change.",
      },
      {
        slug: "pollution",
        label: "Pollution & Environmental Quality",
        description:
          "Air, water, and chemical pollution \u2014 sources, exposure pathways, measurement, and the evidence linking contaminants to ecological and human harm.",
        intent:
          "Reader wants to understand pollutants specifically: what they are, how concentrations and exposures are measured, and how strong the evidence is for particular harms.",
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
      {
        slug: "microbiology",
        label: "Microbiology",
        description:
          "Bacteria, archaea, fungi, viruses, and the microbial communities that run most of the planet's biogeochemistry.",
        intent:
          "Reader wants a working understanding of microbial life: how it is classified and cultured, how microbiomes are studied, and what sequencing can and cannot tell us about them.",
      },
      {
        slug: "physiology",
        label: "Physiology & Organismal Biology",
        description:
          "How bodies work \u2014 respiration, circulation, thermoregulation, immunity, nervous systems, and development, in humans and other organisms.",
        intent:
          "Reader wants mechanistic explanations of physiological systems and how they are studied, without clinical advice or oversimplified diagrams.",
      },
      {
        slug: "taxonomy",
        label: "Taxonomy & the Tree of Life",
        description:
          "Naming, classifying, and reconstructing relationships among organisms \u2014 and the surprisingly unsettled question of how many species there are.",
        intent:
          "Reader wants to understand how organisms are named and classified, how phylogenies are built from data, and why species counts and boundaries are contested.",
      },
      {
        slug: "biotechnology",
        label: "Biotechnology & Bioinformatics",
        description:
          "Sequencing, genome editing, synthetic biology, and the computational methods that turn biological data into inference.",
        intent:
          "Reader wants to understand biotechnological methods and their limits: what a technique measures, what it can build, and what claims outrun the evidence.",
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
      {
        slug: "climate-physics",
        label: "Atmospheric & Climate Physics",
        description:
          "Radiation, atmospheric structure, convection, and the physics that determines how energy moves through the atmosphere and ocean.",
        intent:
          "Reader wants the physical mechanisms behind climate: radiative transfer, lapse rates, circulation, and why the numbers in climate science come out the way they do.",
      },
      {
        slug: "mechanics-waves",
        label: "Mechanics, Waves & Fluids",
        description:
          "Motion, forces, energy, oscillation, sound, light, and the behaviour of fluids \u2014 the classical physics that underlies most measurement.",
        intent:
          "Reader wants clear, quantitative treatments of classical mechanics, waves, optics, and fluid dynamics as they appear in real instruments and environmental systems.",
      },
      {
        slug: "matter-radiation",
        label: "Matter, Materials & Radiation",
        description:
          "Atomic and nuclear structure, radioactivity, particles, and the materials science behind detectors, reactors, and energy technologies.",
        intent:
          "Reader wants accurate foundations on radiation and materials: what the units mean, how exposure is assessed, and how nuclear and particle physics show up outside the lab.",
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
