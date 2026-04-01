/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-theme]'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3fbfb',
          100: '#e6f7f6',
          200: '#bfecec',
          300: '#99e0e1',
          400: '#4fd3d3',
          500: '#18bfbf',
          600: '#149a9a',
          700: '#0f6f6f',
          800: '#0a4c4c',
          900: '#033030'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'card': '0 6px 18px rgba(16,24,40,0.08)'
      }
    }
  },
  plugins: []
}
