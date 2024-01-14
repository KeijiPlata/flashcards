/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgdark':'#0a092d',
        'frdark':'#2e3856',
      }
    },
  },
  plugins: [],
}