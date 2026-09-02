/**
 * Source-registry accessor for the hub and article pages.
 *
 * This module used to hold a layer of prose generators — topic intros,
 * subtopic explanations, per-article "research summaries", concept
 * notes and an "uncertainty note". They were removed, for three
 * reasons, all of which the editorial standards forbid:
 *
 *   1. The uncertainty note asserted a calibrated confidence level
 *      ("current evidence suggests") chosen by a seeded template from
 *      the citation count, not by an editor who had read the evidence.
 *      A fabricated calibration is worse than none, and this one shipped
 *      on every article page.
 *   2. The intro block restated the excerpt immediately below it, and
 *      the concept block turned the first frontmatter tag into a
 *      sentence. Both are padding.
 *   3. All of it was composed in English and rendered unchanged on
 *      every localized page.
 *
 * What replaced them is shorter and true: counts measured from the page
 * and sentences held in the message bundles, so every locale gets the
 * same statement in its own language. `lib/content/templates.ts` and
 * `lib/content/internal-links.ts` went with them.
 */
import { getSourcesForCategory, type SourceEntry } from "@/lib/sources";
import type { CategorySlug } from "@/lib/categories";

/** The curated registry for a subject area, in registry order. */
export function listSourcesForTopic(
  category: CategorySlug,
): ReadonlyArray<SourceEntry> {
  return getSourcesForCategory(category);
}
