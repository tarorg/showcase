// tailwind.config.cjs
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'dribbble-pink': '#ea4c89',
        'dribbble-gray': '#333333',
        'dribbble-light-gray': '#f7f7f7',
        'dribbble-border-gray': '#e0e0e0',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}