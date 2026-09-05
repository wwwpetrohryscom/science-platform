type ArticleBodyProps = {
  /**
   * Pre-rendered HTML produced by `lib/content.ts` from the article's
   * markdown body. Content is authored in-house and trusted, so we
   * inject directly. If the source ever opens to untrusted input,
   * sanitize at the renderer in `lib/content.ts` (not here).
   */
  html: string;
  /**
   * BCP-47 tag for the prose itself, when it differs from the page's.
   * A locale that has not translated an article still serves it, with
   * the site chrome in the reader's language and the body in English.
   * The document element carries the reader's locale, which is correct
   * for the chrome and wrong for the article, so the body says what it
   * actually is — a screen reader switches voice, and the claim stops
   * being false.
   */
  lang?: string;
};

/**
 * Renders article HTML inside the long-form prose container. The
 * `prose-article` class (defined in `globals.css`) applies the
 * editorial typography — heading scale, blockquote treatment, link
 * underlines, generous leading.
 */
export function ArticleBody({ html, lang }: ArticleBodyProps) {
  return (
    <div
      className="prose-article"
      lang={lang}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
