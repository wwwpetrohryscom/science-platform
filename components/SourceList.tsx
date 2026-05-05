import type { SourceEntry } from "@/lib/sources";

type Props = {
  sources: ReadonlyArray<SourceEntry>;
  heading: string;
  description?: string;
  /** Optional cap — defaults to all entries. */
  limit?: number;
};

/**
 * Renders the curated source registry for a topic. Server-side
 * only — every link is a real `<a>` so crawlers and screen readers
 * see them without JavaScript. Sources are listed in registry
 * order; we don't shuffle.
 */
export function SourceList({ sources, heading, description, limit }: Props) {
  const items = limit ? sources.slice(0, limit) : sources;
  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="generated-sources-heading"
      className="mt-8 rounded-md border border-ink-line bg-white p-6"
    >
      <h2
        id="generated-sources-heading"
        className="font-serif text-xl font-semibold text-ink"
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((s) => (
          <li key={s.url} className="flex flex-col">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-strong"
            >
              {s.name}
            </a>
            <span className="text-xs text-ink-subtle">
              {s.organization} · {s.type}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
