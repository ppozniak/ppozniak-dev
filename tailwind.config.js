const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["1rem", 1.2],
      base: ["1.12rem", 1.2],
      xl: ["1.5rem", 1.2],
      "2xl": ["2rem", 1.2],
      "3xl": ["2.5rem", 1.2],
      "4xl": ["3rem", 1.2],
      "5xl": ["5rem", 1.2],
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
