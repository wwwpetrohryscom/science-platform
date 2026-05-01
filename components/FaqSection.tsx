import type { FaqItem } from "@/lib/content";

type FaqSectionProps = {
  items: FaqItem[];
};

/**
 * Accessible FAQ using native <details>. No JS needed.
 * Pair with FAQPage JSON-LD (see `lib/seo.ts`) so search engines
 * can lift these into rich snippets.
 */
export function FaqSection({ items }: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="faq-heading"
      className="mt-16 border-t border-ink-line pt-12"
    >
      <h2
        id="faq-heading"
        className="font-serif text-2xl font-semibold tracking-tight md:text-3xl"
      >
        Frequently asked
      </h2>

      <ul className="mt-6 divide-y divide-ink-line">
        {items.map((item, idx) => (
          <li key={idx}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-ink">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="mt-1 text-primary-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.answer}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
