/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
      keyframes: {
        'accordion-up': {
          from: { height: 'var(--accordion-content-height)' },
          to: { height: 0 },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--accordion-content-height)' },
        },
      },
      animation: {
        'accordion-up': 'accordion-up 200ms ease-out',
        'accordion-down': 'accordion-down 200ms ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};
