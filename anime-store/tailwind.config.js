/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff1e56",
        dark: "#0f0f0f",
        neon: "#00f5ff",
      },
    },
  },
  plugins: [],
}