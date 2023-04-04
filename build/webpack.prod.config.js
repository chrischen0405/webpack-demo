const commonConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production'
}

module.exports = merge(commonConfig, prodConfig)