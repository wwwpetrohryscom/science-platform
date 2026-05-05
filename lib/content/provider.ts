/**
 * Optional AI provider boundary.
 *
 * This file defines the *interface only*. No external AI is wired in
 * and no API keys are required. The content layer is deterministic
 * and build-safe by design: pages render the same generated copy
 * across rebuilds without ever calling an external service.
 *
 * If a future iteration wants AI expansion (e.g. an extra paragraph
 * grounded in a specific source), it can implement this interface in
 * a separate module and feed structured `ProviderContext` in. That
 * implementation must:
 *
 *   1. Be called only at *build time* (never inside a request path).
 *   2. Treat the prompt as *augmentation*, not as a fact source.
 *   3. Cite from `ProviderContext.sources` only — never invent URLs.
 *   4. Run results through `quality.auditBlock` before persisting.
 *
 * Until such an implementation lands, callers should rely on the
 * deterministic template + generator layer.
 */

export type ProviderSourceRef = {
  name: string;
  organization: string;
  url: string;
};

export type ProviderContext = {
  /** Topic / subtopic / article identifiers used to seed determinism. */
  pageId: string;
  /** Whitelisted sources the model is allowed to draw from. */
  sources: ReadonlyArray<ProviderSourceRef>;
  /** Soft style guidance — calm, factual, evidence-first. */
  toneNotes?: string;
  /** Hard length cap. */
  maxWords?: number;
};

export interface ContentProvider {
  /**
   * Augment a structured prompt with grounded copy.
   *
   * Implementations MUST refuse to emit content that cites anything
   * outside `ctx.sources`, MUST stay within `ctx.maxWords`, and MUST
   * route their result through `quality.auditBlock` before returning.
   */
  expand(prompt: string, ctx: ProviderContext): Promise<string>;
}

/**
 * Default no-op provider. Returns the original prompt unchanged so
 * callers can adopt the interface today without enabling external
 * inference. Replace with a real implementation when (and only when)
 * the trade-offs make sense.
 */
export const DETERMINISTIC_PROVIDER: ContentProvider = {
  async expand(prompt) {
    return prompt;
  },
};
