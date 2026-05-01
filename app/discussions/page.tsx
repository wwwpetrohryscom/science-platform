import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { CommentsThread } from "@/components/CommentsThread";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { categoryMeta, buildMetadata } from "@/lib/seo";
import { formatDate, getDiscussions } from "@/lib/content";

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
      <header className="border-b border-ink-line bg-gradient-to-b from-primary-50/40 to-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow">Discussions</p>
          <h1 className="mt-3 font-serif text-display-lg font-semibold tracking-tight text-ink">
            Expert-led, moderated conversations
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            We don&apos;t run a forum. We run threads — each one framed by a
            domain expert, opened to verified specialists, and moderated for
            substance. Citations are encouraged. Heat is not.
          </p>
        </div>
      </header>

      <section className="container-page mt-12 space-y-12">
        {discussions.length === 0 && (
          <p className="text-ink-muted">No active discussions right now.</p>
        )}

        {discussions.map((discussion) => {
          const cat = categoryMeta[discussion.category];
          return (
            <article
              key={discussion.slug}
              id={discussion.slug}
              className="card scroll-mt-24 p-6 md:p-8"
            >
              <header>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="eyebrow">{cat.label}</span>
                  <span
                    className={
                      discussion.status === "open"
                        ? "rounded-sm bg-primary-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-primary-800"
                        : "rounded-sm bg-ink-surface px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-ink-muted"
                    }
                  >
                    {discussion.status}
                  </span>
                </div>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {discussion.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted">
                  {discussion.topic}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-subtle">
                  <span>
                    Moderated by{" "}
                    <span className="font-medium text-ink">
                      {discussion.moderator.name}
                    </span>
                    , {discussion.moderator.title}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{discussion.participantCount} participants</span>
                  <span aria-hidden>·</span>
                  <span>Updated {formatDate(discussion.updatedDate)}</span>
                </div>
              </header>

              <CommentsThread
                comments={discussion.comments}
                acceptingNew={discussion.status === "open"}
              />
            </article>
          );
        })}
      </section>

      <div className="mt-24">
        <NewsletterBlock />
      </div>
    </Layout>
  );
}
