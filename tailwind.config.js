/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "breathe": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.2)"  },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // Background svg animations
        "bg-breathe-1": "breathe 30s infinite",
        "bg-breathe-2": "breathe 25s infinite",
        "bg-breathe-3": "breathe 32s infinite",
        "bg-breathe-4": "breathe 22s infinite",
        "bg-breathe-5": "breathe 16s infinite",
        "bg-breathe-6": "breathe 28s infinite",
        "bg-breathe-7": "breathe 34s infinite",
        "bg-breathe-8": "breathe 20s infinite",
        "bg-breathe-9": "breathe 28s infinite",
        "bg-breathe-10": "breathe 18s infinite",
        "bg-breathe-11": "breathe 24s infinite",
        "bg-breathe-12": "breathe 29s infinite",
      },
      boxShadow: {
        'default': '0 0px 25px 0px rgb(50, 50, 50, 0.3)',
        'default-sm': '0 0px 4px 0px rgb(35, 35, 35, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}