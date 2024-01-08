/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'deskstop' : "url('./src/assets/bg-2.jpg')",
      'tablet' : "url('./src/assets/bg-2 croptw0.jpg')",
      'mobile' : "url('./src/assets/mobile-bg-2.jpg')"
    },
    fontFamily: { 
      'jose': ['Josefin Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']

  },
  screens: {
      xxs: "300px",
      xs: "350px",
      ss: "420px",
      sm: "708px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
},
  plugins: [],
}