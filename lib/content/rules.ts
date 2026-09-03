/**
 * Numeric thresholds and structural rules shared by templates,
 * generators, and quality checks. Keeping them in one place keeps
 * the rest of the layer free of magic numbers.
 */

export const CONTENT_RULES = {
  /** Minimum word count for a generated topic/subtopic intro. */
  MIN_INTRO_WORDS: 35,
  /** Minimum word count for a generated explanation block. */
  MIN_EXPLANATION_WORDS: 80,
  /** Maximum word count we'll emit for any single generated block. */
  MAX_BLOCK_WORDS: 260,
  /** Required source count for a topic/subtopic methodology block. */
  MIN_SOURCES_TOPIC: 2,
  /** Required source count for an article-level evidence summary. */
  MIN_SOURCES_ARTICLE: 1,
  /** Generic placeholder strings that must never appear in output. */
  FORBIDDEN_PLACEHOLDERS: [
    "lorem ipsum",
    "TBD",
    "TODO",
    "[insert",
    "{{",
    "}}",
  ],
  /**
   * Masking tokens used by the content scripts. These should never reach
   * a file: they mean a script masked a protected region and failed to
   * restore it. The glossary linker shipped `__G16__` into two published
   * headings because its restore pass did not handle nested masks, and
   * nothing would have caught it before a reader did.
   */
  TOOLING_PLACEHOLDERS: [/__G\d+__/, / PH\d+ /],
} as const;

/** Loose word-count helper — splits on whitespace, ignores punctuation. */
export function wordCount(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((w) => /[A-Za-zÀ-ÿ0-9]/.test(w)).length;
}
