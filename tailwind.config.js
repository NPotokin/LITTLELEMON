/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
    theme: {
      colors: {
        'prim1': '#495e57',
        'prim2': '#f4ce14',
        'sec1': '#ee9972',
        'sec2': '#fbdabb',
        'hl1': '#edefee',
        'hl2': '#333333',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        serif: ['Markazi', 'serif'],
      extend: {},
    },
  },
  plugins: [],
}
