module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      minWidth: {
        '120px': '120px'
      },
      width: {
        '260px': '260px',
        'avatar': '40px'
      },
      height: {
        'avatar': '40px',
        'header': '80px'
      },
      margin: {
        'main-container': '80px 0px 0px 0px'
      },
      inset: {
        sidebar: '80px',
        bottom: '0'
      }
    },
  },
  variants: {},
  plugins: [],
}