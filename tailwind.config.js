/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'default': '0 0px 16px 0px rgba(0, 153, 225, 0.5)',
      }
    },
  },
  plugins: [],
}

