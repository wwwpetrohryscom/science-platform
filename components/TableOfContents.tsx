import type { TocItem } from "@/lib/content";
import { getMessages, translator, type Locale } from "@/lib/i18n";

type TableOfContentsProps = {
  locale: Locale;
  items: TocItem[];
};

export function TableOfContents({ locale, items }: TableOfContentsProps) {
  if (items.length === 0) return null;
  const t = translator(getMessages(locale));

  // Number only top-level (depth 2) entries; render depth 3 as nested.
  let topIdx = 0;
  return (
    <nav aria-label={t("article.in_hierarchy")} className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
        {t("article.in_hierarchy")}
      </p>
      <ol className="space-y-1.5 border-l border-ink-line pl-4">
        {items.map((item) => {
          const isTop = item.depth === 2;
          if (isTop) topIdx++;
          return (
            <li
              key={item.id}
              className={isTop ? "" : "ml-4 text-ink-subtle"}
            >
              <a
                href={`#${item.id}`}
                className="link-quiet flex gap-3 leading-snug"
              >
                {isTop && (
                  <span className="tabular-nums text-ink-subtle">
                    {String(topIdx).padStart(2, "0")}
                  </span>
                )}
                <span>{item.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
