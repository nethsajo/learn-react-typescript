/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'selector',
  content: ['./src/*.{ts,tsx}', './src/features/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xxs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
  },
};
