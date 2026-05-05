/**
 * Quality checks for AI-assisted copy.
 *
 * Generators run their output through `auditBlock` before returning,
 * and the page layer can call the same helpers when assembling
 * structured sections. The aim is to catch the failure modes that
 * spam-grade SEO content ships with — banned phrases, fake citations,
 * empty placeholders, missing sources, exaggerated certainty — at
 * generation time rather than at review time.
 *
 * Audit failures don't crash the build; they downgrade the offending
 * block to a transparent fallback so the page stays useful and
 * indexable while the underlying data is fixed.
 */

import { BANNED_PHRASES, GUARDED_PHRASES } from "./tone";
import { CONTENT_RULES, wordCount } from "./rules";

export type QualityIssue = {
  /** "block" identifies which generated block failed. */
  block: string;
  rule:
    | "min-length"
    | "max-length"
    | "banned-phrase"
    | "guarded-phrase"
    | "placeholder"
    | "missing-source"
    | "fake-citation"
    | "empty";
  detail: string;
};

export type AuditResult = {
  ok: boolean;
  issues: QualityIssue[];
};

export type AuditOptions = {
  block: string;
  /** Override the default min word count for this block. */
  minWords?: number;
  /** When true, allows guarded phrases (caller has confirmed evidence). */
  allowGuarded?: boolean;
};

/**
 * Audit a generated text block. Returns the list of detected issues
 * — empty list means the block passes.
 */
export function auditBlock(text: string, opts: AuditOptions): AuditResult {
  const issues: QualityIssue[] = [];
  const trimmed = text.trim();

  if (trimmed.length === 0) {
    issues.push({ block: opts.block, rule: "empty", detail: "block is empty" });
    return { ok: false, issues };
  }

  const min = opts.minWords ?? CONTENT_RULES.MIN_INTRO_WORDS;
  const wc = wordCount(trimmed);
  if (wc < min) {
    issues.push({
      block: opts.block,
      rule: "min-length",
      detail: `${wc} words (min ${min})`,
    });
  }
  if (wc > CONTENT_RULES.MAX_BLOCK_WORDS) {
    issues.push({
      block: opts.block,
      rule: "max-length",
      detail: `${wc} words (max ${CONTENT_RULES.MAX_BLOCK_WORDS})`,
    });
  }

  const lower = trimmed.toLowerCase();

  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) {
      issues.push({
        block: opts.block,
        rule: "banned-phrase",
        detail: `contains "${phrase}"`,
      });
    }
  }

  if (!opts.allowGuarded) {
    for (const phrase of GUARDED_PHRASES) {
      if (lower.includes(phrase)) {
        issues.push({
          block: opts.block,
          rule: "guarded-phrase",
          detail: `contains "${phrase}" without confirmed evidence`,
        });
      }
    }
  }

  for (const placeholder of CONTENT_RULES.FORBIDDEN_PLACEHOLDERS) {
    if (lower.includes(placeholder.toLowerCase())) {
      issues.push({
        block: opts.block,
        rule: "placeholder",
        detail: `contains placeholder "${placeholder}"`,
      });
    }
  }

  return { ok: issues.length === 0, issues };
}

/**
 * Test whether a topic/subtopic has enough curated sources to render
 * a methodology block. Below the threshold, generators substitute a
 * transparent fallback explaining that the registry is being expanded.
 */
export function hasEnoughSources(count: number, kind: "topic" | "article"): boolean {
  const min =
    kind === "topic"
      ? CONTENT_RULES.MIN_SOURCES_TOPIC
      : CONTENT_RULES.MIN_SOURCES_ARTICLE;
  return count >= min;
}

/**
 * Detect citation-shaped strings that don't resolve to a URL — the
 * usual shape of fabricated references ("Smith et al., 2023").
 *
 * Returns matches found in raw markdown that look like academic
 * citations but are NOT inside a [text](url) markdown link or an
 * autolink. Used by the validator on AI-touched bodies.
 */
