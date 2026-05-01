import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { InsightCard } from "@/components/InsightCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { buildMetadata } from "@/lib/seo";
import { getAllInsights } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Insights — arguments worth defending",
  description:
    "Sharp, opinionated essays on the structural questions facing ecology, biology, and applied physics. Each piece defends a single, falsifiable claim.",
  path: "/insights",
});

export default async function InsightsIndexPage() {
  const insights = await getAllInsights();

  return (
    <Layout>
      <PageHeading
        eyebrow="Insights"
        title="Arguments worth defending"
        description="Insights are short, structured essays. Each one stakes a single, falsifiable claim and defends it. They are written to be argued with — clearly, cited, and dated."
        accent="accent"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="container-page mt-14">
        {insights.length === 0 ? (
          <p className="text-ink-muted">No insights published yet.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        )}
      </section>

      <div className="mt-24">
        <NewsletterBlock />
      </div>
    </Layout>
  );
}
