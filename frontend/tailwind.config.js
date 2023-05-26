/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'dark-blue':'#173964',
        'light-blue':'#2766b3',
        'dark-blue-2':'#1739648c',
        'light-blue-2': '2b4e7a',
        'white': '#fff',
        'wh-d': '#B1BDCC',
        'dark-blue-3':'#0c223d',
        'trans':'transparent',
        'sm-blue':'#154e95',
    },
    fontFamily: {
        'monst':['Montserrat', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}

