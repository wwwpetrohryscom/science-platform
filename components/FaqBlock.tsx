import type { FaqItem } from "@/lib/content/faqs";

type FaqBlockProps = {
  /** Visible heading text. */
  heading: string;
  /** Optional intro line displayed below the heading. */
  description?: string;
  items: FaqItem[];
};

/**
 * Server-rendered FAQ block.
 *
 * Uses native <details>/<summary> so the content is visible to crawlers
 * and accessible without JS — and so the on-page FAQ matches whatever
 * FAQPage JSON-LD the route emits alongside it.
 */
export function FaqBlock({ heading, description, items }: FaqBlockProps) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="container-page mt-20 max-w-3xl">
      <h2
        id="faq-heading"
        className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl"
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-ink-muted">{description}</p>
      )}
      <dl className="mt-6 divide-y divide-ink-line border-y border-ink-line">
        {items.map((item) => (
          <div key={item.question} className="py-4">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <dt className="font-serif text-base font-semibold text-ink md:text-lg">
                  {item.question}
                </dt>
                <span
                  aria-hidden
                  className="mt-1 text-ink-subtle transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                {item.answer}
              </dd>
            </details>
          </div>
        ))}
      </dl>
    </section>
  );
}
