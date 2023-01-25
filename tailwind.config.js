/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors :{
        'persian-indigo' : {
          50: '#f4f0fe' ,
          100: '#dbcef9',
          200: '#c2acf4',
          300: '#a88aee',
          400: '#7745e4',
          500: '#5e23df',
          600: '#40169c',
          700: '#32127a',
          800: '#1e0a47',
          900: '#0f0625', 
        }
    }
  },
  plugins: [],
}
