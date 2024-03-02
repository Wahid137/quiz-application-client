/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#51806f",
        secondary: "##A8C6BF",
        accent: "#081c15",
        default: "#1D2844",
      },
      listStyleType: {
        latin: "lower-latin"
      },
      fontFamily: {
        common: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
