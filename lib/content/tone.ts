/**
 * Language guardrails for the editorial validators.
 *
 * This module used to also hold the phrasing machinery for the prose
 * generators — a seeded variant picker, a set of "calm openers", and a
 * map from a qualitative confidence level to a hedge. Those went with
 * the generators: choosing a reader-facing certainty claim from a
 * template is a fabricated calibration, and rotating phrasing by seed to
 * make pages look different from each other is a spam pattern, not an
 * editorial one.
 *
 * What remains is what the validator enforces on human-written copy.
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

/**
 * Calibrated language the editorial standards ask writers to use. These
 * are documentation for authors and for the authoring brief, not a
 * lookup a generator selects from at render time.
 *
 *   high        evidence consistently indicates
 *   medium      current evidence suggests
 *   low         early findings point to
 *   contested   the evidence is mixed on
 *   insufficient  available data are too limited to conclude
 */
export const CERTAINTY_LANGUAGE: readonly string[] = [
  "evidence consistently indicates",
  "current evidence suggests",
  "early findings point to",
  "the evidence is mixed on",
  "available data are too limited to conclude",
];
