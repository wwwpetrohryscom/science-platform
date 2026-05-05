/**
 * Reusable, contextual internal-link copy.
 *
 * Generators and pages use these helpers when they need a short,
 * topic-aware call-to-action. The actual hrefs are built by the
 * caller via `localizedPath` from `@/lib/i18n` — these helpers only
 * own the *copy* so wording stays consistent across pages and the
 * site doesn't develop the "click here / read more" anti-pattern.
 *
 * Variants are deterministic: same `seed` always picks the same
 * phrasing so a topic page is stable across rebuilds, but different
 * topics read differently.
 */

import { pickBySeed } from "./tone";

export function exploreTopicCopy(topic: string, seed = topic): string {
  return pickBySeed(seed, [
    `Explore research on ${topic}`,
    `Browse ${topic} writing`,
    `See all ${topic} articles`,
  ]);
}

export function readMoreSubtopicCopy(subtopic: string, seed = subtopic): string {
  return pickBySeed(seed, [
    `Read more about ${subtopic}`,
    `More on ${subtopic}`,
    `Continue reading on ${subtopic}`,
  ]);
}

export function evidenceForConceptCopy(concept: string, seed = concept): string {
  return pickBySeed(seed, [
    `View evidence related to ${concept}`,
    `See the studies behind ${concept}`,
    `Look up sources on ${concept}`,
  ]);
}

export function compareStudiesCopy(topic: string, seed = topic): string {
  return pickBySeed(seed, [
    `Compare studies about ${topic}`,
    `See how ${topic} research stacks up`,
    `Browse comparative work on ${topic}`,
  ]);
}

export function relatedInSubtopicCopy(subtopic: string, seed = subtopic): string {
  return pickBySeed(seed, [
    `See related articles in ${subtopic}`,
    `More writing in ${subtopic}`,
    `Other pieces on ${subtopic}`,
  ]);
}

export function reviewSourcesForArticleCopy(title: string, seed = title): string {
  return pickBySeed(seed, [
    `Review sources for "${title}"`,
    `Check the citations in "${title}"`,
    `See where "${title}" gets its evidence`,
  ]);
}

export function pillarEntryCopy(subtopic: string, seed = subtopic): string {
  return pickBySeed(seed, [
    `Start with the ${subtopic} pillar`,
    `Read the ${subtopic} foundation article`,
    `Open the pillar article in ${subtopic}`,
  ]);
}
