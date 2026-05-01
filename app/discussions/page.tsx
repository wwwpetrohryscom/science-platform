import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { DiscussionCard } from "@/components/DiscussionCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { buildMetadata } from "@/lib/seo";
import { getDiscussions } from "@/lib/discussions";

export const metadata: Metadata = buildMetadata({
  title: "Discussions — expert-led, moderated conversations",
  description:
    "Controlled discussions on the open questions in ecology, biology, and applied physics. Each thread is framed by a domain expert and moderated for substance.",
  path: "/discussions",
});

export default async function DiscussionsIndexPage() {
  const discussions = await getDiscussions();

  return (
    <Layout>
      <PageHeading
        eyebrow="Discussions"
        title="Expert-led, moderated conversations"
        description="We don't run a forum. We run threads — each one framed by a domain expert, opened to verified specialists, and moderated for substance."
        accent="primary"
        crumbs={[{ label: "Home", href: "/" }]}
      />

      <section className="container-page mt-14">
        {discussions.length === 0 ? (
          <p className="text-ink-muted">No active discussions right now.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {discussions.map((discussion) => (
              <DiscussionCard
                key={discussion.slug}
                discussion={discussion}
              />
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
