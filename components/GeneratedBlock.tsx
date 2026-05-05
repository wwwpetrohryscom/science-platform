import type { GeneratedBlock as Block } from "@/lib/content/generators";

type Variant = "intro" | "explanation" | "note" | "callout";

type Props = {
  block: Block;
  variant?: Variant;
  className?: string;
  /** Optional eyebrow shown above the block. */
  eyebrow?: string;
};

const variantClass: Record<Variant, string> = {
  intro: "text-base leading-relaxed text-ink-muted md:text-lg",
  explanation: "text-base leading-relaxed text-ink-muted",
  note: "text-sm leading-relaxed text-ink-subtle",
  callout:
    "rounded-md border border-ink-line bg-ink-surface px-5 py-4 text-sm leading-relaxed text-ink",
};

/**
 * Renders a single deterministic content block server-side.
 *
 * The text comes from the structured generators in
 * `@/lib/content/generators` and is always present in the initial
 * HTML — no `useEffect`, no client-side fetching, no hydration-only
 * paths. That keeps the block crawlable, readable without JS, and
 * cacheable at the CDN edge.
 */
export function GeneratedBlock({
  block,
  variant = "explanation",
  className,
  eyebrow,
}: Props) {
  const baseClass = variantClass[variant];
  const cls = className ? `${baseClass} ${className}` : baseClass;

  if (variant === "callout") {
    return (
      <div className={cls}>
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
            {eyebrow}
          </p>
        )}
        <p>{block.text}</p>
      </div>
    );
  }

  return (
    <div>
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          {eyebrow}
        </p>
      )}
      <p className={cls}>{block.text}</p>
    </div>
  );
}
