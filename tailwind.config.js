/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        utility: {
          primary: '#003F7F',    // Deep professional blue
          secondary: '#0066CC',  // Brighter blue for CTAs
          accent: '#00A651',     // Success green
          text: '#333333',       // Dark gray text
          textLight: '#666666',  // Light gray text
          border: '#E5E7EB',     // Light gray borders
          bgLight: '#F7F9FB',    // Light gray background
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'utility': '0 1px 3px rgba(0,0,0,0.12)',
        'utility-lg': '0 4px 6px rgba(0,0,0,0.07)',
      }
    },
  },
  plugins: [],
}
