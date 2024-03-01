/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen': '95vh',
      },
      colors: {
        chartreuse: {
          500: '#7FFF00', // Base chartreuse color
          // Add other shades as needed
        },
        'green-1': '#65a765',
        'green-2': '#90ee90',
        'orange-1': '#eec890',
        'purple-1': '#9165a7',
        'purple-2': '#cf90ee',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
