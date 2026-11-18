/**
 * Cloudflare Worker for ecosciencehub.com.
 *
 * The site is a static export (`next build` → `out/`), served from the Worker's
 * static assets. Locale-prefixed paths never reach this code (see
 * `run_worker_first` in wrangler.jsonc); the Worker only handles:
 *
 *   1. The two form endpoints, whose handlers live in ./api.
 *   2. Locale detection, ported from the former Next middleware: a path without a
 *      known locale prefix is 308-redirected to the same path under the visitor's
 *      preferred locale (`Accept-Language`, falling back to DEFAULT_LOCALE).
 *      Files (anything with an extension), /api, robots.txt and sitemap.xml pass
 *      through untouched.
 */
import { DEFAULT_LOCALE, isLocale } from "../lib/i18n-config";
import { POST as postComment } from "./api/discussions-comment";
import { POST as postNewsletter } from "./api/newsletter";

type Env = { ASSETS: { fetch(request: Request): Promise<Response> } };

const PUBLIC_FILE = /\.[^/]+$/;
const SKIP_PREFIXES = ["/api", "/robots.txt", "/sitemap.xml"];

const API_ROUTES: Record<string, (request: Request) => Promise<Response>> = {
  "/api/newsletter": postNewsletter,
  "/api/discussions/comment": postComment,
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    const handler = API_ROUTES[pathname];
    if (handler) {
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { Allow: "POST" } });
      }
      return handler(request);
    }

    // A root-level .html file (e.g. the Google site-verification file) must answer
    // 200 at its exact URL; the assets layer would 307 it to the extensionless path.
    if (pathname.endsWith(".html")) {
      url.pathname = pathname.slice(0, -".html".length);
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }

    if (
      PUBLIC_FILE.test(pathname) ||
      SKIP_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))
    ) {
      return env.ASSETS.fetch(request);
    }

    const firstSegment = pathname.split("/")[1];
    if (firstSegment && isLocale(firstSegment)) {
      return env.ASSETS.fetch(request);
    }

    const preferred = pickLocale(request.headers.get("accept-language"));
    url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return Response.redirect(url.toString(), 308);
  },
};

function pickLocale(header: string | null): string {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tagRaw, qRaw] = part.trim().split(";");
      const tag = tagRaw.toLowerCase().split("-")[0];
      const q = qRaw && qRaw.startsWith("q=") ? Number(qRaw.slice(2)) : 1;

      return {
        tag,
        q: Number.isFinite(q) ? q : 0,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (isLocale(tag)) return tag;
  }

  return DEFAULT_LOCALE;
}
