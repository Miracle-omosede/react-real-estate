/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bricolage: ['Bricolage Grotesque', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        londrina: ['Londrina Outline', 'cursive'],
      },
      screens: {
        xs: "450px",
      }
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")]
}

