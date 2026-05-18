/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-light-borders": "var(--collection-1-light-borders)",
        "collection-1-light-secondary": "var(--collection-1-light-secondary)",
        "gray-10": "var(--gray-10)",
        "gray-500": "var(--gray-500)",
        mainpositivestate: "var(--mainpositivestate)",
        mainwaringstate: "var(--mainwaringstate)",
        "neutralswhite-98": "var(--neutralswhite-98)",
        "primaryblue-1": "var(--primaryblue-1)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
