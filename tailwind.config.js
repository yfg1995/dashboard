/** @type {import('tailwindcss').Config} */

const customColors = {
  brandCharcoalBlack: "#171717",
  brandCharcoalGrey: "#676767",
  brandTextGray: "#aba9a9",
  brandGreen: "#51b045",
  brandRed: "#d42626",
  brandLightBlue: "#42c2dd",
  brandBlue: "#334ED8",
  brandCeruleanBlue: "#2F49D1",
  brandYellow: "#f7b91c",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: customColors,
      backgroundColor: customColors,
      borderColor: customColors,
      textColor: customColors,
      fill: customColors,
    },
  },
  plugins: [],
};
