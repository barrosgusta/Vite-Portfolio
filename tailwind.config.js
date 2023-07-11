/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens : {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      boxShadow: {
        'default': '0 0px 8px 0px rgb(0, 0, 0, 0.4)',
      },
      fontFamily: {
        'sfp': ['"SF Pro Display"', 'sans-serif'],
        'sfpbold': ['"SF Pro Display Bold"', 'sans-serif'],
        'sfpmedium': ['"SF Pro Display Medium"', 'sans-serif'],
        'sfpthinitalic': ['"SF Pro Display Thin Italic"', 'sans-serif'],
        'sfpultrathinitalic': ['"SF Pro Display Ultra Thin Italic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

