import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/seo";
import {
  getMessages,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const t = translator(getMessages(locale));
  const year = new Date().getFullYear();

  const columns: Array<{
    heading: string;
    links: Array<{ href: string; label: string }>;
  }> = [
    {
      heading: t("footer.topics_heading"),
      links: [
        { href: localizedPath(locale, "/ecology"), label: t("nav.ecology") },
        { href: localizedPath(locale, "/biology"), label: t("nav.biology") },
        { href: localizedPath(locale, "/physics"), label: t("nav.physics") },
        { href: "/sitemap.xml", label: t("footer.sitemap") },
      ],
    },
    {
      heading: t("footer.formats_heading"),
      links: [
        { href: localizedPath(locale, "/insights"), label: t("nav.insights") },
        { href: localizedPath(locale, "/discussions"), label: t("nav.discussions") },
        // The glossary is English-only (there is no localized term
        // set yet), so this is an absolute /en/ path like the editorial
        // pages. The *label* is localized even though the destination
        // is not — a reader should be able to read the nav in their own
        // language and then find out where the link goes.
        { href: "/en/glossary", label: t("footer.glossary") },
      ],
    },
    {
      heading: t("footer.about_heading"),
      links: [
        // Editorial pages are English-only (see lib/editorial.ts), so these
        // are absolute /en/ paths rather than locale-prefixed: pointing a
        // localized nav item at a route that 404s in that locale is worse
        // than sending the reader to the English original.
        { href: "/en/editorial-standards", label: t("footer.editorial_standards") },
        { href: "/en/sourcing-policy", label: t("footer.sourcing_policy") },
        { href: "/en/editorial", label: t("footer.editorial_desks") },
        { href: "/en/corrections", label: t("footer.corrections") },
        { href: localizedPath(locale, "/privacy-policy"), label: t("footer.privacy_policy") },
        { href: localizedPath(locale, "/cookie-policy"), label: t("footer.cookie_policy") },
        { href: localizedPath(locale, "/terms-of-use"), label: t("footer.terms_of_use") },
        { href: "/rss.xml", label: t("footer.rss") },
      ],
    },
  ];

  return (
    <footer className="mt-24 border-t border-ink-line bg-ink-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/ecosciencehub-logo.png"
              alt="EcoScienceHub logo"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
            <p className="font-serif text-lg font-semibold tracking-tight text-ink">
              {siteConfig.name}
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {t("site.description")}
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-quiet">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-line">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-subtle md:flex-row md:items-center">
          <p>{t("footer.rights", { year, site: siteConfig.name })}</p>
          <p>{t("footer.footer_note")}</p>
        </div>
      </div>
    </footer>
  );
}
