const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["1rem", 1.2],
      base: ["1.12rem", 1.2],
      md: ["1.5rem", 1.2],
      lg: ["2rem", 1.2],
      xl: ["2.5rem", 1.2],
      "2xl": ["2.9rem", 1.2],
      "3xl": ["4.2rem", 1.2],
    },
    colors: {
      primary: "#008FF5",
      "primary-100": "#0072c4",
      pastel: "#124559",
      green: "#5DD39E",
      yellow: "#FFE347",
      grey: "#E8E8E8",
      white: "#FFFFFF",
      black: "#170312",
    },

    extend: {
      animation: {
        "fade-in": "fade-in 2s ease-in forwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      backgroundImage: {
        hero: `
          url('/liquid-cheese.svg'),
          linear-gradient(114.86deg, #2D0936 14.71%, #170312 78.23%)
        `,
      },
      backgroundSize: {
        hero: "cover, 100%",
      },
      container: {
        center: true,
        padding: "1rem",
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
