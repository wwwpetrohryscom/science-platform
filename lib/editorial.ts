/**
 * Editorial policy layer.
 *
 * The reader-facing statement of how this site is written, sourced and
 * corrected. Kept as data rather than prose-in-JSX so that:
 *   - the same policy text can be referenced from desk pages,
 *   - the sourcing policy stays in sync with `lib/sources.ts`, and
 *   - a validator can assert that the policy pages are non-empty and
 *     that every desk named here exists in `lib/authors.ts`.
 *
 * These pages are English-only, following the glossary precedent: an
 * untranslated policy served under a localized URL is worse than no
 * localized URL at all.
 */
import { authors, type AuthorId } from "@/lib/authors";
import { SOURCE_REGISTRY } from "@/lib/sources";
import type { CategorySlug } from "@/lib/categories";

export type PolicySection = {
  heading: string;
  /** Paragraphs. Rendered in order. */
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
};

export type PolicyDocument = {
  slug: "editorial-standards" | "sourcing-policy" | "corrections";
  title: string;
  eyebrow: string;
  summary: string;
  /** ISO date this policy text was last substantively revised. */
  updatedDate: string;
  sections: PolicySection[];
};

export const EDITORIAL_STANDARDS: PolicyDocument = {
  slug: "editorial-standards",
  title: "Editorial standards",
  eyebrow: "How this site is made",
  summary:
    "What EcoScienceHub publishes, who writes it, how claims are checked, and the things we will not do to make a page rank.",
  updatedDate: "2026-09-02",
  sections: [
    {
      heading: "What this site is",
      paragraphs: [
        "EcoScienceHub publishes explanatory science writing on ecology, biology and applied physics. The audience is people who want the actual mechanism and the actual evidence — students, teachers, journalists, practitioners, and readers who have hit the limits of a summary.",
        "Every page is written to answer a specific question, and is expected to say plainly where the evidence runs out. A page that cannot be written to that standard is not published.",
      ],
    },
    {
      heading: "Who writes the pages",
      paragraphs: [
        "Articles are attributed to editorial desks, not to individual people. A desk is an organizational byline covering a subject area. It does not represent a named scientist, and it carries no academic credentials.",
        "We do this because the alternative — inventing plausible-sounding experts, degrees, or reviewer names to satisfy an authorship signal — is a form of fabrication, and it is common enough on science-adjacent sites that readers are right to check. There is no \"Reviewed by Dr —\" line anywhere on this site, because there is no such reviewer.",
        "If a named, credentialed contributor writes for EcoScienceHub in future, they will appear under their own name with their real affiliation, with their consent, and the distinction between their pages and desk-attributed pages will be visible.",
      ],
    },
    {
      heading: "How a claim gets published",
      paragraphs: [
        "Specific quantities — rates, ranges, percentages, dates, counts — are taken from a named source that states them, and the source is cited on the page. Where credible sources disagree, the page reports the disagreement and names the products involved rather than picking a number and presenting it as the number.",
        "Where the evidence is weak, contested, or absent, the page says so. Calibrated language is used deliberately: \"evidence consistently indicates\" is a stronger claim than \"current evidence suggests\", which is stronger than \"early findings point to\". These are not stylistic variations.",
      ],
      bullets: [
        "No invented studies, statistics, institutions, quotations or citations.",
        "No named individual is credited, quoted, or presented as a reviewer unless that is a verified fact.",
        "No claim of certainty the cited evidence does not carry.",
        "No medical, clinical, financial or legal advice. Physiology and pollution pages describe evidence; they do not tell a reader what to do.",
      ],
    },
    {
      heading: "What we do not do for search engines",
      paragraphs: [
        "This site is built to be found, and the technical work that supports that — structured data, canonical URLs, hreflang, internal linking — is real work we do. What we do not do is let those mechanics decide the content.",
      ],
      bullets: [
        "No pages published to fill a keyword slot when an existing page covers the subject better.",
        "No word-count targets. Pages end where the subject ends.",
        "No repeated section templates across pages. Each page is shaped by its own material.",
        "No mechanical anchor-text insertion. Internal links are placed where the linked idea is used, with anchor text that reads as part of the sentence.",
        "No changing a page's modified date unless the content substantively changed. An internal-linking pass is not an update.",
      ],
    },
    {
      heading: "Translations",
      paragraphs: [
        "The English version of an article is the source of truth. A translated page is published only when a full translation exists that preserves the numbers, the sources and the hedging of the original. Where a translation does not exist, the site serves the English text and marks the page as non-indexable in that language rather than presenting a partial or machine-mangled version as a localized page.",
        "Policy and glossary pages are currently English-only for the same reason.",
      ],
    },
    {
      heading: "AI use",
      paragraphs: [
        "Language models are used in the production of this site — for drafting, structuring and checking. That does not change any of the rules above, and it is the reason several of them are enforced by automated validators rather than left to good intentions: unverifiable citation shapes, banned certainty language, placeholder text, duplicate bodies and dead source URLs are checked mechanically before a page ships.",
        "Editorial responsibility for every published page sits with EcoScienceHub, regardless of the tools used to produce it.",
      ],
    },
  ],
};

