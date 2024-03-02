/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#466e55",
        secondary: "#2E4F4F",
        accent: "#081c15",
        default: "#CBE4DE",
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

