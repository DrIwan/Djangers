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
        'hover-btn-dm':'#F6F8FB',
        'success-block':'#B2DB99',
        'success-text':'#8EB377',
        'fail-color':'#EF9AD4',
        'close-color':'#9FAFC6',
    },
    fontFamily: {
        'monst':['Montserrat', 'sans-serif'],
    },
    extend: {
        keyframes: {
            swim: {
                '50%': { transform: 'translateY(-2.5rem) translateX(-1.5rem)' },
            },
            boun:{
                '50%': { transform: 'translateY(-0.5rem)' },

            },
            boun_2:{
                '50%': { transform: 'translateY(0.5rem)' },

            },
           sp:{
                '100%':{transform: 'rotate(360deg)' },
           },

        },
        animation: {
            'swim-sp': 'swim 8s ease-in infinite',
            'boun-cont': 'boun 8s ease-in infinite',
            'boun-cont-2': 'boun_2 8s ease-in infinite',
            'csp':'sp 10s ease-in infinite',
        }

    },
  },
  plugins: [],
}

