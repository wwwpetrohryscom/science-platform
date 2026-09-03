#!/usr/bin/env tsx
/**
 * Link validator.
 *
 * Two independent checks, because they fail for different reasons and
 * one should not mask the other:
 *
 *   INTERNAL — every `/xx/...` link in body markdown must resolve to a
 *   route this site actually generates. Cheap, deterministic, always on.
 *
 *   EXTERNAL — every cited URL must still exist. Network-bound, so it
 *   is opt-in (`--external`) and cached.
 *
 * The external check is deliberately three-valued. A checker that
 * collapses "the host blocks scripted clients" into "dead" produces a
 * wall of false failures (Wiley, Science, Nature, GBIF, IRENA, Ramsar,
 * UNEP, CDC and PNAS all return 403 to curl), and an editor who learns
 * to ignore the output has lost the gate entirely. The states are:
 *
 *   ok        2xx, or a redirect that lands somewhere equivalent
 *   drifted   2xx but the final URL is materially different from the
 *             cited one — the citation may no longer point at the page
 *             that supports the claim, so a human must look
 *   blocked   403/405/406/412/429/503 — bot protection, not absence.
 *             Reported, never fatal.
 *   dead      404/410, DNS failure, or connection refused. Fatal.
 *
 * Only `dead` fails the build, because only `dead` is a claim the site
 * makes that the web no longer supports.
 *
 * Usage:
 *   tsx scripts/validate-links.ts               # internal only
 *   tsx scripts/validate-links.ts --external    # + network check
 *   tsx scripts/validate-links.ts --external --refresh   # ignore cache
 *   tsx scripts/validate-links.ts --json
 */
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";

import { walkAllContent, PROJECT_ROOT, LOCALES } from "./_lib";
import { categories } from "../lib/categories";
import { GLOSSARY } from "../lib/glossary";
import { SOURCE_REGISTRY } from "../lib/sources";
import { POLICY_DOCUMENTS } from "../lib/editorial";
import { authors } from "../lib/authors";
import { getDiscussions } from "../lib/discussions";
import { loadRegistry } from "../lib/evidence/index";

const CACHE_FILE = path.join(PROJECT_ROOT, ".linkcache.json");
const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 14; // 14 days
const CONCURRENCY = 8;
const TIMEOUT_MS = 30_000;

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

type LinkState = "ok" | "drifted" | "blocked" | "dead";

type CheckResult = {
  url: string;
  state: LinkState;
  status: number | null;
  finalUrl?: string;
  detail?: string;
  checkedAt: number;
};

type Cache = Record<string, CheckResult>;

/* ---------------------------------------------------------------
   Internal link resolution
   ---------------------------------------------------------------
   Build the set of paths this site generates, then assert every
   internal link in body markdown is a member of it.
--------------------------------------------------------------- */

async function buildRouteSet(): Promise<Set<string>> {
  const routes = new Set<string>();
  const add = (p: string) => routes.add(p);

  const walked = await walkAllContent();

  for (const locale of LOCALES) {
    add(`/${locale}`);
    add(`/${locale}/insights`);
    add(`/${locale}/discussions`);
    add(`/${locale}/privacy-policy`);
    add(`/${locale}/cookie-policy`);
    add(`/${locale}/terms-of-use`);
    for (const cat of categories) {
      add(`/${locale}/${cat.slug}`);
      for (const sub of cat.subtopics) add(`/${locale}/${cat.slug}/${sub.slug}`);
    }
    for (const d of await getDiscussions()) {
      add(`/${locale}/discussions/${d.slug}`);
    }
    // Articles: every locale renders every EN slug (missing translations
    // fall back to EN), so an EN slug is a valid target in any locale.
    for (const w of walked) {
      if (w.locale !== "en") continue;
      if (w.kind === "insight") add(`/${locale}/insight/${w.slug}`);
      else add(`/${locale}/${w.category}/${w.subtopic}/${w.slug}`);
    }
  }

  // English-only routes.
  add("/en/glossary");
  for (const g of GLOSSARY) add(`/en/glossary/${g.slug}`);
  add("/en/editorial");
  for (const id of Object.keys(authors)) add(`/en/editorial/${id}`);
  for (const doc of POLICY_DOCUMENTS) add(`/${"en"}/${doc.slug}`);

  return routes;
}

