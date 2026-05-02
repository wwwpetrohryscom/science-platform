"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import {
  LOCALES,
  localeMeta,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n-config";

type LanguageSwitcherProps = {
  /** The locale currently rendering. */
  currentLocale: Locale;
  /** Accessible label, already translated. */
  label: string;
  /**
   * Locales for which the *current page* has a translation. When the
   * user switches to a locale outside this set, we link to that
   * locale's homepage instead of preserving the path — preserving it
   * would either 404 or surface an unintended fallback.
   *
   * Pass `LOCALES` (the default) for structural pages — homepage,
   * category hubs, subtopic hubs — where every locale always has the
   * page at the same path.
   */
  availableLocales?: readonly Locale[];
};

/**
 * Header language switcher.
 *
 * Implementation notes:
 *   - Client component because it reads `usePathname()` and toggles
 *     a dropdown. Plain links are progressive-enhancement friendly:
 *     the underlying anchors work without JS.
 *   - The "preserve current path" rule is honored only when the
 *     target locale has a translation of the current page. Otherwise
 *     we fall back to the locale's homepage so the user never lands
 *     on a missing or fallback-flagged URL.
 */
export function LanguageSwitcher({
  currentLocale,
  label,
  availableLocales = LOCALES,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const { path } = stripLocalePrefix(pathname);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open ? "true" : "false"}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-md border border-ink-line bg-white px-2.5 py-1.5 text-xs font-medium uppercase tracking-wide text-ink-muted hover:border-primary-300 hover:text-ink"
      >
        <Globe />
        <span>{currentLocale}</span>
        <Chevron />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-full z-50 mt-1 min-w-[10rem] overflow-hidden rounded-md border border-ink-line bg-white shadow-card"
        >
          {LOCALES.map((loc) => {
            const isCurrent = loc === currentLocale;
            const hasTranslation = availableLocales.includes(loc);
            const target = hasTranslation
              ? localizedPath(loc, path)
              : localizedPath(loc, "/");

            return (
              <li key={loc} role="option" aria-selected={isCurrent ? "true" : "false"}>
                <Link
                  href={target}
                  hrefLang={localeMeta[loc].htmlLang}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-ink-surface ${
                    isCurrent ? "font-semibold text-primary-700" : "text-ink"
                  }`}
                >
                  <span>{localeMeta[loc].nativeName}</span>
                  <span className="text-[10px] uppercase tracking-wide text-ink-subtle">
                    {loc}
                    {!hasTranslation && !isCurrent ? " ↗" : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Globe() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3 w-3"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
