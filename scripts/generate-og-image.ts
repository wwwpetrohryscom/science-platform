#!/usr/bin/env tsx
/**
 * Generate the default Open Graph image.
 *
 * `siteConfig.defaultOgImage` has pointed at `/og/default.png` since
 * the site was set up, and the file was never created. Every page on
 * the site — 2,815 of them — declared an `og:image` and a
 * `twitter:image` at that path, and every one of them 404'd. Nothing
 * in the build failed, because nothing checked: a metadata tag naming
 * a missing asset is valid HTML.
 *
 * The image is generated rather than committed as a binary so it stays
 * in sync with the site name and tagline, and so a reviewer can see
 * what it says in the diff.
 *
 * Usage: npm run og:generate
 */
import fs from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";
import React from "react";

import { siteConfig } from "../lib/seo";

const WIDTH = 1200;
const HEIGHT = 630;

const INK = "#12211b";
const PAPER = "#f7f5ef";
const ACCENT = "#2f6f52";
const MUTED = "#5c6b63";

function Card() {
  return React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: PAPER,
        padding: "72px 80px",
        fontFamily: "sans-serif",
      },
    },
    React.createElement(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 20 } },
      React.createElement("div", {
        style: {
          width: 26,
          height: 26,
          borderRadius: 6,
          background: ACCENT,
          display: "flex",
        },
      }),
      React.createElement(
        "div",
        {
          style: {
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: MUTED,
            display: "flex",
          },
        },
        siteConfig.name,
      ),
    ),
    React.createElement(
      "div",
      {
        style: {
          fontSize: 62,
          lineHeight: 1.15,
          color: INK,
          maxWidth: 960,
          display: "flex",
        },
      },
      "Explanatory science writing on ecology, biology and applied physics.",
    ),
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `2px solid ${ACCENT}`,
          paddingTop: 28,
          fontSize: 26,
          color: MUTED,
        },
      },
      React.createElement(
        "div",
        { style: { display: "flex" } },
        "Every quantity carries the source that states it",
      ),
      React.createElement(
        "div",
        { style: { display: "flex", color: ACCENT } },
        siteConfig.url.replace(/^https?:\/\//, ""),
      ),
    ),
  );
}

async function main() {
  const response = new ImageResponse(Card(), { width: WIDTH, height: HEIGHT });
  const buffer = Buffer.from(await response.arrayBuffer());

  const target = path.join(
    process.cwd(),
    "public",
    ...siteConfig.defaultOgImage.split("/").filter(Boolean),
  );
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, buffer);

  console.log(
    `✓ wrote ${path.relative(process.cwd(), target)} — ${WIDTH}×${HEIGHT}, ${(
      buffer.length / 1024
    ).toFixed(1)} kB`,
  );
}

main().catch((error) => {
  console.error("Failed to generate the Open Graph image");
  console.error(error);
  process.exit(1);
});
