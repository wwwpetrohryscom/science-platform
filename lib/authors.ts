/**
 * Author registry.
 *
 * Articles reference authors by id (in their frontmatter) rather than
 * inlining biographical data. This keeps bios consistent across pieces
 * and gives us a clear migration path to per-author hub pages
 * (`/author/<id>`) with `Person` JSON-LD.
 */

export type Author = {
  id: AuthorId;
  name: string;
  title: string;
  bio: string;
  /** Optional external profile or institution page. */
  url?: string;
  /**
   * Subject expertise tags — used to weight author display on
   * subtopic pages and to validate that an author is appropriate
   * for the article's category.
   */
  expertise: string[];
};

export type AuthorId =
  | "helena-vega"
  | "ren-iwasaki"
  | "mira-brandt"
  | "daniel-okafor"
  | "sofia-laurent"
  | "anya-petrov"
  | "marcus-hale"
  | "lila-mendez"
  | "kai-rosenberg"
  | "ines-fournier";

export const authors: Record<AuthorId, Author> = {
  "helena-vega": {
    id: "helena-vega",
    name: "Dr. Helena Vega",
    title: "Senior Ecologist, Institute for Climate Systems",
    bio: "Helena studies forest carbon dynamics across temperate and boreal biomes, with twelve years of field-station experience.",
    url: "https://example.org/people/helena-vega",
    expertise: ["ecology", "climate", "forestry"],
  },
  "ren-iwasaki": {
    id: "ren-iwasaki",
    name: "Dr. Ren Iwasaki",
    title: "Marine Biologist, Pacific Reef Lab",
    bio: "Ren leads long-term monitoring of coral microbiomes and their role in bleaching resistance.",
    expertise: ["biology", "marine", "microbiome"],
  },
  "mira-brandt": {
    id: "mira-brandt",
    name: "Dr. Mira Brandt",
    title: "Computational Biologist, EMBL Affiliate",
    bio: "Mira works at the intersection of single-cell sequencing and evolutionary developmental biology.",
    expertise: ["biology", "genomics", "evo-devo"],
  },
  "daniel-okafor": {
    id: "daniel-okafor",
    name: "Prof. Daniel Okafor",
    title: "Applied Physicist, Photovoltaics Group",
    bio: "Daniel develops next-generation perovskite stacks with a focus on long-term stability under field conditions.",
    expertise: ["physics", "energy", "materials"],
  },
  "sofia-laurent": {
    id: "sofia-laurent",
    name: "Dr. Sofia Laurent",
    title: "Soil Scientist, Agro-ecology Network",
    bio: "Sofia studies microbial nitrogen cycling in regenerative cropping systems.",
    expertise: ["ecology", "soil", "agriculture"],
  },
  "anya-petrov": {
    id: "anya-petrov",
    name: "Dr. Anya Petrov",
    title: "Atmospheric Chemist, Stratospheric Research Group",
    bio: "Anya works on heterogeneous chemistry in the upper atmosphere, including aerosol-mediated reaction pathways.",
    expertise: ["physics", "atmosphere", "climate"],
  },
  "marcus-hale": {
    id: "marcus-hale",
    name: "Prof. Marcus Hale",
    title: "Science Policy Scholar, Centre for Risk Governance",
    bio: "Marcus writes about the governance of emerging technologies and the institutions that shape scientific risk-taking.",
    expertise: ["policy", "ethics", "physics"],
  },
  "lila-mendez": {
    id: "lila-mendez",
    name: "Dr. Lila Mendez",
    title: "Climate Scientist, Attribution Working Group",
    bio: "Lila co-leads rapid-attribution studies for extreme weather events, with an emphasis on probabilistic communication.",
    expertise: ["ecology", "climate", "attribution"],
  },
  "kai-rosenberg": {
    id: "kai-rosenberg",
    name: "Dr. Kai Rosenberg",
    title: "Quantum Sensor Group, National Metrology Institute",
    bio: "Kai builds atomic clocks and gravimeters and writes about how quantum sensing is leaving the laboratory.",
    expertise: ["physics", "quantum", "metrology"],
  },
  "ines-fournier": {
    id: "ines-fournier",
    name: "Dr. Inés Fournier",
    title: "Conservation Biologist, Global Biodiversity Observatory",
    bio: "Inés studies functional diversity and the gap between species-counting and ecosystem-functioning frameworks in conservation.",
    expertise: ["ecology", "biodiversity", "conservation"],
  },
};

export function getAuthor(id: string): Author {
  if (!(id in authors)) {
    throw new Error(
      `Unknown author id: "${id}". Add the author to lib/authors.ts before referencing them in content frontmatter.`,
    );
  }
  return authors[id as AuthorId];
}
