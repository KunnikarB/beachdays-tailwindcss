/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '2560px',
      },
      fontFamily: {
        sans: ["'Roboto Flex'", 'sans-serif'],
        serif: ["'Petrona'", 'serif'],
      },
      colors: {
        dark: '#222222',
        light: '#d9d9d9',
        green: '#dbf7af',
      },
      animation: {
        'spin-slow': 'spin 32s linear infinite',
      },
    },
  },
  plugins: [],
};

npx tailwindcss -i ./src/css/styles.css -o ./output.css --watch