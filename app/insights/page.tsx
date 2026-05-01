import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { InsightCard } from "@/components/InsightCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { buildMetadata } from "@/lib/seo";
import { getInsights } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Insights — arguments worth defending",
  description:
    "Sharp, opinionated essays on the structural questions facing ecology, biology, and applied physics. Each piece defends a single, falsifiable claim.",
  path: "/insights",
});

export default async function InsightsIndexPage() {
  const insights = await getInsights();

  return (
    <Layout>
      <header className="border-b border-ink-line bg-gradient-to-b from-accent-50/60 to-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-3 font-serif text-display-lg font-semibold tracking-tight text-ink">
            Arguments worth defending
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Insights are short, structured essays. Each one stakes a single,
            falsifiable claim and defends it. They are written to be argued
            with — clearly, cited, and dated.
          </p>
        </div>
      </header>

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
