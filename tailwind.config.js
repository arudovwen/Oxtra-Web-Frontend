/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gordita-regular': ['Gordita Regular'],
        'gordita-thin': ['Gordita Thin'],
        'gordita-light': ['Gordita Light'],
        'gordita-medium': ['Gordita Medium'],
        'gordita-bold': ['Gordita Bold'],
        'gordita-black': ['Gordita Black'],
        'gordita-ultra': ['Gordita Ultra'],
      },
      fontSize: {
        xxxs: ['12px', { lineHeight: '18px' }],
        xxs: ['14px', { lineHeight: '14px' }],
        xs: ['16px', { lineHeight: '16px' }],
        xsL: ['16px', { lineHeight: '24px' }],
        sm: ['20px', { lineHeight: '30px' }],
        smL: ['20px', { lineHeight: '20px' }],
        lg: ['24px', { lineHeight: '33px' }],
        xl: ['56px', { lineHeight: '76.11px' }],

        // // Headings H6 - H1
        // '2xl': ['28px', { lineHeight: '38px', letterSpacing: '2px' }],
        // '3xl': ['32px', { lineHeight: '36px', letterSpacing: '1.15px' }],
        '4xl': ['40px', { lineHeight: '40px' }],
        '4xlL': ['40px', { lineHeight: '54px' }],
        // '5xl': ['56px', { lineHeight: '58px', letterSpacing: '2px' }],
        // '6xl': ['78px', { lineHeight: '1' }],
      },

      colors: {
        brandGreen: {
          100: '#8ce99a',
          300: '#42864F',
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
