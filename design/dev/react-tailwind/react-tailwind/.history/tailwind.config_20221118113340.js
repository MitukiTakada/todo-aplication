/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        secondary: "#9191A4"
        badge: ""
      },
      backgroundImage: {
        'hero-pattern': "url('images/human.jpg')",
      }
    },
  },
  plugins: [],
}
