/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xsm: "480px",
      },
      colors: {
        secondary: "#cbdeec",
        primary: "#000000",
        backdrop: "#f8f8f8",
      },
      boxShadow: {
        card: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit,minmax(300px,350px))",
      },
    },
  },
  plugins: [],
};
