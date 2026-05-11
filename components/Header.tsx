import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/categories";
import {
  getMessages,
  localizedPath,
  translator,
  type Locale,
} from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
};

const editorialKeys = ["insights", "discussions"] as const;

export function Header({ locale }: HeaderProps) {
  const t = translator(getMessages(locale));

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href={localizedPath(locale, "/")}
          aria-label={`${t("site.name")} — ${t("nav.home")}`}
          className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-ink hover:text-primary-700"
        >
          <Logo />
          <span>{t("site.name")}</span>
        </Link>

        <nav
          aria-label={t("nav.primary")}
          className="hidden items-center gap-7 text-sm font-medium text-ink-muted md:flex"
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={localizedPath(locale, `/${cat.slug}`)}
              className="hover:text-primary-700"
            >
              {t(`nav.${cat.slug}`)}
            </Link>
          ))}
          <span aria-hidden className="h-4 w-px bg-ink-line" />
          {editorialKeys.map((key) => (
            <Link
              key={key}
              href={localizedPath(locale, `/${key}`)}
              className="hover:text-primary-700"
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={localizedPath(locale, "/discussions")}
            className="btn-outline hidden md:inline-flex"
          >
            {t("nav.join_discussion")}
          </Link>
          <LanguageSwitcher
            currentLocale={locale}
            label={t("nav.language_switcher")}
          />
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        aria-label={t("nav.primary_mobile")}
        className="container-page flex items-center gap-5 overflow-x-auto pb-3 text-sm text-ink-muted md:hidden"
      >
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={localizedPath(locale, `/${cat.slug}`)}
            className="whitespace-nowrap hover:text-primary-700"
          >
            {t(`nav.${cat.slug}`)}
          </Link>
        ))}
        {editorialKeys.map((key) => (
          <Link
            key={key}
            href={localizedPath(locale, `/${key}`)}
            className="whitespace-nowrap hover:text-primary-700"
          >
            {t(`nav.${key}`)}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <Image
      src="/brand/ecosciencehub-logo.png"
      alt="EcoScienceHub logo"
      width={36}
      height={36}
      priority
      className="h-9 w-9 shrink-0"
    />
  );
}
