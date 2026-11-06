/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090D16",
        surface: "#111827",
        surfaceLighter: "#1F2937",
        accent: {
          emerald: "#10b981",
          cyan: "#06b6d4"
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
