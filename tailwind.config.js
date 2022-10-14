/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      display: ["Clash Display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
