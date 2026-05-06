import { buildSitemapEntries, renderSitemapXml } from "@/lib/sitemap";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const entries = await buildSitemapEntries();
  const xml = renderSitemapXml(entries);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
