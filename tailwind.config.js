/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        // => @media (min-width: 400px) { ... }
      },
    },
  },
  plugins: [],
};
