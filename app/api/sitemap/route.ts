import { buildSitemapEntries, renderSitemapXml } from "@/lib/sitemap";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const entries = await buildSitemapEntries();
  const xml = renderSitemapXml(entries);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
