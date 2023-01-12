/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CDA274",
        dark: "#292F36",
        lightGray: "#F4F0EC",
        secondary: "#4D5053",
      },
      backgroundImage: {
        "banner": "url('/assets/banner.png')",
      },
    },
  },
  plugins: [],
};
