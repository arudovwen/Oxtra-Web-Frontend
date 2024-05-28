/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        lg: '16px',
        xl: '0',
        '2xl': '0',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1480px',
      },
    },
    extend: {
      fontFamily: {
        gordita: ['Gordita Regular'],
        'gordita-regular': ['Gordita Regular'],
        'gordita-thin': ['Gordita Thin'],
        'gordita-light': ['Gordita Light'],
        'gordita-medium': ['Gordita Medium'],
        'gordita-bold': ['Gordita Bold'],
        'gordita-black': ['Gordita Black'],
        'gordita-ultra': ['Gordita Ultra'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #438950 0%, #19331E 100%)',
      },
      fontSize: {
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '14px' }],
        base: ['16px', { lineHeight: '16px' }],
        lg: ['20px', { lineHeight: '20px' }],
        xl: ['24px', { lineHeight: '33px' }],
        // Headings H6 - H1
        '2xl': ['32px', { lineHeight: '32px' }],
        '3xl': ['40px', { lineHeight: '48px' }],
        '4xl': ['56px', { lineHeight: '76.11px' }],
      },

      colors: {
        brandGreen: {
          100: '#8ce99a',
          300: '#42864F',
          400: '#0A3421',
        },
        brandGray: {
          100: '#646668',
          200: '#F4F6F8',
          300: '#444648',
          400: '#444444',
          500: '#242628',
        },
      },
    },
  },
};
