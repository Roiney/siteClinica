/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6D28D9', // Violet-700
          light: '#8B5CF6', // Violet-500
          dark: '#5B21B6', // Violet-800
        },
        secondary: {
          DEFAULT: '#7C3AED', // Violet-600
          light: '#A78BFA', // Violet-400
          dark: '#6D28D9', // Violet-700
        },
        accent: {
          DEFAULT: '#8B5CF6', // Violet-500
          light: '#A78BFA', // Violet-400
          dark: '#7C3AED', // Violet-600
        },
        success: {
          DEFAULT: '#66BB6A',
          light: '#81C784',
          dark: '#388E3C',
        },
        warning: {
          DEFAULT: '#FFCA28',
          light: '#FFD54F',
          dark: '#FFA000',
        },
        error: {
          DEFAULT: '#EF5350',
          light: '#E57373',
          dark: '#D32F2F',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
};