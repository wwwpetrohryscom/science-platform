import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import { CommentsThread } from "@/components/CommentsThread";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { formatDate, getArticleBySlug } from "@/lib/content";
import {
  getDiscussion,
  listDiscussionSlugs,
} from "@/lib/discussions";
import {
  LOCALES,
  getMessages,
  isLocale,
  localizedPath,
  translator,
} from "@/lib/i18n";

type Props = { params: { locale: string; topic: string } };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    listDiscussionSlugs().map((topic) => ({ locale, topic })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const discussion = await getDiscussion(params.topic);
  if (!discussion) {
    return buildMetadata({
      title: "Discussion not found",
      description: "The requested discussion could not be found.",
      path: `/discussions/${params.topic}`,
      locale: params.locale,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: discussion.title,
    description: discussion.topic,
    path: `/discussions/${discussion.slug}`,
    locale: params.locale,
    type: "article",
    publishedDate: discussion.publishedDate,
    updatedDate: discussion.updatedDate,
    authors: [discussion.moderator.name],
    tags: discussion.tags,
  });
}

export default async function DiscussionTopicPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = translator(getMessages(locale));

  const discussion = await getDiscussion(params.topic);
  if (!discussion) notFound();

  const categoryLabel = t(`categories.${discussion.category}.label`);
  const relatedArticle = discussion.relatedArticleSlug
    ? await getArticleBySlug(locale, discussion.relatedArticleSlug)
    : undefined;

  const breadcrumbLd = breadcrumbJsonLd([
    { name: t("nav.home"), path: localizedPath(locale, "/") },
    { name: t("discussions.title"), path: localizedPath(locale, "/discussions") },
    {
      name: discussion.title,
      path: localizedPath(locale, `/discussions/${discussion.slug}`),
    },
  ]);

  return (
    <Layout locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageHeading
        eyebrow={t("discussions.category_eyebrow", { category: categoryLabel })}
        title={discussion.title}
        description={discussion.topic}
        accent={discussion.category === "physics" ? "accent" : "primary"}
        crumbs={[
          { label: t("nav.home"), href: localizedPath(locale, "/") },
          { label: t("discussions.title"), href: localizedPath(locale, "/discussions") },
        ]}
      />

      <section className="container-page mt-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
              <span>
                {t("discussions.moderated_by")}{" "}
                <span className="font-medium text-ink">
                  {discussion.moderator.name}
                </span>
                , {discussion.moderator.title}
              </span>
              <span aria-hidden>·</span>
              <span>
                {t("discussions.participants", {
                  count: discussion.participantCount,
                })}
              </span>
              <span aria-hidden>·</span>
              <span>
                {t("article.updated")} {formatDate(discussion.updatedDate, locale)}
              </span>
              <span aria-hidden>·</span>
              <span
                className={
                  discussion.status === "open"
                    ? "rounded-sm bg-primary-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-primary-800"
                    : "rounded-sm bg-ink-surface px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-muted"
                }
              >
                {t(`discussions.status.${discussion.status}`)}
              </span>
            </div>

            <CommentsThread
              locale={locale}
              comments={discussion.comments}
              acceptingNew={discussion.status === "open"}
            />
          </div>

          <aside className="space-y-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                {t("discussions.about_heading")}
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                {t("discussions.about_body")}
              </p>
            </div>

            {relatedArticle && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("discussions.related_article")}
                </p>
                <Link
                  href={relatedArticle.url}
                  className="block rounded-md border border-ink-line bg-white p-4 transition-colors hover:border-primary-300"
                >
                  <p className="font-serif text-base font-semibold leading-snug text-ink">
                    {relatedArticle.title}
                  </p>
                  <p className="mt-1 text-xs text-ink-subtle">
                    {t("article.min_read", { minutes: relatedArticle.readingTime })}{" "}
                    · {t("article.updated")}{" "}
                    {formatDate(relatedArticle.updatedDate, locale)}
                  </p>
                </Link>
              </div>
            )}

            {discussion.tags.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  {t("article.tagged")}
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
        <NewsletterBlock locale={locale} />
      </div>
    </Layout>
  );
}
