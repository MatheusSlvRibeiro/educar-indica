/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        second: "var(--second-color)",
        whiteColor: "var(--whiteColor)"
      }
    },
  },
  plugins: [],
};
