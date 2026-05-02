import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { buildMetadata } from "@/lib/seo";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  return buildMetadata({
    title: "Privacy Policy",
    description:
      "Privacy Policy for EcoScienceHub, including data controller details, processing purposes, collected data, cookies, analytics, and GDPR rights.",
    path: "/privacy-policy",
    locale: params.locale,
  });
}

export default function PrivacyPolicyPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <Layout locale={locale}>
      <article className="container-page py-16">
        <div className="max-w-reader">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-muted">
            This Privacy Policy explains how EcoScienceHub processes personal
            data when you visit the website, read content, contact us, or use
            related services.
          </p>
          <p className="mt-4 text-sm text-ink-subtle">
            Last updated: May 2, 2026
          </p>

          <div className="prose-article mt-12">
            <h2>Data Controller</h2>
            <p>
              The data controller for EcoScienceHub is HELPERG LLC. Contact:
              <a href="mailto:info@helperg.com">info@helperg.com</a>.
            </p>
            <p>
              Privacy contact email placeholder:
              <a href="mailto:privacy@ecosciencehub.com">
                privacy@ecosciencehub.com
              </a>
              .
            </p>

            <h2>Purpose of Data Processing</h2>
            <p>We process personal data to:</p>
            <ul>
              <li>Operate, secure, and maintain EcoScienceHub.</li>
              <li>Respond to contact, editorial, partnership, or rights requests.</li>
              <li>Measure aggregate website usage if analytics consent is given.</li>
              <li>Improve content quality, accessibility, and performance.</li>
              <li>Meet legal, security, and compliance obligations.</li>
            </ul>

            <h2>Types of Data Collected</h2>
            <p>
              Depending on how you use the website, we may process contact
              details you provide, message contents, technical request data
              such as IP address and browser metadata, consent preferences,
              approximate analytics data, and security logs.
            </p>
            <p>
              We do not intentionally collect special categories of personal
              data through the website.
            </p>

            <h2>Legal Bases</h2>
            <p>
              Processing may rely on legitimate interests for basic site
              security and operation, consent for analytics cookies and similar
              technologies, contractual necessity where you request a service,
              and legal obligation where applicable.
            </p>

            <h2>Cookies and Analytics</h2>
            <p>
              Necessary storage is used to remember your cookie preference and
              support basic site operation. Analytics is disabled by default and
              is loaded only after you accept analytics cookies through the
              consent banner.
            </p>
            <p>
              If enabled, analytics is used to understand aggregate traffic,
              popular pages, referrers, and device/browser trends. The current
              implementation is prepared for Google Analytics using a placeholder
              measurement ID.
            </p>

            <h2>Data Sharing</h2>
            <p>
              We may use service providers for hosting, security, analytics,
              email, and infrastructure. Providers should process data only
              under appropriate contractual and security safeguards.
            </p>

            <h2>Retention</h2>
            <p>
              We keep personal data only as long as reasonably necessary for the
              purposes described above, unless a longer retention period is
              required for legal, security, or dispute-resolution reasons.
            </p>

            <h2>International Transfers</h2>
            <p>
              Where personal data is transferred internationally, we aim to use
              appropriate safeguards such as contractual commitments, security
              controls, and vendor due diligence.
            </p>

            <h2>Your GDPR Rights</h2>
            <p>
              Under the GDPR, individuals may have rights to be informed, access
              their personal data, request rectification, request erasure,
              restrict processing, receive data portability, object to certain
              processing, and avoid decisions based solely on automated
              processing where legally applicable.
            </p>
            <p>
              To exercise rights, contact
              <a href="mailto:info@helperg.com">info@helperg.com</a>. We may
              need to verify your identity before responding.
            </p>

            <h2>Complaints</h2>
            <p>
              If you believe your privacy rights have not been respected, you
              may contact us first or lodge a complaint with a competent data
              protection authority.
            </p>

            <h2>Sources</h2>
            <ul>
              <li>
                <a href="https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en">
                  European Commission: Information for individuals
                </a>
              </li>
              <li>
                <a href="https://www.edpb.europa.eu/about-edpb/faq-frequently-asked-questions/what-are-my-rights-under-gdpr_en">
                  European Data Protection Board: GDPR rights
                </a>
              </li>
            </ul>

            <p>
              Related pages:{" "}
              <a href={localizedPath(locale, "/cookie-policy")}>Cookie Policy</a>
              {" and "}
              <a href={localizedPath(locale, "/terms-of-use")}>Terms of Use</a>.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
