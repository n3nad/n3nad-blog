const path = require('path')

module.exports = {
  components: './components/**/*.{js,jsx}',
  webpackConfig: require('./webpack.config.js'),
  require: [path.resolve(__dirname, 'setup.js')],
  pagePerSection: true,
  styles: {
    StyleGuide: {
      content: {
        maxWidth: '100%',
      },
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'global/Layout.jsx')
  }
}
