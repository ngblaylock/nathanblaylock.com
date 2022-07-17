const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#404040',
      primary: '#680909',
      secondary: '#093589',
      gray: '#838D96',
      light: '#EBEBEB',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        'sans': ['Lexend', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
}
