import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "inset 10px -50px 94px 0 rgba(199, 199, 199, 0.2)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        "satoshi-light": ["Satoshi-Light", "sans-serif"],
        "satoshi-light-italic": ["Satoshi-LightItalic", "sans-serif"],
        "satoshi-regular": ["Satoshi-Regular", "sans-serif"],
        "satoshi-italic": ["Satoshi-Italic", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-medium-italic": ["Satoshi-MediumItalic", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
        "satoshi-bold-italic": ["Satoshi-BoldItalic", "sans-serif"],
        "satoshi-black": ["Satoshi-Black", "sans-serif"],
        "satoshi-black-italic": ["Satoshi-BlackItalic", "sans-serif"],
        "satoshi-variable": ["Satoshi-Variable", "sans-serif"],
        "satoshi-variable-italic": ["Satoshi-VariableItalic", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },

      colors: {
        "primary-orange": "#FF5722",
      },
    },
  },
  plugins: [],
};
export default config;
