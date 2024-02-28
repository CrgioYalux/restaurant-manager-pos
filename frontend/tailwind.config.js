/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    { 
      pattern: /(bg|text)-(blue|green|red|yellow|brand)-./,
      variants: ['hover', 'focus'],
    }
  ],
  darkMode: "class",
  plugins: [],
}
