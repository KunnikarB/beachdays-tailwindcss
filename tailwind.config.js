/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto Flex'", 'sans-serif'],
        serif: ["'Petrona'", 'serif'],
      },
      colors: {
        dark: '#222222',
        light: '#d9d9d9',
        green: '#dbf7af',
      },
      backgroundImage: {
        hero: 'linear-gradient(232.89deg, rgba(255,246,218,0.2) 28.46%, rgba(255,228,205,0.2) 28.47%, rgba(255,216,196,0.2) 99.49%)',
      },
    },
  },
  plugins: [],
};
