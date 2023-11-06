/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f2e6fc",
        secondary: "#752eb3",
        tertiary: "#b0b0b0",
        "black-100": "#1a1a1a",
        "black-200": "#090325",
        "white-100": "#000000",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
