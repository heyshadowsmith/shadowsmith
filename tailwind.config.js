/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        chalkboard: '#2b2b2b',
        lime: '#86bb1b',
        sky: '#00e0e0',
        haze: '#d4d0ab'
      }
    }
  },
  variants: {},
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        body: {
          color: config('theme.colors.gray.900')
        },
        'h1, h2': {
          'font-weight': config('theme.fontWeight.semibold')
        },
        h1: {
          'margin-top': config('theme.spacing.["4"]'),
          'margin-bottom': config('theme.spacing.["6"]'),
          'font-size': config('theme.fontSize.["3xl"]')
        },
        h2: {
          'margin-top': config('theme.spacing.["2"]'),
          'margin-bottom': config('theme.spacing.["4"]'),
          'font-size': config('theme.fontSize.["2xl"]')
        },
        '.nuxt-content a': {
          color: config('theme.colors.lime'),
          'font-weight': config('theme.fontWeight.semibold')
        },
        p: {
          'margin-bottom': config('theme.spacing.["4"]')
        },
        blockquote: {
          'font-style': 'italic',
          'padding-left': config('theme.spacing.["4"]'),
          'border-left': `4px solid ${config('theme.colors.haze')}`,
          'margin-bottom': config('theme.spacing.["4"]'),
          color: config('theme.colors.gray.600')
        },
        'ul, ol': {
          'padding-left': config('theme.spacing.["5"]'),
          'margin-bottom': config('theme.spacing.["4"]')
        },
        ul: {
          'list-style': config('theme.listStyleType.disc')
        },
        ol: {
          'list-style': config('theme.listStyleType.decimal')
        },
        'ul li, ol li': {
          'margin-bottom': config('theme.spacing.["1"]')
        }
      })
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
