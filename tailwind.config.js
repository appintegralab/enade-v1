/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackrock: {
          50: '#f8e7fd',
          100: '#eab8fa',
          200: '#db88f6',
          300: '#cd59f2',
          400: '#bf2aef',
          500: '#a510d5',
          600: '#800da6',
          700: '#5c0977',
          800: '#370547',
          900: '#120218',
        },
      }      
    },
  },
  plugins: [],
}
