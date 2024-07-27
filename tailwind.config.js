/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": {
          "gradient-start": "#5A84C0",
          "gradient-end": "#594ED2",
        },
        "black-neutral": "#1C1C1C",
        "gray-20": "#9E9E9E",
        "gray-10": "#DFDFDF",
        "gray-00": "#F0F0F0",
        "white-neutral": "#FFFFFF",
      },
      boxShadow: {
        '1': '0px 1px 2px rgba(0, 0, 0, 0.2)',
        '2': '0px 2px 4px rgba(0, 0, 0, 0.2)',
        '3': '0px 2px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
