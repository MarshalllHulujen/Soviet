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
    "./src/components/assets/Header.jsx"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Expletus'],
    },
    spacing: {
      '4.8': "48px" 
    }
  },
  plugins: [],
};
