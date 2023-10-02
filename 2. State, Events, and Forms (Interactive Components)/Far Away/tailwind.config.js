/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        monoton: 'Monoton, cursive',
      },
    },
  },
  plugins: [],
};
