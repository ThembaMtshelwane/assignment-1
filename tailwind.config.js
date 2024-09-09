/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#cbdeec",
        primary: "#000000",
        backdrop: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
