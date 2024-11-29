/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f3b69",
        alt: "#695d2f"
      },
      maxWidth: {
        "app-layout": "1500px"
      },
      gridTemplateColumns: {
        "home-grid": "auto 400px"
      }
    },
  },
  plugins: [],
}