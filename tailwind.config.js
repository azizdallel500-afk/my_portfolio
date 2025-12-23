/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212", 
        neonGreen: "#1df220", // Inspired by your reference images
        cardGray: "#1c1c1c",
      },
    },
  },
  plugins: [],
}