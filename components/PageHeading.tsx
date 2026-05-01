import Link from "next/link";

type Crumb = { label: string; href: string };

type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  /** Background variant — "primary" for ecology/biology, "accent" for physics. */
  accent?: "primary" | "accent" | "neutral";
};

const accentBg: Record<NonNullable<PageHeadingProps["accent"]>, string> = {
  primary: "from-primary-50/60 to-white",
  accent: "from-accent-50/60 to-white",
  neutral: "from-ink-surface to-white",
};

/**
 * Reusable page header used by category, subtopic, and editorial
 * landing pages. The article and insight detail pages have their own
 * tighter header treatment because they need the byline metadata
 * close to the title.
 */
export function PageHeading({
  eyebrow,
  title,
  description,
  crumbs,
  accent = "primary",
}: PageHeadingProps) {
  return (
    <header
      className={`border-b border-ink-line bg-gradient-to-b ${accentBg[accent]}`}
    >
      <div className="container-page py-14 md:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="text-xs text-ink-subtle">
            <ol className="flex flex-wrap items-center gap-1.5">
              {crumbs.map((crumb, idx) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <Link href={crumb.href} className="hover:text-primary-700">
                    {crumb.label}
                  </Link>
                  {idx < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className={`eyebrow ${crumbs ? "mt-5" : ""}`}>{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-serif text-display-lg font-semibold tracking-tight text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
