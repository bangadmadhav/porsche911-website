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
    },
  },
  plugins: [],
}

