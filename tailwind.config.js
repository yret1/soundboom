/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        56: '3.5rem',
        40: '2.5rem',
        32: '2rem',
        28: '1.75rem',
        24: '1.5rem',
        18: '1.125rem',
        14: '0.875rem',
        13: '0.8125rem',
      },
        letterSpacing:{
          2: '2px',
          1.5: '1.5px',
          1.15: '1.15px',
          1.7: '1.7px',
          1.3: '1.3px',
          10: '10px',
          1: '1px',
        },

        lineHeight: {
          38: '2.375rem',
          33: '2.0625rem',
          24: '1.5rem',
          25: '1.5625rem',
          19: '1.1875rem',
        },
      fontFamily: {
        'manrope' : ['Manrope', 'sans-serif'],
      },
      colors: {
        'primary' : {
          100: '#D87D4A',
          200: '#fbaf85',
        },
        'secondary' : {
          100: '#101010',
          200: '#F1F1F1',
          300: '#FAFAFA'
        }
      }
    },
  },
  plugins: [],
}

