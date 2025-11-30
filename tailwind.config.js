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
        'bca-blue': '#0077C8',
        'bca-syariah-green': '#00A3AD',
        'bsya-blue': '#00AAFF',
        'bsya-yellow': '#FFE600',
      },
    },
  },
  plugins: [],
}
