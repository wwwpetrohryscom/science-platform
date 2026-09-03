/**
 * Editorial attribution registry.
 *
 * Articles reference attribution labels by id rather than presenting
 * unverifiable individual experts. These are editorial desks, not
 * individual scientists, and carry no academic credentials.
 *
 * Editorial policy encoded here:
 *   - A desk is an organizational byline. It never implies that a named
 *     person wrote, reviewed, or endorsed a page.
 *   - No entry may carry a degree, title, institution, or ORCID unless
 *     it belongs to a real, consenting contributor. None currently do.
 *   - `coverage` lists the taxonomy slugs a desk is responsible for. It
 *     is a statement about this site's own structure, not a credential.
 *
 * See /editorial-standards for the reader-facing version of this policy.
 */

export type Author = {
  id: AuthorId;
  name: string;
  title: string;
  bio: string;
  /** Optional external profile or institution page. */
  url?: string;
  /**
   * Subject tags used for display and validation. These are desk
   * coverage areas, not claims of individual expertise.
   */
  expertise: string[];
  /**
   * Taxonomy slugs this desk is responsible for, written as
   * "<category>" or "<category>/<subtopic>". Used to render desk pages
   * and to check that attribution is distributed sensibly.
   */
  coverage: string[];
  /** What this desk's pages are principally sourced from. */
  sourcingNote: string;
};

export type AuthorId =
  | "ecosciencehub-editorial-team"
  | "climate-research-desk"
  | "environmental-science-desk"
  | "biodiversity-conservation-desk"
  | "earth-systems-desk"
  | "oceans-freshwater-desk"
  | "soil-land-systems-desk"
  | "biology-ecosystems-desk"
  | "biology-life-sciences-desk"
  | "microbiology-genomics-desk"
  | "energy-systems-desk"
  | "physics-energy-desk"
  | "public-health-environment-desk";

