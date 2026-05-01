import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const columns: Array<{
  heading: string;
  links: Array<{ href: string; label: string }>;
}> = [
  {
    heading: "Topics",
    links: [
      { href: "/ecology", label: "Ecology" },
      { href: "/biology", label: "Biology" },
      { href: "/physics", label: "Applied Physics" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
  {
    heading: "Formats",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/discussions", label: "Discussions" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about", label: "Editorial standards" },
      { href: "/contact", label: "Contact" },
      { href: "/rss.xml", label: "RSS" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-line bg-ink-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="font-serif text-lg font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            Independent, peer-informed writing on ecology, biology, and applied
            physics. Built to be read slowly and cited carefully.
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
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Editorially independent. Citations welcome — please link to the
            canonical URL.
          </p>
        </div>
      </div>
    </footer>
  );
}
