type TocItem = {
  id: string;
  heading: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
        On this page
      </p>
      <ol className="space-y-2 border-l border-ink-line pl-4">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="link-quiet flex gap-3 leading-snug"
            >
              <span className="tabular-nums text-ink-subtle">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{item.heading}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
