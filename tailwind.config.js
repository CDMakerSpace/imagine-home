/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5'
        },
        secondary: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
          dark: '#db2777'
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a'
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(30, 41, 59, 0.8)'
        },
        text: {
          light: '#1e293b',
          dark: '#f1f5f9'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ]
      },
      animation: {
        'theme-toggle': 'theme-toggle 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'theme-toggle': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(0.95) rotate(15deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};