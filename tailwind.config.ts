import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F2039",
          "navy-deep": "#0A1628",
          "navy-soft": "#1B3556",
          accent: "#1B75BC",
          "accent-hover": "#155F99",
          "accent-alt": "#38BDF8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F9FC",
          subtle: "#E9F1F7",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#475569",
          subtle: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7rem)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #1B75BC 0%, #38BDF8 55%, #7DD3FC 100%)",
      },
      boxShadow: {
        "glow-accent": "0 10px 40px -10px rgba(27,117,188,0.55)",
        card: "0 1px 2px rgba(15,32,57,0.06), 0 12px 30px -12px rgba(27,117,188,0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
