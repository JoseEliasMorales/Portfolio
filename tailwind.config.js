/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        greyBrand100: '#858B91',
        greyBrand200: '#6c757d',
        greyBrand300: '#2C2D34',
        greyBrand400: '#343a40 ',
        greyBrand500: '#495057',
        greyBrand600: '#9FA2AB',
        ligthBrand100: '#c2c6ce',
        ligthBrand200: '#e6e6e6',
        ligthBrand300: '#e2e8f0',
        orangeBrand100: '#fddbd7',
        orangeBrand200: '#EF3724',
        blackBrand100: '#171925'
      },
      backgroundImage: {
        'hero-pattern': 'url("./src/assets/background.jpg")'
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif']
      },
      keyframes: {
        dropdown: {
          '0%': {
            height: '0'
          },
          '100%': {
            height: 'screen'
          }
        }
      },
      animation: {
        dropdown: 'dropdown 3s ease-in-out '
      }

    }

  },
  plugins: []
}
