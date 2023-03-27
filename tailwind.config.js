/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/App.js",
    "./src/About.jsx",
    "./src/Clubs.jsx",
    "./src/Contents.jsx",
    "./src/Events.jsx",
    "./src/Home.jsx",
    "./src/Login.jsx",
    "./src/News.jsx",
    "./src/components/assets/Header.jsx",
    "./src/components/assets/Footer.jsx"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': 'Expletus Sans',
    },
    colors: {
      'cyan': "#21AFFF"
    },
    spacing: {
      '4.8': "48px" 
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': "5.875rem"
    },
    borderRadius: {
      'lg': '1.25rem'
    },
  },
  plugins: [],
};