export function detectFakeCitations(markdown: string): string[] {
  const stripped = markdown
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/<https?:\/\/[^>]+>/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]+`/g, " ");
  const out: string[] = [];
  const re = /\b([A-Z][a-z]+(?:\s+et\s+al\.?)?,\s*(?:19|20)\d{2}[a-z]?)\b/g;
  for (const m of stripped.matchAll(re)) {
    out.push(m[1]);
  }
  return Array.from(new Set(out));
}

/**
 * Build a transparent fallback string for a missing data condition.
 * Generators call this whenever required input is unavailable so the
 * page never falls back to invented content.
 */
export function fallbackForMissing(reason: string): string {
  return `Editorial note: ${reason}. This section will expand as the underlying data is added. No invented details are shown here.`;
}

/**
 * Returns the audit result against required input fields. Caller
 * declares which fields it needs; missing/empty ones become issues.
 */
export function requireFields<T extends Record<string, unknown>>(
  input: T,
  required: ReadonlyArray<keyof T>,
  block: string,
): AuditResult {
  const issues: QualityIssue[] = [];
  for (const key of required) {
    const value = input[key];
    if (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "") ||
      (Array.isArray(value) && value.length === 0)
    ) {
      issues.push({
        block,
        rule: "missing-source",
        detail: `required field "${String(key)}" is missing`,
      });
    }
  }
  return { ok: issues.length === 0, issues };
}

/* ----------------------------------------------------------------
   Spam-shape detectors
   --------------------------------------------------------------
   These are deliberately conservative — false positives on
   editorial copy are worse than missing the occasional spam
   pattern, because every issue surfaces as a build-time warning
   rather than a hard failure.
---------------------------------------------------------------- */

/** Tokens stripped before frequency analysis. */
const STOPWORDS = new Set([
  "the","a","an","and","or","but","of","in","on","at","to","for","with",
  "by","is","are","was","were","be","been","being","this","that","these",
  "those","it","its","as","from","into","than","then","so","such","not",
  "no","yes","we","you","they","i","he","she","them","us","our","your",
  "their","his","her","my","me","do","does","did","have","has","had",
  "will","would","can","could","may","might","also","because","while",
  "where","when","what","which","who","whom","why","how",
]);

const TOKEN_RE = /[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ0-9'-]{2,}/g;

/**
 * Detect keyword-stuffing — a single non-stopword term occupying more
 * than `maxRatio` of all content tokens. Default 7% is calibrated for
 * focused scientific copy where the topic term legitimately recurs
 * (an article on "DNA" will say "DNA" often). Real spam typically
 * runs 8–12%; legitimate explanatory writing peaks around 5–6%.
 */
export function detectKeywordStuffing(
  text: string,
  opts: { minTokens?: number; maxRatio?: number } = {},
): Array<{ term: string; ratio: number; count: number }> {
  const minTokens = opts.minTokens ?? 80;
  const maxRatio = opts.maxRatio ?? 0.07;
  const tokens =
    text.toLowerCase().match(TOKEN_RE)?.filter((t) => !STOPWORDS.has(t)) ?? [];
  if (tokens.length < minTokens) return [];
  const counts = new Map<string, number>();
  for (const t of tokens) counts.set(t, (counts.get(t) ?? 0) + 1);
  const offenders: Array<{ term: string; ratio: number; count: number }> = [];
  for (const [term, count] of counts) {
    const ratio = count / tokens.length;
    if (ratio > maxRatio && count >= 5) {
      offenders.push({ term, ratio, count });
    }
  }
  return offenders.sort((a, b) => b.ratio - a.ratio);
}

/**
 * Detect repeated phrases (n-grams ≥ `minN` words) that occur more
 * than `maxRepeats` times. Short forms ("for example", "in this
 * article") still slip through this — by design; we only flag
 * substantial duplicate phrasing. Default 8-gram threshold catches
 * boilerplate without flagging the natural recurrence of subject
 * names in explanatory science writing.
 */
export function detectRepeatedPhrases(
  text: string,
  opts: { minN?: number; maxRepeats?: number } = {},
): Array<{ phrase: string; count: number }> {
  const minN = opts.minN ?? 8;
  const maxRepeats = opts.maxRepeats ?? 2;
  const tokens = text.toLowerCase().match(TOKEN_RE) ?? [];
  if (tokens.length < minN * 2) return [];
  const counts = new Map<string, number>();
  for (let i = 0; i <= tokens.length - minN; i++) {
    const phrase = tokens.slice(i, i + minN).join(" ");
    counts.set(phrase, (counts.get(phrase) ?? 0) + 1);
  }
  const out: Array<{ phrase: string; count: number }> = [];
  for (const [phrase, count] of counts) {
    if (count > maxRepeats) out.push({ phrase, count });
  }
  return out.sort((a, b) => b.count - a.count);
}

/**
 * Compare two texts on token overlap — used to flag near-duplicate
 * intros across topic/subtopic pages. Returns a Jaccard-style ratio
 * in [0,1]; >0.7 generally means "the same paragraph reworded".
 */
export function similarityRatio(a: string, b: string): number {
  const setA = new Set((a.toLowerCase().match(TOKEN_RE) ?? []).filter((t) => !STOPWORDS.has(t)));
  const setB = new Set((b.toLowerCase().match(TOKEN_RE) ?? []).filter((t) => !STOPWORDS.has(t)));
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersect = 0;
  for (const t of setA) if (setB.has(t)) intersect += 1;
  const union = setA.size + setB.size - intersect;
  return union === 0 ? 0 : intersect / union;
}

/**
 * Outbound-link density check. Articles with > `maxRatio` link-words
 * relative to body words (default 10%) read as link farms to most
 * crawlers. Real link-stuffed pages typically run 15–30%; well-cited
 * scientific copy peaks around 6–8% on a citation-dense paragraph.
 * Returns the offending ratio when over threshold, or `null`.
 */
export function detectLinkSpam(
  markdown: string,
  opts: { maxRatio?: number } = {},
): { ratio: number; linkWords: number; bodyWords: number } | null {
  const maxRatio = opts.maxRatio ?? 0.1;
  const linkText: string[] = [];
  for (const m of markdown.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    linkText.push(m[1]);
  }
  const linkWords = linkText.reduce(
    (acc, t) => acc + (t.match(TOKEN_RE)?.length ?? 0),
    0,
  );
  const bodyWords = (markdown.match(TOKEN_RE) ?? []).length;
  if (bodyWords < 100) return null;
  const ratio = linkWords / bodyWords;
  return ratio > maxRatio ? { ratio, linkWords, bodyWords } : null;
}

/**
 * Convenience wrapper — runs the spam-shape detectors against a body
 * of text and returns a list of `QualityIssue`s ready to merge into
 * an `AuditResult`. Designed for use by the corpus validator.
 */
export function auditSpamShape(
  text: string,
  block: string,
): QualityIssue[] {
  const issues: QualityIssue[] = [];
  const stuffing = detectKeywordStuffing(text);
  for (const s of stuffing) {
    issues.push({
      block,
      rule: "banned-phrase",
      detail: `keyword stuffing on "${s.term}" (${(s.ratio * 100).toFixed(1)}%, ${s.count}×)`,
    });
  }
  const repeats = detectRepeatedPhrases(text);
  for (const r of repeats.slice(0, 3)) {
    issues.push({
      block,
      rule: "banned-phrase",
      detail: `repeated phrase "${r.phrase}" (${r.count}×)`,
    });
  }
  const linkSpam = detectLinkSpam(text);
  if (linkSpam) {
    issues.push({
      block,
      rule: "banned-phrase",
      detail: `link density ${(linkSpam.ratio * 100).toFixed(1)}% exceeds threshold`,
    });
  }
  return issues;
}
