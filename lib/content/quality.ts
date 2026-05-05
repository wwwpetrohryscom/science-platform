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