export const authors: Record<AuthorId, Author> = {
  "ecosciencehub-editorial-team": {
    id: "ecosciencehub-editorial-team",
    name: "EcoScienceHub Editorial Team",
    title: "Editorial desk",
    bio: "Editorial attribution for EcoScienceHub explainers, cross-disciplinary pieces, and platform guidance. This label does not represent an individual scientist or reviewer.",
    expertise: ["science", "editorial", "research"],
    coverage: ["ecology", "biology", "physics"],
    sourcingNote:
      "Intergovernmental assessments, national scientific agencies, and peer-reviewed literature, cited inline on every page.",
  },
  "climate-research-desk": {
    id: "climate-research-desk",
    name: "Climate Research Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for climate science coverage based on authoritative assessments, public datasets, and peer-reviewed literature.",
    expertise: ["climate", "ecology", "attribution"],
    coverage: ["ecology/climate-change", "ecology/earth-observation"],
    sourcingNote:
      "IPCC assessment reports, WMO bulletins, NOAA and NASA observational products, and the peer-reviewed attribution literature.",
  },
  "environmental-science-desk": {
    id: "environmental-science-desk",
    name: "Environmental Science Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for ecosystem science, forests, and the measurement questions that sit under environmental policy.",
    expertise: ["ecology", "monitoring", "environmental science"],
    coverage: ["ecology/ecosystems", "ecology/forests"],
    sourcingNote:
      "UNEP, FAO, the European Environment Agency, national environment agencies, and the ecological literature.",
  },
  "biodiversity-conservation-desk": {
    id: "biodiversity-conservation-desk",
    name: "Biodiversity & Conservation Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for biodiversity measurement, protected areas, restoration, and species-recovery evidence.",
    expertise: ["biodiversity", "conservation", "restoration"],
    coverage: ["ecology/biodiversity", "ecology/conservation"],
    sourcingNote:
      "IPBES, the IUCN Red List, Protected Planet, GBIF, the CBD, and the conservation-evidence literature.",
  },
  "earth-systems-desk": {
    id: "earth-systems-desk",
    name: "Earth Systems Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for coupled Earth system science — biogeochemical cycles, feedbacks, modes of variability, and Earth system models.",
    expertise: ["earth system science", "biogeochemistry", "modelling"],
    coverage: ["ecology/earth-systems"],
    sourcingNote:
      "IPCC Working Group I, WCRP and CMIP documentation, NOAA and NASA Earth science programmes, and Earth System Science Data.",
  },
  "oceans-freshwater-desk": {
    id: "oceans-freshwater-desk",
    name: "Oceans & Freshwater Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for marine and freshwater science — circulation, chemistry, productivity, water quality, and aquatic ecosystems.",
    expertise: ["oceanography", "freshwater", "hydrology"],
    coverage: ["ecology/oceans", "ecology/freshwater"],
    sourcingNote:
      "NOAA Ocean Service and PMEL, Copernicus Marine Service, FAO fisheries statistics, USGS water programmes, and the oceanographic literature.",
  },
  "soil-land-systems-desk": {
    id: "soil-land-systems-desk",
    name: "Soil & Land Systems Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for soil science, land degradation, and land-surface processes, including soil carbon measurement and its uncertainties.",
    expertise: ["soil science", "land degradation", "agriculture"],
    coverage: ["ecology/soils"],
    sourcingNote:
      "FAO Global Soil Partnership, USDA soil survey resources, the UNCCD and IPBES land-degradation assessments, and the soil-science literature.",
  },
  "biology-ecosystems-desk": {
    id: "biology-ecosystems-desk",
    name: "Biology & Ecosystems Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for organism–environment biology: cell biology, evolution, and the biological mechanisms that show up in ecological systems.",
    expertise: ["biology", "evolution", "ecosystems"],
    coverage: ["biology/cells", "biology/evolution"],
    sourcingNote:
      "NIH and NCBI resources, peer-reviewed cell and evolutionary biology journals, and society reference works.",
  },
  "biology-life-sciences-desk": {
    id: "biology-life-sciences-desk",
    name: "Biology & Life Sciences Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for organismal biology — physiology, development, immunology, neuroscience, taxonomy, and systematics.",
    expertise: ["physiology", "development", "taxonomy"],
    coverage: ["biology/physiology", "biology/taxonomy"],
    sourcingNote:
      "NIH, MedlinePlus, NCBI Taxonomy, GBIF, and the peer-reviewed physiological and systematic literature. Nothing here is medical advice.",
  },
  "microbiology-genomics-desk": {
    id: "microbiology-genomics-desk",
    name: "Microbiology & Genomics Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for microbiology, genetics, genomics, bioinformatics, and biotechnology methods and their limits.",
    expertise: ["microbiology", "genomics", "bioinformatics"],
    coverage: ["biology/genetics", "biology/microbiology", "biology/biotechnology"],
    sourcingNote:
      "NCBI, the National Human Genome Research Institute, Ensembl, WHO surveillance reports, and the peer-reviewed genomics literature.",
  },
  "energy-systems-desk": {
    id: "energy-systems-desk",
    name: "Energy Systems Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for energy technologies and systems — generation, storage, transmission, and the constraints that decide what scales.",
    expertise: ["energy", "materials", "systems"],
    coverage: ["physics/energy", "physics/thermodynamics"],
    sourcingNote:
      "IEA, NREL, the U.S. Department of Energy, IRENA, and the peer-reviewed energy and materials literature.",
  },
  "physics-energy-desk": {
    id: "physics-energy-desk",
    name: "Physics & Energy Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for physical foundations — mechanics, waves, optics, fluids, atmospheric physics, radiation, and materials.",
    expertise: ["physics", "measurement", "radiation"],
    coverage: [
      "physics/quantum-basics",
      "physics/climate-physics",
      "physics/mechanics-waves",
      "physics/matter-radiation",
    ],
    sourcingNote:
      "NIST, NASA, NOAA, the IAEA, CERN, and the peer-reviewed physics literature. Constants and units follow NIST/CODATA and the SI Brochure.",
  },
  "public-health-environment-desk": {
    id: "public-health-environment-desk",
    name: "Public Health & Environment Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for coverage connecting environmental change, exposure, and risk. Explains what the evidence shows; never gives medical advice.",
    expertise: ["health", "environment", "exposure"],
    coverage: ["ecology/pollution"],
    sourcingNote:
      "WHO, the U.S. EPA, the CDC, the European Environment Agency, and systematic reviews of the exposure literature.",
  },
};

export function getAuthor(id: string): Author {
  if (!(id in authors)) {
    throw new Error(
      `Unknown author id: "${id}". Add the attribution label to lib/authors.ts before referencing it in content frontmatter.`,
    );
  }
  return authors[id as AuthorId];
}

export function listAuthors(): Author[] {
  return Object.values(authors);
}

/** Desk slug used in URLs: /<locale>/editorial/<id>. */
export function authorPath(id: AuthorId): string {
  return `/editorial/${id}`;
}

/**
 * Words that must never appear in a desk name, title, or bio. Editorial
 * desks are organizations; presenting one as a credentialed individual
 * would be a false authority claim. Enforced by the content validator.
 */
export const FORBIDDEN_CREDENTIAL_TOKENS = [
  "ph.d",
  "phd",
  "m.d.",
  " md,",
  "dr.",
  "professor",
  "prof.",
  "postdoc",
  "faculty",
  "reviewed by dr",
  "peer-reviewed by",
] as const;
