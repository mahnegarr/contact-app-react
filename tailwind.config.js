/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'sans':[ 'Inter', 'system-ui', 'Avenir',' Helvetica', 'Arial', 'sans-serif']
      },
      maxWidth:{
        '1000px':'1000px'
      }
    },
  },
  plugins: [],
}

