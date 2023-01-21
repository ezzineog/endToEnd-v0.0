/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['className', 'dark'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: { 'main-plot': '#222225' }
      //  colors: { 'main-plot': '#2E1D30' }
    },
  },
  plugins: [],
}
