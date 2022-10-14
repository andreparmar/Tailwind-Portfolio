/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontFamily: {
      display: ["Clash Display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
