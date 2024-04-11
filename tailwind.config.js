/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.css", 
  "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      }, 
      colors: {
        'custom-blue': '#041926',
        'custom-color': '#37454F',
      },
      boxShadow: {
        'custom-hover': '0 4px 6px -1px rgba(0, 234, 164, 0.5)', 
      },
      borderRadius: {
        'custom': '24px',
      },
        },
  },
  plugins: [],
}