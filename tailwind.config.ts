import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2b2118",
        charcoal: "#6f563d",
        gold: "#a87f55",
        champagne: "#e8d8c2",
        porcelain: "#fffaf5"
      },
      boxShadow: {
        glow: "0 22px 70px rgba(111, 86, 61, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
