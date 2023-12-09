/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        salice: {
          50: "#9DA886",
          100: "#929C7C",
          200: "#879173",
          300: "#7C8569",
          400: "#717960",
          500: "#666E56",
          600: "#5B624D",
          700: "#505643",
          800: "#454B3A",
          900: "#3A3F30",
        },
      },
      boxShadow: {
        material: "0px 4px 5px 0px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [],
};
