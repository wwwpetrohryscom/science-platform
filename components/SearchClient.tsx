"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { search, searchIndexPath, type SearchDoc } from "@/lib/search-core";
import type { Locale } from "@/lib/i18n-config";

/**
 * Client half of the search page.
 *
 * The index is fetched once, on mount, from a static JSON file the CDN
 * serves. Ranking runs in `lib/search-core.ts` — the same module the index
 * builder uses and the same module the tests exercise — so what a
 * reader sees is what `npm run search:test` checks.
 *
 * The query lives in the URL (`?q=`) so a result set can be linked and
 * the back button behaves. It is written with replaceState rather than
 * a router push: typing should not fill the history stack with one
 * entry per keystroke.
 */
type Labels = {
  placeholder: string;
  label: string;
  loading: string;
  empty: string;
  prompt: string;
  count: string;
  countOne: string;
  kinds: Record<SearchDoc["kind"], string>;
};

export function SearchClient({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Labels;
}) {
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [failed, setFailed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(searchIndexPath(locale))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { docs: SearchDoc[] }) => {
        if (!cancelled) setDocs(data.docs);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  // The initial query comes from the URL here rather than from a
  // server prop: a page that reads searchParams on the server is a
  // dynamic route, and this one is prerendered for all six locales.
  useEffect(() => {
    const q = new URL(window.location.href).searchParams.get("q");
    if (q) setQuery(q);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, [query]);

  const results = useMemo(
    () => (docs && query.trim() ? search(docs, query) : []),
    [docs, query],
  );

  const trimmed = query.trim();

  return (
    <div>
      <label htmlFor="q" className="sr-only">
        {labels.label}
      </label>
      <input
        ref={inputRef}
        id="q"
        type="search"
        value={query}
        autoComplete="off"
        onChange={(e) => setQuery(e.target.value)}
        placeholder={labels.placeholder}
        className="w-full rounded-lg border border-ink-line bg-white px-4 py-3 text-lg text-ink outline-none focus:border-primary-700"
      />

      <div aria-live="polite" className="mt-6 text-sm text-ink-muted">
        {!trimmed
          ? labels.prompt
          : docs === null && !failed
            ? labels.loading
            : results.length === 0
              ? labels.empty
              : results.length === 1
                ? labels.countOne
                : labels.count.replace("{count}", String(results.length))}
      </div>

      {results.length > 0 && (
        <ul className="mt-6 divide-y divide-ink-line border-t border-ink-line">
          {results.map((doc) => (
            <li key={doc.url} className="py-5">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                {labels.kinds[doc.kind]}
              </div>
              <Link
                href={doc.url}
                className="mt-1 block font-serif text-lg font-semibold text-ink hover:text-primary-700"
              >
                {doc.title}
              </Link>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {doc.excerpt}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
