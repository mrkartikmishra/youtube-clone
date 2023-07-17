/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#303030",
        red: "#ff0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
