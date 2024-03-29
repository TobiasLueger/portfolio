/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        bgChip: "#dadce2",
        white: "#fff",
        bgGrey: "#e7e7e7",
        bgWhite: "#f5f5f5",
        fontOrange: "#e76f51",
        grey: "#555",
        greyDark: "#1E212B",
        fontNavyBlue: "#2679cf",
        fontPurple: "#B370B0",
        fontGreen: "#3F826D",
      },
      screens: {
        footerHeight: { raw: "(max-height: 675px)" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
