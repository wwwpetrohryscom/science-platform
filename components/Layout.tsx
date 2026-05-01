import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Page chrome wrapper.
 *
 * Wraps every route in <Header> and <Footer> with a flex column so
 * the footer always sits at the bottom on short pages.
 *
 * Kept as a thin wrapper rather than baked into the root layout to
 * leave room for future variants (e.g. a `<MinimalLayout>` for
 * paywall, onboarding, or print views).
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary-700 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
