/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "nav-shadow":"11px 6px 32px -13px rgba(0, 0, 0, 0.25)"
      },
      backgroundColor:{
        "drawer-overlay":"rgba(0,0,0,.6)"
      }
    },
  },
  plugins: [],
}
