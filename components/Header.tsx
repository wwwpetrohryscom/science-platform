import Link from "next/link";

const navLinks = [
  { href: "/ecology", label: "Ecology" },
  { href: "/biology", label: "Biology" },
  { href: "/physics", label: "Applied Physics" },
  { href: "/insights", label: "Insights" },
  { href: "/discussions", label: "Discussions" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Science Eco Platform — home"
          className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-ink hover:text-primary-700"
        >
          <Logo />
          <span>Science Eco</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm font-medium text-ink-muted md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/discussions" className="btn-outline hidden md:inline-flex">
            Join the discussion
          </Link>
        </div>
      </div>

      {/* Mobile nav: simple, no JS — relies on CSS overflow scroll */}
      <nav
        aria-label="Primary mobile"
        className="container-page flex items-center gap-5 overflow-x-auto pb-3 text-sm text-ink-muted md:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap hover:text-primary-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="grid h-8 w-8 place-items-center rounded-md bg-primary-600 text-white"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2c4 4 6 7 6 11a6 6 0 1 1-12 0c0-4 2-7 6-11z" />
        <path d="M12 13v9" />
      </svg>
    </span>
  );
}
