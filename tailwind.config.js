/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622" // nanti ganti sesuai primary & secondary colors di figma
      },
      gradientColorStops: {
        gradientStart: "#65B4BB",
        gradientEnd: "#04707A"
      },
      black: { // sesuaikan aja blacknya nanti :D
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
    },
    fontFamily: {
      // ini juga nanti perlu sesuaikan
      // formatnya: <nama-variabel>: [<nama font yang dibuat di useFonts>, <typeface>]
      smregular: ["SpaceMono-Regular", "sans-serif"],
      karla_bold: ["Karla-Bold", "sans-serif"],
      karla_regular: ["Karla-Regular", "sans-serif"],
      karla_medium: ["Karla-Medium", "sans-serif"],
      karla_semibold: ["Karla-SemiBold", "sans-serif"],
      karla_light: ["Karla-Light", "sans-serif"],
      karla_italic: ["Karla-Italic", "sans-serif"],
      pop_black: ["Poppins-Black", "sans-serif"],
      pop_bold: ["Poppins-Bold", "sans-serif"],
      pop_extrabold: ["Poppins-ExtraBold", "sans-serif"],
      pop_italic: ["Poppins-Italic", "sans-serif"],
    }
  },
  plugins: [],
}