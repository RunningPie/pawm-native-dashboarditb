/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#468FE5",
          "dark": "#0A2D41",
          "secondary": "#2E5C76",
        } // nanti ganti sesuai primary & secondary colors di figma
      },
      gradientColorStops: {
        gradientStart: "#65B4BB",
        gradientEnd: "#04707A",
      },
      black: {
        // sesuaikan aja blacknya nanti :D
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
    },
    fontFamily: {
      // ini juga nanti perlu sesuaikan
      // formatnya: <nama-variabel>: [<nama font yang dibuat di useFonts>, <typeface>]
      smregular: ["SpaceMono-Regular", "sans-serif"],
      "karla-bold": ["Karla-Bold", "sans-serif"],
      "karla-regular": ["Karla-Regular", "sans-serif"],
      "karla-medium": ["Karla-Medium", "sans-serif"],
      "karla-semibold": ["Karla-SemiBold", "sans-serif"],
      "karla-light": ["Karla-Light", "sans-serif"],
      "karla-italic": ["Karla-Italic", "sans-serif"],
      "pop-black": ["Poppins-Black", "sans-serif"],
      "pop-bold": ["Poppins-Bold", "sans-serif"],
      "pop-extra-bold": ["Poppins-ExtraBold", "sans-serif"],
      "pop-italic": ["Poppins-Italic", "sans-serif"],
    },
  },
  plugins: [],
};
