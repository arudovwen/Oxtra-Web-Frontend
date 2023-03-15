/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['16px', { lineHeight: '16px' }],
      sm: ['13px', { lineHeight: '25px', letterSpacing: '2px' }],
    },
    extend: {
      colors: {
        brand: {
          amber: '#D87D4A',
          pastelYellow: '#FBAF85',
        },
        brandBlack: {
          50: '#101010',
          100: '#000000',
        },

        brandGray: {
          100: '#FAFAFA',
          200: '#F1F1F1',
          300: '#4C4C4C',
        },
      },
    },
  },
};