export const SOURCING_POLICY: PolicyDocument = {
  slug: "sourcing-policy",
  title: "Sourcing policy",
  eyebrow: "Evidence",
  summary:
    "Which sources this site treats as authoritative, how citations are checked, and what happens when a source goes away.",
  updatedDate: "2026-09-02",
  sections: [
    {
      heading: "The source hierarchy",
      paragraphs: [
        "For the factual baseline — what was measured, when, by whom, with what uncertainty — we prefer the institution that produced the measurement or the assessment that synthesised it. For mechanism, nuance and disagreement, we prefer the peer-reviewed literature, with systematic reviews and meta-analyses weighted above single studies.",
        "A single organization is not enough for a substantive article. Every page is expected to rest on more than one independent source, and pages covering contested questions are expected to cite the sides of the disagreement rather than the convenient one.",
      ],
      bullets: [
        "Intergovernmental assessments and agencies: IPCC, IPBES, UNEP, UNESCO, WMO, WHO, FAO, IAEA, UNCCD, Ramsar.",
        "National scientific and environmental agencies: NASA, NOAA, USGS, EPA, NIH and NCBI, NIST, DOE, ESA, Copernicus, the European Environment Agency, and national equivalents.",
        "Peer-reviewed literature, learned-society journals, and curated scientific databases.",
      ],
    },
    {
      heading: "What is not an acceptable source",
      paragraphs: [
        "Encyclopedias, news coverage, press releases, blogs, vendor marketing and AI-generated summaries are not cited as evidence for a scientific claim. They are, at best, a route to the source that actually carries it — and the source is what gets cited.",
      ],
    },
    {
      heading: "Citation checking",
      paragraphs: [
        "Every external URL on the site is checked mechanically. The check distinguishes three outcomes, because treating them the same would be dishonest: a URL that resolves; a URL whose host blocks automated clients but is a known publisher; and a URL that is genuinely gone.",
        "The third case is the one that matters. Scientific web references rot — agencies reorganise, programmes are renamed, and pages are withdrawn. When a cited page disappears we do not silently repoint the link at a plausible substitute. We check whether the replacement actually supports the claim, and if it does not, the claim is rewritten or removed with the source.",
      ],
    },
    {
      heading: "Quotation",
      paragraphs: [
        "We paraphrase and attribute rather than quote. Direct quotation is reserved for cases where the exact wording is the point — a formal definition, a legal instrument, a term of art — and is always tied to a citable source. No quotation on this site is reconstructed from memory.",
      ],
    },
    {
      heading: "Registry",
      paragraphs: [
        "The site maintains a registry of source organizations per subject area, used to flag citations from outside it for editorial review. It is a review trigger, not a whitelist: a citation from a source not in the registry is not automatically wrong, and a citation from one in it is not automatically right for the specific claim.",
      ],
    },
  ],
};

export const CORRECTIONS_POLICY: PolicyDocument = {
  slug: "corrections",
  title: "Corrections and contact",
  eyebrow: "Accountability",
  summary:
    "How to report an error, what we do about it, and how corrections are recorded.",
  updatedDate: "2026-09-02",
  sections: [
    {
      heading: "Reporting an error",
      paragraphs: [
        "If a page states something that is wrong, out of date, or unsupported by the source it cites, tell us. Email info@helperg.com with the page URL and, where possible, the source that shows the correct position. Reports that identify a specific claim and a specific source are actionable immediately; general disagreement with a scientific consensus is not a correction request.",
      ],
    },
    {
      heading: "What happens next",
      paragraphs: [
        "A factual error is corrected on the page. Where the correction changes what the page concludes, the page carries a note describing what changed. Where it is a typographical or link fix that does not change meaning, it is fixed without a note and without changing the page's modified date — because a date change signals editorial revision, and using it for a link repair would be a false freshness signal.",
        "A dead or wrong citation is treated as a factual problem, not a formatting one. If the replacement source does not support the original claim, the claim changes.",
      ],
    },
    {
      heading: "What we will not do",
      paragraphs: [
        "We do not remove accurate, well-sourced material because a party dislikes it. We do not add unsourced claims on request. We do not accept payment, links, or content in exchange for editorial coverage or placement, and no page on this site is sponsored.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "General, editorial and rights enquiries: info@helperg.com. Privacy requests are handled under the terms set out in the privacy policy.",
      ],
    },
  ],
};

export const POLICY_DOCUMENTS: PolicyDocument[] = [
  EDITORIAL_STANDARDS,
  SOURCING_POLICY,
  CORRECTIONS_POLICY,
];

/** Count of registered source organizations, by category. Rendered on the
 *  sourcing policy page so the stated policy and the registry cannot drift. */
export function sourceRegistryStats(): Array<{
  category: CategorySlug;
  entries: number;
  organizations: number;
}> {
  return (Object.keys(SOURCE_REGISTRY) as CategorySlug[]).map((category) => {
    const entries = SOURCE_REGISTRY[category];
    return {
      category,
      entries: entries.length,
      organizations: new Set(entries.map((e) => e.organization)).size,
    };
  });
}

/** Desks in a stable display order: general team first, then by name. */
export function listDesksForDisplay() {
  const all = Object.values(authors);
  const team = all.filter((a) => a.id === "ecosciencehub-editorial-team");
  const rest = all
    .filter((a) => a.id !== "ecosciencehub-editorial-team")
    .sort((a, b) => a.name.localeCompare(b.name));
  return [...team, ...rest];
}

export function isAuthorId(value: string): value is AuthorId {
  return value in authors;
}
