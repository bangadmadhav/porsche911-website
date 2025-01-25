/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AsapCondensed: ['AsapCondensed', 'sans-serif']
      },
      boxShadow: {
        'bottom-inner': 'inset 0 -20px 30px rgba(240, 240, 241, 1)',
      },
      gridTemplateColumns: {
        15: '1fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr 1fr', // Define 15 columns
      },
      gridTemplateRows: {
        15: 'repeat(15, minmax(0, 1fr))', // Define 15 rows
      },
    },
  },
  plugins: [],
}

