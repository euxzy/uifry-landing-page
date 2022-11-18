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
        dark: {
          1: '#101010',
          2: '#050505'
        },
        gray: {
          1: '#828282',
          2: '#363636'
        }
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
        spin: 'spin 4s linear infinite',
        marquee: 'marquee 20s linear infinite'
      }
    }
  },
  plugins: []
}
