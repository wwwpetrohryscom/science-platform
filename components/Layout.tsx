import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getMessages, translator, type Locale } from "@/lib/i18n";

/**
 * Page chrome wrapper.
 *
 * Wraps every route in <Header> and <Footer>. Threads `locale` down
 * so both navigation surfaces emit translated strings and locale-
 * prefixed URLs.
 */
export function Layout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = translator(getMessages(locale));

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary-700 focus:px-3 focus:py-2 focus:text-white"
      >
        {t("nav.skip_to_content")}
      </a>
      <Header locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
