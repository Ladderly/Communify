const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      secondary: {
        100: "#39D2BE",
        200: "#53C7B3",
        300: "#29BAA1",
        400: "#06705D",
      },
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      red: colors.red,
    },
    extend: {
      backgroundImage: {
        login:
          "url('https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
