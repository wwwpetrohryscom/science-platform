type ArticleBodyProps = {
  /**
   * Pre-rendered HTML produced by `lib/content.ts` from the article's
   * markdown body. Content is authored in-house and trusted, so we
   * inject directly. If the source ever opens to untrusted input,
   * sanitize at the renderer in `lib/content.ts` (not here).
   */
  html: string;
};

/**
 * Renders article HTML inside the long-form prose container. The
 * `prose-article` class (defined in `globals.css`) applies the
 * editorial typography — heading scale, blockquote treatment, link
 * underlines, generous leading.
 */
export function ArticleBody({ html }: ArticleBodyProps) {
  return (
    <div
      className="prose-article"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
