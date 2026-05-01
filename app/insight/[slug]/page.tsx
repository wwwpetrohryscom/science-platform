import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Layout } from "@/components/Layout";
import { ArticleBody } from "@/components/ArticleBody";
import { AuthorBlock } from "@/components/AuthorBlock";
import { NewsletterBlock } from "@/components/NewsletterBlock";

import {
  formatDate,
  getInsightBySlug,
  getInsights,
} from "@/lib/content";
import { articleJsonLd, buildMetadata, categoryMeta } from "@/lib/seo";

type InsightPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const all = await getInsights();
  return all.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const insight = await getInsightBySlug(params.slug);
  if (!insight) {
    return buildMetadata({
      title: "Insight not found",
      description: "The requested insight could not be found.",
      path: `/insight/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insight/${insight.slug}`,
    type: "article",
    publishedDate: insight.publishedDate,
    updatedDate: insight.updatedDate,
    authors: [insight.author.name],
    tags: insight.tags,
  });
}

export default async function InsightPage({ params }: InsightPageProps) {
  const insight = await getInsightBySlug(params.slug);
  if (!insight) notFound();

  const cat = categoryMeta[insight.category];

  const ld = articleJsonLd({
    title: insight.title,
    description: insight.excerpt,
    path: `/insight/${insight.slug}`,
    publishedDate: insight.publishedDate,
    updatedDate: insight.updatedDate,
    authorName: insight.author.name,
  });

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <article className="container-page py-12 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-ink-subtle">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary-700">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/insights" className="hover:text-primary-700">
                Insights
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="truncate text-ink-muted">{insight.title}</li>
          </ol>
        </nav>

        <header className="mt-6 max-w-4xl">
          <p className="eyebrow">Insight · {cat.label}</p>
          <h1 className="mt-3 font-serif text-display-xl font-semibold tracking-tight text-ink">
            {insight.title}
          </h1>

          {/* Argument: the load-bearing claim, surfaced above the fold. */}
          <p className="mt-6 max-w-3xl border-l-4 border-accent-400 pl-6 font-serif text-xl italic leading-relaxed text-ink md:text-2xl">
            {insight.argument}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-ink-line py-4">
            <AuthorBlock author={insight.author} variant="byline" />
            <div className="text-xs text-ink-subtle">
              <p>
                <span className="font-medium text-ink">Published</span>{" "}
                <time dateTime={insight.publishedDate}>
                  {formatDate(insight.publishedDate)}
                </time>
              </p>
              <p className="mt-0.5">
                <span className="font-medium text-ink">Updated</span>{" "}
                <time dateTime={insight.updatedDate}>
                  {formatDate(insight.updatedDate)}
                </time>
                <span aria-hidden> · </span>
                {insight.readingTime} min read
              </p>
            </div>
          </div>
        </header>

        <div className="mt-10 max-w-reader">
          <p className="text-lg leading-relaxed text-ink-muted">
            {insight.excerpt}
          </p>

          <div className="mt-8">
            <ArticleBody sections={insight.body} />
          </div>

          <NewsletterBlock variant="inline" />

          <AuthorBlock author={insight.author} />
        </div>
      </article>
    </Layout>
  );
}
