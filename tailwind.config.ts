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
        "dm-black": "#111112",
        "dm-dark-gray": "#161618",
        "dm-gray-1": "#EBEBEB",
        "dm-gray-2": "#1D1D1F",
        "dm-gray-3": "#A8A8A8",
        "dm-gray-6": "#353535",
        "dm-yellow": "#FCD02C",
      },
    },
  },
  plugins: [],
};
export default config;
