/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': "#0c2340",
          '200': "#333",
          '300': '#EDF2F9'
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Rakkas: ["Rakkas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
