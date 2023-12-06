/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '1fr 1fr 1fr 1fr 2fr',
      },
    },
  },
  plugins: [],
};
