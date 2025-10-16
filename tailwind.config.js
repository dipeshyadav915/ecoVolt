/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8.5xl": "7rem",
        "10xl": "10rem",
        "21xl": "24rem",
      },
      fontWeight: {
        med: "550",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        128: "32rem",
        35: "10rem",
        65: "21rem",
      },
      width: {
        128: "32rem",
        65: "21rem",
      },
      screens: {
        es: "320px",
      },
    },
  },
  plugins: [],
};
