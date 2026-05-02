import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n-config";

const PUBLIC_FILE = /\.[^/]+$/;
const SKIP_PREFIXES = ["/api", "/_next", "/sitemap.xml", "/robots.txt"];

/**
 * Locale-detection middleware.
 *
 * Behaviors:
 *   1. Pass through requests for assets, API routes, and SEO files
 *      so they hit Next's metadata routes directly.
 *   2. If the URL already begins with a known locale prefix, do nothing.
 *   3. Otherwise, detect the preferred locale from `Accept-Language`
 *      (falling back to `DEFAULT_LOCALE`) and 308-redirect to the
 *      same path under that locale.
 *
 * The rewrite-vs-redirect choice matters for SEO: we redirect (308)
 * so the canonical URL always carries the locale prefix. Bookmarks
 * and inbound links land on a stable, locale-tagged URL.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    SKIP_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  ) {
    return NextResponse.next();
  }

  // /<locale>/anything → pass through unchanged.
  const firstSegment = pathname.split("/")[1];
  if (firstSegment && isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const preferred = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

function pickLocale(header: string | null): string {
  if (!header) return DEFAULT_LOCALE;
  // `Accept-Language` example: "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7".
  // We compare on the language tag prefix (before "-") so both "pt-BR"
  // and "pt-PT" resolve to "pt".
  const ranked = header
    .split(",")
    .map((part) => {
      const [tagRaw, qRaw] = part.trim().split(";");
      const tag = tagRaw.toLowerCase().split("-")[0];
      const q = qRaw && qRaw.startsWith("q=") ? Number(qRaw.slice(2)) : 1;
      return { tag, q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (isLocale(tag)) return tag;
  }
  return DEFAULT_LOCALE;
}

export const config = {
  // Match all paths except those skipped above. The matcher is
  // permissive; the function does the precise filtering. Excluding
  // `/_next` here keeps the middleware off Next's internal asset URLs.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
