/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#1e293b',
        materialBlack: '#121212',
        word: '#fafafa',
        dream1: '#9CECFB',
        dream2: '#65C7F7',
        dream3: '#0052D4'

      }
    },
  },
  plugins: [],
}
