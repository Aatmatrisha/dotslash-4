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
  },
  plugins: [],
}
