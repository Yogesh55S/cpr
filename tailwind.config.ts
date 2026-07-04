import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── New design-system tokens ── */
        "teal-deep":   "#0B3D3E",
        "teal-bright": "#16888C",
        gold:          "#C9A227",
        ivory:         "#F7F6F2",
        charcoal:      "#1B2B2C",
        /* ── Legacy tokens kept for existing components ── */
        navy:          "#1a2744",
        cream:         "#faf6f0",
        muted:         "#718096",
        "light-border": "#e2e8f0",
        success:       "#22c55e",
        error:         "#ef4444",
        "whatsapp-green": "#25d366",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)",         "system-ui", "sans-serif"],
        mono:    ["var(--font-ibm-plex-mono)", "monospace"],
      },
      borderRadius: {
        button: "8px",
        card:   "12px",
        modal:  "16px",
      },
      boxShadow: {
        card:           "0 2px 12px rgba(26,39,68,0.08)",
        "card-hover":   "0 8px 32px rgba(26,39,68,0.12)",
        button:         "0 2px 8px rgba(201,162,39,0.35)",
        modal:          "0 24px 64px rgba(26,39,68,0.2)",
        "floating-bar": "0 -4px 20px rgba(26,39,68,0.15)",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fly: {
          "0%": { transform: "translateX(-150%) scale(0.8)", opacity: "0" },
          "20%": { opacity: "1", transform: "translateX(-50%) scale(1)" },
          "80%": { opacity: "1", transform: "translateX(50%) scale(1)" },
          "100%": { transform: "translateX(150%) scale(0.8)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        fly: "fly 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
