module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#142F43',
        secondary: '#6E85B2',
        white:'#FFFFFF',
        green: '#34BE82',
        gray: '#EADEDE',
        yellow: '#FBF46D',
        pink: '#C32BAD',
        facebook:'#0F52BA',
        twitter: '#3EDBF0',
      },
      height: {
        topGr: '4px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
