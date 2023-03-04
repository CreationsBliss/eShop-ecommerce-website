/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/**/*.html"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#222222',
        'paragraph': '#777777',
        'separatorColor': '#eeeeee',
        'accentOne': '#ffba00',
        'accentTwo': '#ff6c00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
