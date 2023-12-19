/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors:{
        'landingbg':'#fdefd5',
        'textcoklat':'#2f1613'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-2': 'infinite-scroll-2 25s linear infinite'
      },
      keyframes :{
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-2': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

