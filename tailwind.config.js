/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#FFF6DA",
        dark: "#23242A",
      },
    },
  },
  plugins: [],
};
