/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'default': '0 0px 8px 0px rgb(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

