/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4e7cba",
        secondary: "#af93d4",
        tertiary: "#b46ec6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "custom-blue": "#c5d8e2",
        "text-locomotive": "#283618",
        "background-locomotive": "#FEFAE0",
        "primary-locomotive": "#606C38",
        "secondary-locomotive": "#DDA15E",
        "accent-locomotive": "#BC6C25",
        "modern-portfolio-button-blue": "#48bfe3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "zen-maru": ["Zen Maru Gothic", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        medium: "500",
      },
    },
  },
  plugins: [],
};
