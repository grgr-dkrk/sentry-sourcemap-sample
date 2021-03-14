const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const SentryCliPlugin = require('@sentry/webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new SentryCliPlugin({
      release: `my-project-${process.env.npm_package_version}`,
      include: './dist',
    }),
  ],
  devtool: 'hidden-source-map',
})
