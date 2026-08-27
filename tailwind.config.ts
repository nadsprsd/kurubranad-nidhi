import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#262A6B", // deepened toward the brand's real navy for large surfaces
          deep: "#181B4D",
          light: "#333477", // the brand's literal logo navy — used for accents/hovers
        },
        brandred: {
          DEFAULT: "#EC2127", // sampled directly from the real logo
          dark: "#B8151B",
        },
        gold: {
          DEFAULT: "#B8975A",
          light: "#D4BC8B",
          dark: "#8F7440",
        },
        surface: {
          warm: "#FAF7F2",
          grey: "#F0EEE9",
        },
        ink: "#1A2332",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
