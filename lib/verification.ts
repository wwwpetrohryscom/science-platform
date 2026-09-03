/**
 * Verification ledger.
 *
 * Records the outcome of an *independent* second-pass check on an
 * article: someone other than the author reading each load-bearing
 * claim against the source that is cited for it, and recording what
 * happened.
 *
 * The distinction this layer exists to make is between "the citation
 * URL resolves" and "the cited page says what the sentence claims".
 * The first is a link check and already has a validator; the second is
 * the only one that makes a claim trustworthy, and it cannot be
 * automated. What can be automated is knowing which articles have had
 * it done and which have not — which is what this ledger is for.
 *
 * Ledger files live in /data/verification/batches/<batch>.json, one per
 * review batch, so reviews can run concurrently without contending for
 * a single file.
 *
 * A `verified` status is a statement that a human-directed reviewer
 * checked the claims listed and found the sources support them. It is
 * NOT a quality score, a peer-review badge, or a confidence rating, and
 * nothing in the UI may present it as one.
 */
import fs from "node:fs";
import path from "node:path";

/** What happened to a specific claim during review. */
export type Disposition =
  /** The cited source states the claim as written. */
  | "verified"
  /** The claim was wrong and was changed to what the source supports. */
  | "corrected"
  /** The claim outran its source and was hedged or scoped down. */
  | "qualified"
  /** No source supported it; the claim was cut. */
  | "removed"
  /** A stronger or more current source replaced the original. */
  | "resourced";

export type Finding = {
  /** The claim as it appeared, short enough to locate in the text. */
  claim: string;
  /** The source actually consulted, by URL or identifier. */
  sourceChecked: string;
  disposition: Disposition;
  /** Why. Required for anything other than `verified`. */
  note?: string;
};

/** Overall outcome for one article. */
export type ArticleReviewStatus =
  /** Every claim checked was supported; nothing changed. */
  | "clean"
  /** Problems were found and fixed in the article. */
  | "amended"
  /** Something is wrong that the reviewer could not resolve. */
  | "needs-editor";

export type ArticleReview = {
  slug: string;
  /** Repo-relative path, so the ledger can be checked against the tree. */
  path: string;
  status: ArticleReviewStatus;
  /** Number of load-bearing claims the reviewer checked against a source. */
  claimsChecked: number;
  /** Every claim that was not simply verified, plus any that were spot-checked. */
  findings: Finding[];
  /** Anything the reviewer could not settle, in plain words. */
  openQuestions?: string[];
};

export type BatchReview = {
  batchId: string;
  /** ISO date the review was carried out. */
  reviewedDate: string;
  /**
   * How the review was performed. Deliberately not a person's name:
   * this is an editorial process record, not a credential.
   */
  method: string;
  articles: ArticleReview[];
};

const LEDGER_ROOT = path.join(process.cwd(), "data", "verification", "batches");

let cache: BatchReview[] | null = null;

export function loadLedger(): BatchReview[] {
  if (cache) return cache;
  if (!fs.existsSync(LEDGER_ROOT)) return (cache = []);
  const out: BatchReview[] = [];
  for (const f of fs.readdirSync(LEDGER_ROOT)) {
    if (!f.endsWith(".json")) continue;
    try {
      out.push(
        JSON.parse(
          fs.readFileSync(path.join(LEDGER_ROOT, f), "utf8"),
        ) as BatchReview,
      );
    } catch {
      // A malformed ledger file is reported by the validator, not here —
      // silently dropping it would understate coverage, which is the one
      // direction this module must never fail in.
      out.push({
        batchId: f.replace(/\.json$/, ""),
        reviewedDate: "",
        method: "UNPARSEABLE",
        articles: [],
      });
    }
  }
  return (cache = out);
}

/** slug -> review, for the article page and the coverage validator. */
export function reviewsBySlug(): Map<string, ArticleReview & { batchId: string; reviewedDate: string }> {
  const map = new Map<string, ArticleReview & { batchId: string; reviewedDate: string }>();
  for (const batch of loadLedger()) {
    for (const a of batch.articles) {
      map.set(a.slug, { ...a, batchId: batch.batchId, reviewedDate: batch.reviewedDate });
    }
  }
  return map;
}

export function getReview(slug: string) {
  return reviewsBySlug().get(slug);
}

export type LedgerSummary = {
  batches: number;
  articlesReviewed: number;
  byStatus: Record<ArticleReviewStatus, number>;
  byDisposition: Record<Disposition, number>;
  claimsChecked: number;
  openQuestions: number;
};

export function summarise(): LedgerSummary {
  const byStatus: Record<ArticleReviewStatus, number> = {
    clean: 0,
    amended: 0,
    "needs-editor": 0,
  };
  const byDisposition: Record<Disposition, number> = {
    verified: 0,
    corrected: 0,
    qualified: 0,
    removed: 0,
    resourced: 0,
  };
  let articles = 0;
  let claims = 0;
  let open = 0;
  for (const batch of loadLedger()) {
    for (const a of batch.articles) {
      articles += 1;
      claims += a.claimsChecked ?? 0;
      if (a.status in byStatus) byStatus[a.status] += 1;
      open += a.openQuestions?.length ?? 0;
      for (const f of a.findings ?? []) {
        if (f.disposition in byDisposition) byDisposition[f.disposition] += 1;
      }
    }
  }
  return {
    batches: loadLedger().length,
    articlesReviewed: articles,
    byStatus,
    byDisposition,
    claimsChecked: claims,
    openQuestions: open,
  };
}
