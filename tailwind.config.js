/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'], // Specify the files Tailwind should scan for class usage
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px",
        },
      },
    },
  },
  plugins: [],
};
