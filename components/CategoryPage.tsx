import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { categoryMeta, type Category } from "@/lib/seo";
import { getArticlesByCategory } from "@/lib/content";

type CategoryPageProps = {
  category: Category;
};

/**
 * Shared renderer for /ecology, /biology, /physics.
 *
 * The filtering/sort surface is intentionally a pure-CSS shell today.
 * The data shape (`tags`, `type`, `updatedDate`) is already filter-ready —
 * a future client component can wire in interactivity without changing
 * the article schema.
 */
export async function CategoryPage({ category }: CategoryPageProps) {
  const meta = categoryMeta[category];
  const articles = await getArticlesByCategory(category);

  // Group by content type for clearer scanning.
  const seoArticles = articles.filter((a) => a.type === "seo");
  const expertArticles = articles.filter((a) => a.type === "expert");

  return (
    <Layout>
      <header className="border-b border-ink-line bg-gradient-to-b from-primary-50/60 to-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow">Topic</p>
          <h1 className="mt-3 font-serif text-display-lg font-semibold tracking-tight text-ink">
            {meta.label}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {meta.description}
          </p>

          {/* Filter shell — UI scaffolding for the future client component. */}
          <div
            className="mt-8 flex flex-wrap items-center gap-2 text-sm"
            aria-label="Article filters"
          >
            <FilterChip label="All" active />
            <FilterChip label="Expert" />
            <FilterChip label="SEO briefings" />
            <FilterChip label="Most recent" />
            <FilterChip label="Most cited" />
          </div>
        </div>
      </header>

      <div className="container-page mt-14">
        {expertArticles.length > 0 && (
          <Section title="Expert writing" subtitle="Original analysis from working scientists.">
            <Grid articles={expertArticles} />
          </Section>
        )}

        {seoArticles.length > 0 && (
          <Section
            title="Briefings"
            subtitle="Concise, well-sourced explainers built for indexing and answer engines."
            className="mt-16"
          >
            <Grid articles={seoArticles} />
          </Section>
        )}

        {articles.length === 0 && (
          <p className="text-ink-muted">
            No articles published in this topic yet — check back soon.
          </p>
        )}
      </div>

      <div className="mt-24">
        <NewsletterBlock />
      </div>
    </Layout>
  );
}

function Section({
  title,
  subtitle,
  className = "",
  children,
}: {
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={className}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {title}
          </h2>
          <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Grid({ articles }: { articles: Awaited<ReturnType<typeof getArticlesByCategory>> }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}

function FilterChip({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  // Static for now — a future client component can swap to <button> with state.
  return (
    <span
      aria-disabled
      className={
        active
          ? "rounded-full border border-primary-600 bg-primary-600 px-3 py-1 text-xs font-medium text-white"
          : "rounded-full border border-ink-line bg-white px-3 py-1 text-xs font-medium text-ink-muted"
      }
    >
      {label}
    </span>
  );
}
