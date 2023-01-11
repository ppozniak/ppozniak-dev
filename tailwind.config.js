/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008FF5",
        pastel: "#124559",
        green: "#5DD39E",
        yellow: "#FFE347",
        grey: "#E8E8E8",
        white: "#FFFFFF",
        black: "#170312",
      }
    },
  },
  plugins: [],
};
