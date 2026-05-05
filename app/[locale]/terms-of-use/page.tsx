import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { buildMetadata } from "@/lib/seo";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  return buildMetadata({
    title: "Terms of Use",
    description:
      "Terms of Use for EcoScienceHub, including acceptable use, scientific content limitations, intellectual property, and privacy references.",
    path: "/terms-of-use",
    locale: params.locale,
  });
}

export default function TermsOfUsePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <Layout locale={locale}>
      <article className="container-page py-16">
        <div className="max-w-reader">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-muted">
            These Terms of Use govern access to and use of EcoScienceHub and
            related scientific content, discussions, and editorial features.
          </p>
          <p className="mt-4 text-sm text-ink-subtle">
            Last updated: May 2, 2026
          </p>

          <div className="prose-article mt-12">
            <h2>Operator and Contact</h2>
            <p>
              EcoScienceHub is operated by HELPERG LLC. Contact:
              <a href="mailto:info@helperg.com">info@helperg.com</a>. Legal
              contact email placeholder:
              <a href="mailto:legal@ecosciencehub.com">
                legal@ecosciencehub.com
              </a>
              .
            </p>

            <h2>Use of the Website</h2>
            <p>
              You may use EcoScienceHub for lawful reading, research,
              educational, and discussion purposes. You must not interfere with
              the site, misuse forms, attempt unauthorized access, scrape in a
              way that harms service availability, or submit unlawful content.
            </p>

            <h2>Scientific and Educational Content</h2>
            <p>
              EcoScienceHub publishes educational and editorial scientific
              content. Content is not legal, medical, financial, engineering, or
              professional advice. You should verify important claims against
              primary sources and qualified experts before relying on them.
            </p>

            <h2>Controlled Discussions</h2>
            <p>
              Discussions are moderated, expert-led, and not a public forum.
              We may remove content that is spam, abusive, misleading,
              off-topic, unlawful, or inconsistent with editorial standards.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Unless otherwise stated, site design, editorial structure, and
              original text are protected by applicable intellectual property
              laws. You may link to public pages. Reuse of substantial content
              requires permission unless an applicable exception applies.
            </p>

            <h2>Privacy, Cookies, and Analytics</h2>
            <p>
              Use of the website may involve processing personal data and
              storing cookie preferences. Please review the
              <a href={localizedPath(locale, "/privacy-policy")}>
                Privacy Policy
              </a>
              {" and "}
              <a href={localizedPath(locale, "/cookie-policy")}>Cookie Policy</a>
              .
            </p>

            <h2>Availability and Changes</h2>
            <p>
              We may update, suspend, or discontinue parts of the website. We
              may also update these Terms when the product, law, or operational
              requirements change.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, EcoScienceHub is provided
              without warranties of availability, accuracy, or fitness for a
              particular purpose. We are not liable for
              indirect, incidental, consequential, or punitive damages arising
              from use of the website.
            </p>

            <h2>GDPR Contact</h2>
            <p>
              For privacy rights requests connected to these Terms, contact
              <a href="mailto:info@helperg.com">info@helperg.com</a>.
            </p>

            <h2>Sources</h2>
            <ul>
              <li>
                <a href="https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en">
                  European Commission: data protection information
                </a>
              </li>
              <li>
                <a href="https://www.edpb.europa.eu/about-edpb/faq-frequently-asked-questions/what-are-my-rights-under-gdpr_en">
                  European Data Protection Board: GDPR rights
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </Layout>
  );
}
