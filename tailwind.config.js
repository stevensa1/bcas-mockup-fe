/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bca-purple': '#5a3e85',
        'bca-gold': '#d4af37',
        'bca-purpleLight': '#6b4e96',
      },
    },
  },
  plugins: [],
}
