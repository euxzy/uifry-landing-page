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
        mint: '#00FFA3',
        dark: '#101010',
        gray: '#828282'
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
        spin: 'spin 4s linear infinite'
      }
    }
  },
  plugins: []
}
