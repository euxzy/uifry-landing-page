/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      screens: {
        xl: '1240px'
      },
      center: true
    },
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk']
      },
      colors: {
        dark: '#101010',
        gray: '#828282'
      }
    }
  },
  plugins: []
}
