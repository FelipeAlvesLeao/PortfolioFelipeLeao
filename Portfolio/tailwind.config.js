/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAF9F6",
        secondary: "#202020",
        turquoise: "rgba(5, 138, 140)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ['Roboto', "sans-serif"],
      },

    },
  },
  plugins: [],
  darkMode: 'class',
}

