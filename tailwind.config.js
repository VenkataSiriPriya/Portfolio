/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'react-blue': '#61dafb',
        'neon-green': '#39FF14',
        'orange-theme': '#FFA500', // Orange theme
      },
      boxShadow: {
        'react-blue': '0 0 10px #61dafb, 0 0 20px #61dafb',
        'orange-theme': '0 0 10px #FFA500, 0 0 20px #FFA500',
      },
      animation: {
        'fade-in-left': 'fadeInLeft 1s ease-out both',
        'fade-in-right': 'fadeInRight 1s ease-out both',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
