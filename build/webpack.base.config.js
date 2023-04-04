// CommonJS语法
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  // 入口文件
  entry: path.resolve(__dirname, '../src/index.js'),
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    // 端口
    port: 8090,
    // 静态资源目录
    static: path.resolve(__dirname, 'dist')
  }
}