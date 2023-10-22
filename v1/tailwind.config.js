/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#FFCA01",
        colorDark: "#2C2C2C",
      },
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
