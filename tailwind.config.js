/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4BAF47",
        secondary: "#EDBF44",
        white1: "#FEFEFE",
        white2: "#888781",
        cream: "#F8F7F1",
        dark: "#24231D",
        dark2: "#1F1E17",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
