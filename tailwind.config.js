/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#050811",
        bgCard: "rgba(15, 23, 42, 0.85)",
        electricBlue: "#3B82F6",
        electricBlueSoft: "#60A5FA",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59,130,246,0.7)",
      },
    },
  },
  plugins: [],
};
