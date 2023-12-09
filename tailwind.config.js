/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        whitesmoke: "#F5F5F5",
        saltpan: {
          50: "#f4fbf5",
          100: "#d5f2da",
          200: "#abe4b5",
          300: "#79cf8b",
          400: "#4eb368",
          500: "#34984e",
          600: "#277a3e",
          700: "#236236",
          800: "#204f2f",
          900: "#1e4329",
          950: "#0c2715",
        },
        "black-white": {
          50: "#fffffa",
          100: "#feffd5",
          200: "#fefcaa",
          300: "#fdf774",
          400: "#fbe73c",
          500: "#f9d816",
          600: "#eabb0c",
          700: "#c2920c",
          800: "#9a7012",
          900: "#7c5c12",
          950: "#432f07",
        },
        primary: "#0d3428",
        secondary: "#ffcf83",
        fill: "#fbfaf3",
        sub: "#f5f4ee",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        jakata: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xss: "360px",
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    
  },
  plugins: [require("daisyui")],
};
