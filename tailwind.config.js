/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        stone100:'hsl(30, 54%, 90%)',
        stone150: 'hsl(30, 18%, 87%)',
        stone600: 'hsl(30, 10%, 34%)',
        stone900: 'hsl(24, 5%, 18%)',
        brown800: 'hsl(14, 45%, 36%)',
        rose800: 'hsl(332, 51%, 32%)',
        rose50: 'hsl(330, 100%, 98%)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Young Serif', 'serif']
      }
    },
  },
  plugins: [],
}

