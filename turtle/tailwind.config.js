/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24c1ed",
        secondary: "#36ffd0",
      }
    },
  },
  plugins: [],
}

