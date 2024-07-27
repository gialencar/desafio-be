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
        "gray-20": "#E9E9E9",
        "gray-10": "#F0F0F0",
        "gray-00": "#FDFDFD",
        "white-neutral": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
