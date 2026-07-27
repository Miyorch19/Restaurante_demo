/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0D0D', // or #111111
        accent: '#E62235',
        cream: '#FEFCEA',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Lilex"', 'monospace'],
        // Tailwind's default sans is used for everything else
      }
    },
  },
  plugins: [],
}