const INTERNAL_LINK_RE = /\[[^\]]*\]\((\/[a-z]{2}\/[^)#?\s]*)/g;

/** Discussion `relatedArticleSlug` must name a real article. A dangling
 *  pointer renders as a silently missing section rather than an error,
 *  which is exactly the kind of gap nobody notices. */
async function checkDiscussionRefs(): Promise<Array<{ slug: string; ref: string }>> {
  const walked = await walkAllContent();
  const slugs = new Set(walked.filter((w) => w.locale === "en").map((w) => w.slug));
  const bad: Array<{ slug: string; ref: string }> = [];
  for (const d of await getDiscussions()) {
    if (d.relatedArticleSlug && !slugs.has(d.relatedArticleSlug)) {
      bad.push({ slug: d.slug, ref: d.relatedArticleSlug });
    }
  }
  return bad;
}

async function checkInternal(): Promise<{
  issues: Array<{ filepath: string; link: string }>;
  total: number;
  routes: number;
}> {
  const routes = await buildRouteSet();
  const walked = await walkAllContent();
  const issues: Array<{ filepath: string; link: string }> = [];
  let total = 0;

  for (const w of walked) {
    for (const m of w.body.matchAll(INTERNAL_LINK_RE)) {
      const raw = m[1];
      const link = raw.length > 1 ? raw.replace(/\/$/, "") : raw;
      total += 1;
      if (!routes.has(link)) issues.push({ filepath: w.filepath, link });
    }
  }
  return { issues, total, routes: routes.size };
}

/* ---------------------------------------------------------------
   External link checking
--------------------------------------------------------------- */

/** Hosts observed to reject scripted clients. Used only to annotate a
 *  `blocked` result — the classification itself comes from the status
 *  code, so an unknown host that 403s is still `blocked`, not `dead`. */
const KNOWN_BOT_BLOCKERS = [
  "wiley.com",
  "science.org",
  "nature.com",
  "cell.com",
  "pnas.org",
  "gbif.org",
  "irena.org",
  "ramsar.org",
  "unep.org",
  "cdc.gov",
  "nih.gov",
  "cochranelibrary.com",
  "annualreviews.org",
  "royalsocietypublishing.org",
  "iucnredlist.org",
  "conservationevidence.com",
  "oceandecade.org",
  "mdpi.com",
  "journals.aps.org",
  "usda.gov",
  "springer.com",
  "sciencedirect.com",
  "tandfonline.com",
  "oup.com",
  "ametsoc.org",
];

/**
 * Normalise for the "did the redirect take us somewhere else" test.
 *
 * Trailing slashes, /index.html, http→https and `www.` are not drift.
 * Neither are the two interstitials publishers put in front of a page
 * that is otherwise exactly where the citation said it was:
 *
 *   - Nature routes every article through
 *     `idp.nature.com/transit?redirect_uri=<the article>&code=<uuid>`,
 *     a per-request cookie-consent token. Reporting each of those as
 *     drift produced 40 lines of noise in a 65-line report, which is
 *     how a reader learns to skip the whole section.
 *   - EU and UN sites redirect a bare URL to a language selector
 *     (`/select-language?destination=…`, `/en`, `/home`).
 *
 * Both are unwrapped to the destination the citation actually names.
 * A different path after that is genuine drift and gets reported.
 */
function normalizeForDrift(u: string): string {
  try {
    let url = new URL(u);
    // Unwrap a consent/redirect interstitial back to its target.
    const wrapped = url.searchParams.get("redirect_uri") ?? url.searchParams.get("destination");
    if (wrapped) {
      try {
        url = new URL(wrapped, url.origin);
      } catch {
        /* leave as-is */
      }
    }
    const p = url.pathname
      .replace(/\/index\.html?$/, "/")
      .replace(/\/(en|home)$/, "")
      .replace(/\/+$/, "");
    return `${url.hostname.replace(/^www\./, "")}${p}`.toLowerCase();
  } catch {
    return u.toLowerCase();
  }
}

function classify(status: number, url: string, finalUrl: string): CheckResult {
  const base: Omit<CheckResult, "state"> = {
    url,
    status,
    finalUrl,
    checkedAt: Date.now(),
  };
  if (status === 404 || status === 410) {
    return { ...base, state: "dead", detail: `HTTP ${status}` };
  }
  if ([401, 403, 405, 406, 412, 429, 503].includes(status)) {
    const host = safeHost(url) ?? "";
    const known = KNOWN_BOT_BLOCKERS.some(
      (h) => host === h || host.endsWith(`.${h}`),
    );
    return {
      ...base,
      state: "blocked",
      detail: `HTTP ${status}${known ? " (known bot protection)" : ""}`,
    };
  }
  if (status >= 200 && status < 400) {
    // A DOI resolving to its publisher is the DOI working, not drift —
    // the whole point of the identifier is that the destination may move.
    const isDoi = /(^|\.)doi\.org$/.test(safeHost(url) ?? "");
    // Some hosts answer a scripted client with a bot-challenge page
    // instead of the article. That is a block, and it is already
    // reported as one; calling it drift as well doubles the noise.
    const challenged =
      /validate\.perfdrive\.com|error=cookies_not_supported|\/cdn-cgi\/challenge/.test(
        finalUrl,
      );
    if (challenged) {
      return { ...base, state: "blocked", detail: "bot-challenge interstitial" };
    }
    if (!isDoi && normalizeForDrift(url) !== normalizeForDrift(finalUrl)) {
      return { ...base, state: "drifted", detail: `redirects to ${finalUrl}` };
    }
    return { ...base, state: "ok" };
  }
  // 5xx other than 503: the host is broken right now, not the citation.
  return { ...base, state: "blocked", detail: `HTTP ${status}` };
}

function safeHost(u: string): string | null {
  try {
    return new URL(u).hostname.toLowerCase();
  } catch {
    return null;
  }
}

async function checkOne(url: string): Promise<CheckResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": UA,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Upgrade-Insecure-Requests": "1",
      },
    });
    // Drain minimally; we only need status + final URL.
    try {
      await res.body?.cancel();
    } catch {
      /* ignore */
    }
    return classify(res.status, url, res.url || url);
  } catch (err) {
    // undici reports every transport failure as `TypeError: fetch failed`
    // and hides the real reason in `err.cause` (sometimes nested). Reading
    // only `err.message` classified a retired domain as "blocked" — the
    // gate kept running while it had stopped detecting anything. Walk the
    // cause chain and collect every message before deciding.
    const messages: string[] = [];
    let cur: unknown = err;
    for (let depth = 0; cur instanceof Error && depth < 5; depth += 1) {
      messages.push(cur.message);
      const code = (cur as NodeJS.ErrnoException).code;
      if (code) messages.push(code);
      cur = (cur as { cause?: unknown }).cause;
    }
    if (messages.length === 0) messages.push(String(err));
    const message = messages.join(" | ");

    // A timeout means we could not tell — that is not evidence of death.
    const timedOut = /AbortError|The operation was aborted|TimeoutError/i.test(
      message,
    );
    // DNS failure or a refused connection means the resource is gone.
    const gone =
      !timedOut &&
      /ENOTFOUND|EAI_AGAIN|ECONNREFUSED|ERR_NAME_NOT_RESOLVED|getaddrinfo|Name or service not known/i.test(
        message,
      );
    return {
      url,
      state: gone ? "dead" : "blocked",
      status: null,
      detail: gone
        ? `DNS/connection failure: ${message}`
        : `unreachable: ${message}`,
      checkedAt: Date.now(),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function mapLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    for (;;) {
      const i = cursor++;
      if (i >= items.length) return;
      out[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return out;
}

const EXTERNAL_URL_RE = /\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g;

type UrlUse = { url: string; where: string };

async function collectExternalUrls(): Promise<UrlUse[]> {
  const uses: UrlUse[] = [];
  const walked = await walkAllContent();
  for (const w of walked) {
    const body = w.body
      .replace(/```[\s\S]*?```/g, "")
      .replace(/`[^`\n]+`/g, "");
    for (const m of body.matchAll(EXTERNAL_URL_RE)) {
      uses.push({
        url: m[1],
        where: path.relative(PROJECT_ROOT, w.filepath),
      });
    }
  }
  for (const g of GLOSSARY) {
    for (const s of g.relatedSources) {
      uses.push({ url: s.url, where: `lib/glossary.ts:${g.slug}` });
    }
  }
  for (const [cat, entries] of Object.entries(SOURCE_REGISTRY)) {
    for (const e of entries) {
      uses.push({ url: e.url, where: `lib/sources.ts:${cat}` });
    }
  }
  return uses;
}

function loadCache(refresh: boolean): Cache {
  if (refresh || !fs.existsSync(CACHE_FILE)) return {};
  try {
    const raw = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8")) as Cache;
    const now = Date.now();
    const fresh: Cache = {};
    for (const [k, v] of Object.entries(raw)) {
      // Never cache a `dead` verdict for long — hosts come back, and a
      // stale `dead` would block a build after the problem was fixed.
      const ttl = v.state === "dead" ? CACHE_TTL_MS / 14 : CACHE_TTL_MS;
      if (now - v.checkedAt < ttl) fresh[k] = v;
    }
    return fresh;
  } catch {
    return {};
  }
}

async function main() {
  const json = process.argv.includes("--json");
  const external = process.argv.includes("--external");
  const refresh = process.argv.includes("--refresh");

  const internal = await checkInternal();
  const badDiscussionRefs = await checkDiscussionRefs();

  // A citation the evidence registry does not know about means the
  // registry is stale relative to the corpus. It is the condition under
  // which the source-health report silently stops covering a source, so
  // it is fatal rather than advisory.
  const registryUrls = new Set(loadRegistry().records.map((r) => r.url));
  const unregistered: Array<{ url: string; where: string[] }> = [];
  {
    // Citations only. lib/sources.ts holds organisation landing pages
    // used for the authority check, not references — requiring those in
    // the evidence registry would conflate "bodies we trust" with
    // "pages an article cites", which are different lists.
    const uses = (await collectExternalUrls()).filter(
      (u) => !u.where.startsWith("lib/sources.ts"),
    );
    const byUrl = new Map<string, string[]>();
    for (const u of uses) byUrl.set(u.url, [...(byUrl.get(u.url) ?? []), u.where]);
    for (const [url, where] of byUrl) {
      if (!registryUrls.has(url)) unregistered.push({ url, where: [...new Set(where)] });
    }
  }

  let externalResults: Array<CheckResult & { where: string[] }> = [];
  if (external) {
    const uses = await collectExternalUrls();
    const byUrl = new Map<string, string[]>();
    for (const u of uses) {
      byUrl.set(u.url, [...(byUrl.get(u.url) ?? []), u.where]);
    }
    const cache = loadCache(refresh);
    const urls = [...byUrl.keys()];
    const toCheck = urls.filter((u) => !cache[u]);
    if (!json) {
      console.log(
        `checking ${urls.length} distinct external URLs (${urls.length - toCheck.length} cached)…`,
      );
    }
    const checked = await mapLimit(toCheck, CONCURRENCY, checkOne);
    for (const r of checked) cache[r.url] = r;
    await fsp.writeFile(CACHE_FILE, JSON.stringify(cache, null, 1), "utf8");
    externalResults = urls.map((u) => ({
      ...cache[u],
      where: [...new Set(byUrl.get(u) ?? [])],
    }));
  }

  const dead = externalResults.filter((r) => r.state === "dead");
  const drifted = externalResults.filter((r) => r.state === "drifted");
  const blocked = externalResults.filter((r) => r.state === "blocked");

  if (json) {
    console.log(
      JSON.stringify(
        {
          internal,
          discussionRefs: badDiscussionRefs,
          unregisteredSources: unregistered,
          external: externalResults,
          dead,
          drifted,
          blocked,
        },
        null,
        2,
      ),
    );
    process.exit(
      internal.issues.length > 0 ||
        dead.length > 0 ||
        badDiscussionRefs.length > 0 ||
        unregistered.length > 0
        ? 1
        : 0,
    );
  }

  for (const issue of internal.issues) {
    console.log(
      `✗ [internal-link] ${path.relative(PROJECT_ROOT, issue.filepath)} — ${issue.link} does not resolve to a generated route`,
    );
  }
  for (const u of unregistered) {
    console.log(
      `✗ [unregistered-source] ${u.url} — cited but absent from the evidence registry; run npm run evidence:build`,
    );
    for (const w of u.where.slice(0, 3)) console.log(`    cited in ${w}`);
  }
  for (const b of badDiscussionRefs) {
    console.log(
      `✗ [discussion-ref] discussions/${b.slug} — relatedArticleSlug "${b.ref}" is not an article`,
    );
  }
  for (const r of dead) {
    console.log(`✗ [dead-source] ${r.url} — ${r.detail}`);
    for (const w of r.where) console.log(`    cited in ${w}`);
  }
  for (const r of drifted) {
    console.log(`⚠ [source-drift] ${r.url} → ${r.finalUrl}`);
    for (const w of r.where) console.log(`    cited in ${w}`);
  }

  console.log(
    `\ninternal: ${internal.total} links across ${internal.routes} routes · ${internal.issues.length} unresolved`,
  );
  console.log(`registry: ${unregistered.length} cited source(s) not in the evidence registry`);
  if (external) {
    console.log(
      `external: ${externalResults.length} URLs · ${dead.length} dead · ${drifted.length} drifted · ${blocked.length} blocked-or-unreachable (not fatal)`,
    );
  }

  if (
    internal.issues.length > 0 ||
    dead.length > 0 ||
    badDiscussionRefs.length > 0 ||
    unregistered.length > 0
  ) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
