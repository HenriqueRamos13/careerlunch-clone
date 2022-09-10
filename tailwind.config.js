module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
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
