/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: ["Lobster", "cursive"],
      serif: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "font-black": "#1a1818",
        accent: "#ece7e1",
      },
    },
  },
  plugins: [],
};
