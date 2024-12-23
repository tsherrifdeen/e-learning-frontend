/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F0A305",
        lightyellow:"#fef6e6",
        darkblue: "#020F24",
        blue: "#055FF0",
        brown: "#AC5415",
        darkslateblue: "#353F50",
        lightslateblue: "#555E6C",
        midnightBlue: "#033484",
        lightgrey: "#8B919A",
        lightblue:"#b2cdfa"
      },
      fontFamily: {
        poppins: ["Poppins", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
