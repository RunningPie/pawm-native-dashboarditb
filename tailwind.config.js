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
      black: { // sesuaikan aja blacknya nanti :D
        DEFAULT: "#000",
        100: "#1E1E2D",
        200: "#232533",
      },
    },
    fontFamily: {
      // ini juga nanti perlu sesuaikan
      // formatnya: <nama-variabel>: [<nama font yang dibuat di useFonts>, <typeface>]
      smregular: ["SpaceMono-Regular", "sans-serif"]
    }
  },
  plugins: [],
}