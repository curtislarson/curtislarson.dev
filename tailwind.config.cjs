/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      background: "#22212C",
      primary: {
        500: "#9580ff",
      },
    },
  },
  daisyui: {
    themes: ["dracula"],
    darkTheme: "dark",
  },
};
