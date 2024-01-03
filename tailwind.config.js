/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { 
      'jose': ['Josefin Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
  },
  screens: {
      xs: "320px",
      ss: "420px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
},
  plugins: [],
}