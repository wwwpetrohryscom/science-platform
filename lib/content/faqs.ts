/**
 * FAQ data for topic and subtopic hubs.
 *
 * Editorial rules:
 * - Every question/answer pair must be answerable from existing
 *   article content on the site or from a clearly named authority.
 * - Answers are short (<= ~80 words), calm, and non-clickbait.
 * - No medical advice. No unsupported "best X" claims.
 * - Visible on page wherever FAQPage JSON-LD is emitted.
 *
 * Keyed on `topic:<slug>` and `subtopic:<categorySlug>:<subtopicSlug>`
 * so hubs can request their own FAQ set without ambiguity.
 *
 * The items live in data/faqs/faqs.json. They were inline here while the
 * registry covered a handful of subtopics; a registry meant to cover all
 * twenty-four is data.
 *
 * Localizations live beside them in data/faqs/localized.json, keyed by
 * locale and then by the same key. A locale that has not localized a set
 * gets an empty array rather than the English one: the FAQ block and its
 * FAQPage markup are the same content, and a page that renders English
 * questions under a French URL while telling a crawler they are French
 * is making a claim about itself that is not true.
 */
import fs from "node:fs";
import path from "node:path";

import type { CategorySlug } from "@/lib/categories";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqRegistry = Record<string, FaqItem[]>;

function topicKey(category: CategorySlug): string {
  return `topic:${category}`;
}

function subtopicKey(category: CategorySlug, subtopic: string): string {
  return `subtopic:${category}:${subtopic}`;
}

const FAQ_PATH = path.join(process.cwd(), "data", "faqs", "faqs.json");
const LOCALIZED_PATH = path.join(
  process.cwd(),
  "data",
  "faqs",
  "localized.json",
);

const REGISTRY: FaqRegistry = JSON.parse(
  fs.readFileSync(FAQ_PATH, "utf8"),
) as FaqRegistry;

const LOCALIZED: Record<string, FaqRegistry> = fs.existsSync(LOCALIZED_PATH)
  ? (JSON.parse(fs.readFileSync(LOCALIZED_PATH, "utf8")) as Record<
      string,
      FaqRegistry
    >)
  : {};

const DEFAULT = "en";

function forKey(key: string, locale: string): FaqItem[] {
  if (locale === DEFAULT) return REGISTRY[key] ?? [];
  return LOCALIZED[locale]?.[key] ?? [];
}

export function getTopicFaqs(
  category: CategorySlug,
  locale: string = DEFAULT,
): FaqItem[] {
  return forKey(topicKey(category), locale);
}

export function getSubtopicFaqs(
  category: CategorySlug,
  subtopic: string,
  locale: string = DEFAULT,
): FaqItem[] {
  return forKey(subtopicKey(category, subtopic), locale);
}

/** Every key the English registry defines. */
export function faqKeys(): string[] {
  return Object.keys(REGISTRY);
}

/** The English items for a key, for validators and localization tools. */
export function englishFaqs(key: string): FaqItem[] {
  return REGISTRY[key] ?? [];
}

/** Localized sets, keyed by locale then by FAQ key. */
export function allLocalizedFaqs(): Record<string, FaqRegistry> {
  return LOCALIZED;
}
