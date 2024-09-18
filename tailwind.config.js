/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary_yellow: "#FFCD38",
        primary_red: "#C22723",
        primary_gray: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
