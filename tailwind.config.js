module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#4471af',
          secondary: '#0055b7',
          accent: '#d841ab',
          neutral: '#263540',
          'base-100': '#EDEDED',
          info: '#81AFD5',
          success: '#15745B',
          warning: '#E9B035',
          error: '#F71D3A',
        },
      },
      'cupcake',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },

  safelist: ['outline-none'],
}
