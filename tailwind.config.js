/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['16px', { lineHeight: '16px' }],
      sm: ['20px', { lineHeight: '30px' }],
      lg: ['24px', { lineHeight: '33px' }],
      xl: ['56px', { lineHeight: '76.11px' }],
    },
    extend: {
      colors: {
        brandGreen: {
          300: '#42864F',
        },
        brandGray: {
          100: '#646668',
          // not done 200
          200: '#F1F1F1',
          300: '#444648',
        },
      },
    },
  },
};
