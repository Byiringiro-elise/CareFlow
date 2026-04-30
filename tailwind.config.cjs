/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08111f',
          900: '#0f172a',
          800: '#1e293b',
        },
        calm: {
          50: '#eefdf8',
          100: '#d9fbef',
          200: '#b6f5df',
          300: '#84e9c5',
          400: '#52d7a6',
          500: '#21b987',
          600: '#16916b',
        },
        mist: {
          50: '#f7fbff',
          100: '#edf5ff',
          200: '#dce8ff',
          300: '#bfd3ff',
        },
        sand: {
          50: '#fff9f2',
          100: '#fff2e1',
          200: '#ffe0b5',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(2,6,23,0.24)',
      },
      fontFamily: {
        sans: ['Manrope', 'Aptos', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.72' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        breathe: 'breathe 3.5s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
      },
    },
  },
  plugins: [],
};