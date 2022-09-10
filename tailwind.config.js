/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#ebf0fc",
      secondary: "#3b96b7",
      ...require("tailwindcss/colors"),
    },
  },
  plugins: [],
};
