/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure your paths are correct
  ],
  theme: {
    extend: {
      borderColor: {
        border: '#your-custom-color', // Define border-border
      },
    },
  },
  plugins: [],
};

