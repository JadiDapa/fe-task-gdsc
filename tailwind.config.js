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
        secondary: "",
        tertiary: "",
      },
    },
  },
  plugins: [],
};
