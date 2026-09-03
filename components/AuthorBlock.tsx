import Link from "next/link";

import type { Author } from "@/lib/authors";
import {
  DEFAULT_LOCALE,
  getMessages,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type AuthorBlockProps = {
  author: Author;
  /** "byline" sits above the article body; "card" sits at the foot of the page. */
  variant?: "byline" | "card";
  /** Locale of the surrounding page. The desk and standards pages are
   *  English-only, so their hrefs stay /en/ — but the chrome around
   *  them is translated. */
  locale?: Locale;
};

export function AuthorBlock({
  author,
  variant = "card",
  locale = DEFAULT_LOCALE,
}: AuthorBlockProps) {
  const t = translator(getMessages(locale));
  if (variant === "byline") {
    return (
      <div className="flex items-center gap-3 text-sm">
        <Avatar name={author.name} />
        <div>
          <p className="font-medium text-ink">
            <Link
              href={localizedPath(DEFAULT_LOCALE, `/editorial/${author.id}`)}
              className="hover:text-primary-700"
            >
              {author.name}
            </Link>
          </p>
          <p className="text-xs text-ink-subtle">{author.title}</p>
        </div>
      </div>
    );
  }

  return (
    <aside className="mt-12 flex gap-5 rounded-lg border border-ink-line bg-ink-surface p-6">
        <Avatar name={author.name} size="lg" />
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          {t("common.attribution_eyebrow")}
        </p>
        <p className="mt-1 font-serif text-lg font-semibold text-ink">
          <Link
            href={localizedPath(DEFAULT_LOCALE, `/editorial/${author.id}`)}
            className="hover:text-primary-700"
          >
            {author.name}
          </Link>
        </p>
        <p className="text-sm text-ink-muted">{author.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink">{author.bio}</p>
        <p className="mt-3 text-xs leading-relaxed text-ink-subtle">
          {t("common.desk_disclaimer")}{" "}
          <Link
            href={localizedPath(DEFAULT_LOCALE, "/editorial-standards")}
            className="link-quiet"
          >
            {t("common.desk_disclaimer_link")}
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}

function Avatar({
  name,
  size = "md",
}: {
  name: string;
  size?: "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .filter((part) => part.length > 1)
    .slice(-2)
    .map((part) => part[0])
    .join("");

  const dim = size === "lg" ? "h-12 w-12 text-base" : "h-10 w-10 text-sm";

  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center rounded-full bg-primary-100 font-medium text-primary-800 ${dim}`}
    >
      {initials}
    </span>
  );
}
