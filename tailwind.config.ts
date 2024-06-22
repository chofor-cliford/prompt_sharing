import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: {
          400: "#7986AC",
          500: "#606C80",
          600: "#2B3674",
          700: "#384262",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config