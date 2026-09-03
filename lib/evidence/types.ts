/**
 * Evidence registry types.
 *
 * A citation in an article is a string. The same source cited from
 * fourteen articles is fourteen strings, and nothing in the corpus knows
 * they are the same thing. That makes three ordinary jobs impossible:
 * finding every page that depends on a source when it moves, telling a
 * reader how much independent evidence a claim rests on, and noticing
 * that a figure came from a product that has since been updated.
 *
 * This layer gives each distinct source one record and one identifier,
 * and records what each article uses it for. It is metadata and
 * relationships only — no source text is copied here beyond the title
 * the citation already displays.
 */

export type SourceType =
  | "government"
  | "intergovernmental"
  | "peer-reviewed"
  | "systematic-review"
  | "meta-analysis"
  | "university"
  | "scientific-dataset"
  | "standards-body"
  /**
   * National academies, national laboratories and named research
   * collaborations. Added beyond the original list because forcing the
   * National Academies or a weather-attribution collaboration into
   * "government" or "university" would misdescribe who published, and a
   * source type that misdescribes the publisher is worse than one more
   * category.
   */
  | "research-institute"
  | "other";

/**
 * How the source type was decided. Kept on the record because an
 * inferred classification and a checked one are different claims, and a
 * registry that hides the difference invites the inference to be quoted
 * as fact.
 */
export type Provenance = "curated" | "inferred-host" | "inferred-title" | "unclassified";

export type VerificationStatus =
  /** A reviewer read this source against a claim that cites it. */
  | "checked"
  /** Reachable, but no claim-level check has been recorded. */
  | "unchecked"
  /** The host refuses scripted clients; liveness could not be confirmed. */
  | "blocked"
  /** Confirmed gone. Nothing should cite it. */
  | "dead";

/** One article's use of one source. */
export type EvidenceUse = {
  /** Article slug that cites it. */
  slug: string;
  /** `<category>/<subtopic>`, or "insights". */
  section: string;
  /**
   * What the citation says this source supports, taken verbatim from
   * the note the author wrote after the link. This is the claim -> evidence
   * relationship, recorded where the author already stated it rather than
   * inferred by machine from prose.
   */
  supports: string;
};

export type EvidenceRecord = {
  /** Stable, derived from the normalised URL. Survives regeneration. */
  evidenceId: string;
  /** Title as cited. */
  title: string;
  /** Publisher or issuing body, as cited. */
  organization: string;
  url: string;
  /** Registrable host, `www.` stripped. */
  host: string;
  doi?: string;
  sourceType: SourceType;
  sourceTypeProvenance: Provenance;
  /** Subject areas of the articles that cite it. */
  topics: string[];
  /** Every article use, with what it is cited for. */
  usedBy: EvidenceUse[];
  /**
   * True for products that are republished on a schedule, so a figure
   * taken from them is true as of a date rather than permanently.
   * Curated: it is a judgement about the product, not a property of the URL.
   */
  isLiveDataset: boolean;
  updateFrequency?: string;
  /** ISO date the registry last confirmed the URL resolved. */
  accessedDate?: string;
  verificationStatus: VerificationStatus;
  notes?: string;
};

export type EvidenceRegistry = {
  /** ISO date the registry was last built from the corpus. */
  generatedDate: string;
  records: EvidenceRecord[];
};

/** Hand-maintained enrichment, keyed by evidenceId. Wins over inference. */
export type CuratedEvidence = Partial<
  Pick<
    EvidenceRecord,
    "sourceType" | "isLiveDataset" | "updateFrequency" | "doi" | "notes" | "organization"
  >
>;
