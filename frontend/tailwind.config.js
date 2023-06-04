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
        'light':'#E7F7FE',
        'reflection':'#F4DACB',
        'shadow':'#c3b3d9fc',
        'active-btn-t': '#4572AA',
        'active-btn-rect':'#CCDAEE',
        'hover-btn-rect':'#EBF2FC',
    },
    fontFamily: {
        'monst':['Montserrat', 'sans-serif'],
    },
    extend: {
        keyframes: {
            swim: {
                '50%': { transform: 'translateY(-2.5rem) translateX(-1.5rem)' },
            }
        },
        animation: {
            'swim-sp': 'swim 8s ease-in infinite',
        }

    },
  },
  plugins: [],
}

