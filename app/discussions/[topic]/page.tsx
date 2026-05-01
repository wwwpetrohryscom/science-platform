import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { CommentsThread } from "@/components/CommentsThread";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import {
  buildMetadata,
  breadcrumbJsonLd,
  categoryMeta,
} from "@/lib/seo";
import { formatDate, getArticleBySlug } from "@/lib/content";
import {
  getDiscussion,
  listDiscussionSlugs,
} from "@/lib/discussions";

type Props = { params: { topic: string } };

export function generateStaticParams() {
  return listDiscussionSlugs().map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const discussion = await getDiscussion(params.topic);
  if (!discussion) {
    return buildMetadata({
      title: "Discussion not found",
      description: "The requested discussion could not be found.",
      path: `/discussions/${params.topic}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: discussion.title,
    description: discussion.topic,
    path: `/discussions/${discussion.slug}`,
    type: "article",
    publishedDate: discussion.publishedDate,
    updatedDate: discussion.updatedDate,
    authors: [discussion.moderator.name],
    tags: discussion.tags,
  });
}

export default async function DiscussionTopicPage({ params }: Props) {
  const discussion = await getDiscussion(params.topic);
  if (!discussion) notFound();

  const cat = categoryMeta[discussion.category];
  const relatedArticle = discussion.relatedArticleSlug
    ? await getArticleBySlug(discussion.relatedArticleSlug)
    : undefined;

  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Discussions", path: "/discussions" },
    { name: discussion.title, path: `/discussions/${discussion.slug}` },
  ]);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageHeading
        eyebrow={`Discussion · ${cat.label}`}
        title={discussion.title}
        description={discussion.topic}
        accent={discussion.category === "physics" ? "accent" : "primary"}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Discussions", href: "/discussions" },
        ]}
      />

      <section className="container-page mt-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
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
              <span aria-hidden>·</span>
              <span
                className={
                  discussion.status === "open"
                    ? "rounded-sm bg-primary-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary-800"
                    : "rounded-sm bg-ink-surface px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-muted"
                }
              >
                {discussion.status}
              </span>
            </div>

            <CommentsThread
              comments={discussion.comments}
              acceptingNew={discussion.status === "open"}
            />
          </div>

          <aside className="space-y-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                About this discussion
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Discussions on this site are framed by domain experts and
                moderated for substance. Verified-expert comments carry a
                badge; all other submissions are reviewed before they appear.
              </p>
            </div>

            {relatedArticle && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  Related article
                </p>
                <Link
                  href={relatedArticle.url}
                  className="block rounded-md border border-ink-line bg-white p-4 transition-colors hover:border-primary-300"
                >
                  <p className="font-serif text-base font-semibold leading-snug text-ink">
                    {relatedArticle.title}
                  </p>
                  <p className="mt-1 text-xs text-ink-subtle">
                    {relatedArticle.readingTime} min read · Updated{" "}
                    {formatDate(relatedArticle.updatedDate)}
                  </p>
                </Link>
              </div>
            )}

            {discussion.tags.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  Tagged
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {discussion.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm bg-ink-surface px-2 py-0.5 text-[11px] uppercase tracking-wide text-ink-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <div className="mt-24">
        <NewsletterBlock />
      </div>
    </Layout>
  );
}
