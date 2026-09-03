import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#12201A",
        surface: "#123A20",
        ivory: "#F5F1E6",
        paper: "#FDFBF6",
        gold: {
          DEFAULT: "#C9A227",
          shadow: "#6B4A18",
          mid: "#A8863F",
          highlight: "#C8B070",
        },
      },
      fontFamily: {
        display: ["var(--font-jost)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #6B4A18 0%, #A8863F 45%, #C8B070 100%)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        jungle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
