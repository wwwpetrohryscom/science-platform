/**
 * Editorial attribution registry.
 *
 * Articles reference attribution labels by id rather than presenting
 * unverifiable individual experts. These are editorial desks, not
 * individual scientists, and carry no academic credentials.
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
};

export type AuthorId =
  | "ecosciencehub-editorial-team"
  | "climate-research-desk"
  | "environmental-science-desk"
  | "biology-ecosystems-desk"
  | "energy-systems-desk"
  | "public-health-environment-desk";

export const authors: Record<AuthorId, Author> = {
  "ecosciencehub-editorial-team": {
    id: "ecosciencehub-editorial-team",
    name: "EcoScienceHub Editorial Team",
    title: "Editorial desk",
    bio: "Editorial attribution for EcoScienceHub explainers and platform guidance. This label does not represent an individual scientist or reviewer.",
    expertise: ["science", "editorial", "research"],
  },
  "climate-research-desk": {
    id: "climate-research-desk",
    name: "Climate Research Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for climate science coverage based on authoritative assessments, public datasets, and peer-reviewed literature.",
    expertise: ["climate", "ecology", "attribution"],
  },
  "environmental-science-desk": {
    id: "environmental-science-desk",
    name: "Environmental Science Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for ecology, biodiversity, restoration, and environmental monitoring coverage.",
    expertise: ["ecology", "biodiversity", "conservation"],
  },
  "biology-ecosystems-desk": {
    id: "biology-ecosystems-desk",
    name: "Biology & Ecosystems Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for biology, cell science, genetics, evolution, and organism-environment interactions.",
    expertise: ["biology", "genetics", "evolution", "ecosystems"],
  },
  "energy-systems-desk": {
    id: "energy-systems-desk",
    name: "Energy Systems Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for applied physics, energy systems, photovoltaics, thermodynamics, and measurement technologies.",
    expertise: ["physics", "energy", "materials"],
  },
  "public-health-environment-desk": {
    id: "public-health-environment-desk",
    name: "Public Health & Environment Desk",
    title: "Editorial desk",
    bio: "Editorial attribution for coverage connecting environmental change, exposure, health risk, and public-health institutions.",
    expertise: ["health", "environment", "climate"],
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
