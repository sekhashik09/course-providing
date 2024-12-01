/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
      "./node_modules/flowbite/**/*.js"
    // Add paths to other files if needed
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#ff7e5f', // Starting color
        'gradient-end': '#feb47b', // Ending color
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      },
    },
  },
  plugins: [  require('flowbite/plugin')],
}




