/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        "primary-color": "#e0136e",
        "secondary-color": "#1e1c1e"
      },
    },
  },
  plugins: [],
}
