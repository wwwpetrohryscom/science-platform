/**
 * Tone system for AI-assisted scientific copy.
 *
 * Defines the language guardrails every generator must respect:
 * factual, calm, uncertainty-aware, evidence-first. The rules here
 * are enforced by `quality.ts` at generation time and surface as
 * warnings to the validator/build pipeline so drift is visible.
 *
 * No medical, financial, or unconditional advice phrasing is allowed
 * through this layer. Where evidence is limited the tone helpers
 * downgrade certainty rather than invent it.
 */

/** Phrases that imply unsupported certainty or sensationalism. */
export const BANNED_PHRASES: readonly string[] = [
  "proves that",
  "proven to",
  "miracle",
  "miraculous",
  "best ever",
  "world's best",
  "100% safe",
  "guaranteed to",
  "guarantees",
  "scientifically proven",
  "shocking truth",
  "you must",
  "you should always",
  "doctors hate",
  "everyone agrees",
  "all scientists agree",
  "settled science",
  "cure-all",
  "panacea",
];

/** Words allowed only when the body explicitly cites a strong source. */
export const GUARDED_PHRASES: readonly string[] = [
  "breakthrough",
  "revolutionary",
  "game-changing",
  "unprecedented",
];

/** Calibrated hedges to use in place of overstated certainty. */
export const CERTAINTY_HEDGES = {
  high: "evidence consistently indicates",
  medium: "current evidence suggests",
  low: "early findings point to",
  contested: "the evidence is mixed on",
  insufficient: "available data are too limited to conclude",
} as const;

export type CertaintyLevel = keyof typeof CERTAINTY_HEDGES;

/** Map a qualitative input to a calibrated hedge. */
export function hedge(level: CertaintyLevel): string {
  return CERTAINTY_HEDGES[level];
}

/**
 * Replace the hard "proves" / "miracle" register with calibrated
 * language. Conservative — only swaps obvious hits, never rewrites.
 */
export function softenCertainty(text: string): string {
  let out = text;
  out = out.replace(/\bproves\s+that\b/gi, "evidence indicates that");
  out = out.replace(/\bproven\s+to\b/gi, "shown to");
  out = out.replace(/\bguaranteed\s+to\b/gi, "expected to");
  out = out.replace(/\bmiracle\b/gi, "notable");
  return out;
}

/**
 * Returns a positive but factual framing prefix. Variants exist so
 * we don't open every section the same way.
 */
export function calmOpener(seed: string): string {
  const options = [
    "The short version:",
    "What the evidence shows:",
    "In plain terms:",
    "The current picture:",
    "Where the science stands:",
  ];
  return pickBySeed(seed, options);
}

/** Deterministic pick — same seed always picks the same option. */
export function pickBySeed<T>(seed: string, options: readonly T[]): T {
  if (options.length === 0) {
    throw new Error("pickBySeed: options must not be empty.");
  }
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  const index = Math.abs(h) % options.length;
  return options[index];
}
