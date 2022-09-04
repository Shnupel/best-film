/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "lg": { "max": "992px" },
      "md": { "max": "768px" },
      "sm": { "max": "320px" }
    },
    container: {
      padding: "10px",
      center: true
    },
    extend: {
      colors: {
        black: "#171717",
        white: "rgba(255, 255, 255, 1)",
        orange: "#FF6C01",
        lightYellow: "#E3AC3C",
        lightBlue: "#80BECB",
        darkBlue: "rgba(37, 42, 44, 1)",
        darkGrey: "#181818"
      },
      backgroundImage: {}
    },
  },
  plugins: [],
}

