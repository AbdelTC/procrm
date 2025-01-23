/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6CDAE7", //Türkis
        secondary: "#0B0B0B", //Dunkles Schwarz
      },
    },
  },
  plugins: [],
};

