/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
        rotate: {
            '35': '35deg',
            '145': '145deg',
            '-35': '-35deg'
        },
        spacing: {
            '28': '7rem',
            '36': '9rem'
        },
        inset: {
            '4': '4rem',
            '3': '3rem',
            '-4': '-4rem',
            '-3': '-3rem',
        },
        colors: {
            blue: {
                ...colors.blue,
                dark: '#14173a',
            },
        }
    }
  },
  variants: {},
  plugins: []
}
