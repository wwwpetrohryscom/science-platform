import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Primary — forest / scientific green
        primary: {
          DEFAULT: "#2E7D32",
          50: "#F1F8F2",
          100: "#DCEFDE",
          200: "#B6DEBA",
          300: "#8BC893",
          400: "#5CAE68",
          500: "#3F9849",
          600: "#2E7D32",
          700: "#256528",
          800: "#1C4D1F",
          900: "#143816",
        },
        // Accent — calm scientific blue
        accent: {
          DEFAULT: "#4A90E2",
          50: "#EEF5FD",
          100: "#D6E7FA",
          200: "#AFCFF4",
          300: "#85B5EE",
          400: "#5EA0E8",
          500: "#4A90E2",
          600: "#2E78CC",
          700: "#235EA1",
          800: "#1A4677",
          900: "#11304F",
        },
        // Neutral palette tuned for long-form reading
        ink: {
          DEFAULT: "#1A2421",
          muted: "#475A55",
          subtle: "#7A8A85",
          line: "#E4EAE6",
          surface: "#F7F9F7",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Iowan Old Style",
          "Apple Garamond",
          "Baskerville",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        // Tighter, editorial scale
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 56, 22, 0.04), 0 4px 16px rgba(20, 56, 22, 0.04)",
        card: "0 1px 3px rgba(20, 56, 22, 0.05), 0 8px 24px rgba(20, 56, 22, 0.06)",
        focus: "0 0 0 3px rgba(74, 144, 226, 0.25)",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "18px",
      },
      maxWidth: {
        prose: "68ch",
        reader: "72ch",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1A2421",
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
