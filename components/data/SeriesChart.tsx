import type { Observation } from "@/lib/scientific-data/types";

/**
 * A time series, drawn as server-rendered SVG.
 *
 * No charting library, no client component, no JavaScript. The chart is
 * markup the server produces, which means the scientific content of the
 * page — the values, the axes, the units, the period — exists for a
 * reader with scripts disabled, for a crawler, and for a screen reader.
 * A chart that needs a 200 kB runtime to say "CO₂ was 425.62 ppm in
 * 2025" is not a better way of saying it.
 *
 * Two things the axes do deliberately:
 *
 *   - The y-axis is not forced to zero, and it says so. For an anomaly
 *     series zero is arbitrary; for a concentration series starting the
 *     axis at zero would compress forty years of change into the top
 *     eighth of the frame. What would be misleading is a truncated axis
 *     that does not announce itself, so the baseline value is labelled.
 *   - Ticks come from the data, not from a round-number generator, so
 *     the first and last labelled years are real observations.
 *
 * The table underneath is not a fallback. It is the same data in the
 * form that can be read aloud, copied, and checked.
 */

type Props = {
  observations: Observation[];
  unit: string;
  /** Accessible name — describes what the line is, not that it is a chart. */
  label: string;
  /** Sentence read by assistive technology in place of the drawing. */
  description: string;
  height?: number;
};

const W = 720;
const PAD = { top: 16, right: 16, bottom: 34, left: 58 };

function niceNumber(v: number): string {
  const a = Math.abs(v);
  if (a >= 1000) return v.toFixed(0);
  if (a >= 100) return v.toFixed(1);
  if (a >= 1) return v.toFixed(2);
  return v.toPrecision(3);
}

export function SeriesChart({
  observations,
  unit,
  label,
  description,
  height = 300,
}: Props) {
  if (observations.length < 2) return null;

  const H = height;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const xs = observations.map((o) => Number(o.period.slice(0, 4)));
  const ys = observations.map((o) => o.value);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMin = Math.min(...ys);
  const yMax = Math.max(...ys);
  // A little headroom so the extreme points are not on the frame.
  const yPad = (yMax - yMin) * 0.08 || Math.abs(yMax) * 0.08 || 1;
  const y0 = yMin - yPad;
  const y1 = yMax + yPad;

  const px = (x: number) => PAD.left + ((x - xMin) / (xMax - xMin || 1)) * innerW;
  const py = (y: number) => PAD.top + innerH - ((y - y0) / (y1 - y0 || 1)) * innerH;

  const path = observations
    .map((o, i) => `${i === 0 ? "M" : "L"}${px(xs[i]).toFixed(2)},${py(o.value).toFixed(2)}`)
    .join(" ");

  // Uncertainty band, where the provider publishes one.
  const hasUncertainty = observations.every((o) => typeof o.uncertainty === "number");
  const band = hasUncertainty
    ? [
        ...observations.map(
          (o, i) => `${i === 0 ? "M" : "L"}${px(xs[i]).toFixed(2)},${py(o.value + (o.uncertainty ?? 0)).toFixed(2)}`,
        ),
        ...[...observations].reverse().map((o, i) => {
          const idx = observations.length - 1 - i;
          return `L${px(xs[idx]).toFixed(2)},${py(o.value - (o.uncertainty ?? 0)).toFixed(2)}`;
        }),
        "Z",
      ].join(" ")
    : null;

  // Five y ticks spanning the drawn range, and year ticks from the data.
  const yTicks = Array.from({ length: 5 }, (_, i) => y0 + ((y1 - y0) * i) / 4);
  const step = Math.max(1, Math.ceil((xMax - xMin) / 6));
  const xTicks: number[] = [];
  for (let x = xMin; x <= xMax; x += step) xTicks.push(x);
  if (xTicks[xTicks.length - 1] !== xMax) xTicks.push(xMax);

  const last = observations[observations.length - 1];

  return (
    <figure className="not-prose my-8">
      <div className="overflow-x-auto rounded-lg border border-ink-line bg-white">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          role="img"
          aria-label={`${label}. ${description}`}
          className="block min-w-[520px]"
        >
          <title>{label}</title>
          <desc>{description}</desc>

          {yTicks.map((t) => (
            <g key={`y${t}`}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={py(t)}
                y2={py(t)}
                stroke="currentColor"
                strokeWidth="1"
                className="text-ink-line"
              />
              <text
                x={PAD.left - 8}
                y={py(t) + 4}
                textAnchor="end"
                fontSize="11"
                fill="currentColor"
                className="text-ink-subtle"
              >
                {niceNumber(t)}
              </text>
            </g>
          ))}

          {xTicks.map((t) => (
            <text
              key={`x${t}`}
              x={px(t)}
              y={H - 12}
              textAnchor="middle"
              fontSize="11"
              fill="currentColor"
              className="text-ink-subtle"
            >
              {t}
            </text>
          ))}

          {band && (
            <path d={band} fill="currentColor" opacity="0.16" className="text-primary-700" />
          )}
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="text-primary-700"
          />
          <circle cx={px(xs[xs.length - 1])} cy={py(last.value)} r="3.5" fill="currentColor" className="text-primary-700" />

          <text
            x={PAD.left}
            y={12}
            fontSize="11"
            fill="currentColor"
            className="text-ink-subtle"
          >
            {unit}
          </text>
        </svg>
      </div>
      <figcaption className="mt-2 text-sm text-ink-subtle">
        {description}{" "}
        {hasUncertainty && (
          <>The shaded band is the uncertainty the provider publishes with each value. </>
        )}
        The vertical axis does not start at zero; its lowest gridline is{" "}
        {niceNumber(y0)} {unit}.
      </figcaption>
    </figure>
  );
}

/**
 * The same observations as a table.
 *
 * Rendered for every chart, collapsed by default so it does not crowd
 * the page, using `<details>` so that it needs no JavaScript and is
 * reachable from the keyboard by default.
 */
export function SeriesTable({
  observations,
  unit,
  caption,
  periodLabel,
  valueLabel,
  uncertaintyLabel,
  summary,
}: {
  observations: Observation[];
  unit: string;
  caption: string;
  periodLabel: string;
  valueLabel: string;
  uncertaintyLabel: string;
  summary: string;
}) {
  const hasUncertainty = observations.some((o) => typeof o.uncertainty === "number");
  return (
    <details className="not-prose my-6 rounded-lg border border-ink-line bg-ink-surface/40 p-4">
      <summary className="cursor-pointer text-sm font-medium text-ink">{summary}</summary>
      <div className="mt-4 max-h-96 overflow-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="sticky top-0 bg-ink-surface">
            <tr>
              <th scope="col" className="px-2 py-1 text-left font-medium">{periodLabel}</th>
              <th scope="col" className="px-2 py-1 text-right font-medium">
                {valueLabel} ({unit})
              </th>
              {hasUncertainty && (
                <th scope="col" className="px-2 py-1 text-right font-medium">{uncertaintyLabel}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {observations.map((o) => (
              <tr key={o.period} className="border-t border-ink-line/60">
                <th scope="row" className="px-2 py-1 text-left font-normal">{o.period}</th>
                <td className="px-2 py-1 text-right tabular-nums">{o.value}</td>
                {hasUncertainty && (
                  <td className="px-2 py-1 text-right tabular-nums text-ink-subtle">
                    {o.uncertainty !== undefined ? `± ${o.uncertainty}` : "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}
