import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-display-lg font-semibold tracking-tight text-ink">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-muted">
          The link may be outdated, or the page may have been moved during a
          revision (the URL structure recently moved to Topic / Subtopic /
          Article). Try one of the topic pages below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/ecology" className="btn-outline">
            Browse ecology
          </Link>
          <Link href="/insights" className="btn-outline">
            Read insights
          </Link>
        </div>
      </section>
    </Layout>
  );
}
