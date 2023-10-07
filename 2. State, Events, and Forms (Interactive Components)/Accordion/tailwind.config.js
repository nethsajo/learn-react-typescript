/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        monoton: 'Monoton, cursive',
      },
      keyframes: {
        'accordion-up': {
          '0%': {
            height: 'var(--accordion-content-height)',
          },
          '100%': {
            height: 0,
          }
        },
        'accordion-down': {
          '0%': {
            height: 0,
          },
          '100%': {
            height: 'var(--accordion-content-height)',
          }
        }
      },
      animation: {
        'accordion-up': 'accordion-up 200ms ease-out',
        'accordion-down': 'accordion-down 200ms ease-out',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
