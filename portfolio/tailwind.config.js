/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      bgChip: "#dadce2",
      white: "#fff",
      bgGrey: "#e7e7e7",
      bgWhite: "#f5f5f5",
      fontOrange: "#e76f51",
      grey: "#555",
    },
  },
  plugins: [],
};
