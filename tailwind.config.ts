import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#0c0c0c",
        background: "#fbfdfc",
        primary: "#ffa651",
        secondary: "#69DC9E",
        accent: "#016FB9",
      },
    },
  },
  plugins: [],
};
export default config;
