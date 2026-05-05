import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { buildMetadata } from "@/lib/seo";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  return buildMetadata({
    title: "Cookie Policy",
    description:
      "Cookie Policy for EcoScienceHub, including necessary storage, optional analytics, consent controls, and GDPR-related cookie information.",
    path: "/cookie-policy",
    locale: params.locale,
  });
}

export default function CookiePolicyPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <Layout locale={locale}>
      <article className="container-page py-16">
        <div className="max-w-reader">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-muted">
            This Cookie Policy explains how EcoScienceHub uses necessary storage
            and optional analytics cookies or similar technologies.
          </p>
          <p className="mt-4 text-sm text-ink-subtle">
            Last updated: May 2, 2026
          </p>

          <div className="prose-article mt-12">
            <h2>Data Controller</h2>
            <p>
              The data controller is HELPERG LLC. Contact:
              <a href="mailto:info@helperg.com">info@helperg.com</a>. Privacy
              contact email placeholder:
              <a href="mailto:privacy@ecosciencehub.com">
                privacy@ecosciencehub.com
              </a>
              .
            </p>

            <h2>Cookie Categories</h2>
            <h3>Necessary</h3>
            <p>
              Necessary storage is always enabled. It is used to remember your
              consent choice and support basic website operation, security, and
              accessibility.
            </p>

            <h3>Analytics</h3>
            <p>
              Analytics is optional and disabled by default. If you accept
              analytics cookies, EcoScienceHub may load a Google Analytics
              placeholder script to measure aggregate traffic and content usage.
            </p>

            <h2>Consent Behavior</h2>
            <p>
              On first visit, the banner lets you accept all cookies, reject
              non-essential cookies, or customize your choice. The choice is
              stored in localStorage under a versioned consent key.
            </p>
            <p>
              Analytics scripts are not loaded before consent. Rejecting
              non-essential cookies keeps analytics disabled.
            </p>

            <h2>Managing Your Choice</h2>
            <p>
              You can change your preference by clearing site data in your
              browser and revisiting the website. A future account or preference
              center may provide a direct reset control.
            </p>

            <h2>Data Processed Through Analytics</h2>
            <p>
              If analytics is accepted, processed data may include page views,
              referrers, approximate location, device/browser information, and
              interaction timing. We use this for aggregate measurement, content
              planning, performance monitoring, and product improvement.
            </p>

            <h2>GDPR Rights</h2>
            <p>
              You may have rights to access, rectify, erase, restrict, port, or
              object to processing of personal data. Contact
              <a href="mailto:info@helperg.com">info@helperg.com</a> to exercise
              rights.
            </p>

            <h2>Sources</h2>
            <ul>
              <li>
                <a href="https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en">
                  European Commission: GDPR information for individuals
                </a>
              </li>
              <li>
                <a href="https://www.edpb.europa.eu/sme-data-protection-guide/faq-frequently-asked-questions/answer/how-can-i-respect-individuals-data_en">
                  European Data Protection Board: respecting individual rights
                </a>
              </li>
            </ul>

            <p>
              Related pages:{" "}
              <a href={localizedPath(locale, "/privacy-policy")}>
                Privacy Policy
              </a>
              {" and "}
              <a href={localizedPath(locale, "/terms-of-use")}>Terms of Use</a>.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
