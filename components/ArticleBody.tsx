import type { ArticleSection } from "@/lib/content";

type ArticleBodyProps = {
  sections: ArticleSection[];
};

/**
 * Renders structured article sections with stable in-page anchors.
 *
 * Each paragraph in a section's `body` is split on blank lines —
 * which keeps the content data-shape simple (a string) while still
 * producing semantic <p> elements.
 *
 * When migrating to a CMS that returns rich text (TipTap, Lexical,
 * Portable Text), replace this renderer with the matching one.
 */
export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="prose-article">
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.heading}</h2>
          {section.body
            .split(/\n\n+/)
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </section>
      ))}
    </div>
  );
}
