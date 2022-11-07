/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blaa: "#0055BF",
        groen: "#237841",
        gul: "#FECC33",
        roed: "#C91A09",
        hvid: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
