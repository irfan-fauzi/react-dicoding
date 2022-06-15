const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.grid-cards' : {
          gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`
        },
      }
      addUtilities(utilities)
    }),
    
  ],
}
