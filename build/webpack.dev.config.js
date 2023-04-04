const commonConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: 'development'
}

module.exports = merge(commonConfig, devConfig)