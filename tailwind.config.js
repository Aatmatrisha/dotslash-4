/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Redhat: ["Red Hat Display", "sans-serif"],
        Mouse: ["Mouse Memoirs", "sans-serif"],
      }
    },
    colors: {
      secondary: "#45CA00",
      primary: "#050505"
    }
  },
  plugins: [],
}
