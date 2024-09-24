/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    colors: {
      'green': '#96C72C',
      'darkgreen': '#85B223',
      'lightgreen': '#EBF1DE',
      'violet': '#574599',
      'white' : '#ffffff',
      'grey' : '#373938',
      'darkgrey' : '#979797',
      'lightgrey' : '#F6F6F3',
      'black' : '#000000',
      'blue' : '#2C3C54',
      'pink' : '#C5A7CD',
      'brown' : '#512511',
      'darkbrown' : '#220D03',
      'yellow' : '#FFAD15',
    },
    fontFamily: {
      'sans': ['Karla', 'sans-serif'],
      'karla': ['Karla', 'sans-serif'],
      'kollektif': ['Kollektif', 'sans-serif'],
      'body': ['Karla', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['18px', '24px'],
      lg: ['20px', '24px'],
      xl: ['22px', '26px'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1250px',
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },
};
