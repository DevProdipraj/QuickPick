/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: "#003049",
      secondary: "#ff6600",
      text: "#ffffff",
      border: "#780000",
      dark: "#0d1015",
    },
    extend: {
      fontFamily: {
        heading1: ["Heading1", "sans-serif"],
        heading2: ["Heading2", "sans-serif"],
        text: ["Text", "sans-serif"],
        paragraph: ["Paragraph", "sans-serif"],
        textItalic: ["TextItalic", "sans-serif"],
      },
    },
  },
};
