import Link from "next/link";

import { Layout } from "@/components/Layout";
import { PageHeading } from "@/components/PageHeading";
import type { PolicyDocument } from "@/lib/editorial";
import { DEFAULT_LOCALE, localizedPath } from "@/lib/i18n";

/**
 * Shared renderer for the three editorial policy documents. They share
 * a shape (heading → paragraphs → optional bullets), so they share a
 * component; the content lives in `lib/editorial.ts`.
 */
export function PolicyPage({
  doc,
  children,
  siblings,
}: {
  doc: PolicyDocument;
  /** Optional extra content rendered after the last section. */
  children?: React.ReactNode;
  siblings: Array<{ slug: string; title: string; summary: string }>;
}) {
  return (
    <Layout locale={DEFAULT_LOCALE}>
      <PageHeading
        eyebrow={doc.eyebrow}
        title={doc.title}
        description={doc.summary}
        accent="neutral"
        crumbs={[
          { label: "Home", href: localizedPath(DEFAULT_LOCALE, "/") },
          {
            label: doc.title,
            href: localizedPath(DEFAULT_LOCALE, `/${doc.slug}`),
          },
        ]}
      />

      <div className="container-page py-14">
        <div className="max-w-reader">
          <p className="text-sm text-ink-subtle">
            Last revised {doc.updatedDate}
          </p>

          <div className="prose-article mt-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b) => (
                      <li key={b.slice(0, 40)}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {children}
          </div>

          {siblings.length > 0 && (
            <nav className="mt-14 border-t border-ink-line pt-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                Related editorial pages
              </h2>
              <ul className="mt-4 space-y-3">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={localizedPath(DEFAULT_LOCALE, `/${s.slug}`)}
                      className="font-medium text-ink hover:text-primary-700"
                    >
                      {s.title}
                    </Link>
                    <p className="text-sm text-ink-muted">{s.summary}</p>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
}
