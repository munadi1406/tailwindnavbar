/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        font1: 'Libre Franklin, sans-serif',
        font2: 'Basic,sans-serif',
      },
      backgroundColor: {
        color1: '#874C62',
        color2: '#C98474',
        color3: '#A7D2CB',
      },
      colors:{
        color1: '#874C62',
        color2: '#C98474',
        color3: '#A7D2CB',
      },
    },
  },
  plugins: [],
}