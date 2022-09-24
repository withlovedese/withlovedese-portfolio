/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#edf7fc",
        },
        purple: {
          1: "#141852",
          2: "#070B34",
          3: "#2B2F77",
          4: "#483475",
          5: "#6B4984",
          6: "#855988",
          7: "#d7ccf0",
          8: "#EEE9F8",
          9: "#A98AAB",
        },
      },
    },
  },
  plugins: [],
};
