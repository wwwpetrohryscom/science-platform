import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/lib/content";

type RelatedArticlesProps = {
  articles: Article[];
  heading?: string;
  /** Whether to surface subtopic labels — useful when articles span multiple subtopics. */
  showSubtopic?: boolean;
};

export function RelatedArticles({
  articles,
  heading = "Related reading",
  showSubtopic = true,
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-16 border-t border-ink-line pt-12"
    >
      <h2
        id="related-heading"
        className="font-serif text-2xl font-semibold tracking-tight md:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={`${article.category}/${article.subtopic}/${article.slug}`}
            article={article}
            showSubtopic={showSubtopic}
          />
        ))}
      </div>
    </section>
  );
}
