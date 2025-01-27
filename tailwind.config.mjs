/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: "#34b1eb",
        primarygrey: "#F2F0F1",
      },
      fontFamily:{
        gabarito: "Gabarito"
      }
    },
  },
  plugins: [],
};
