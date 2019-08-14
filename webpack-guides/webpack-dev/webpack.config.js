const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot :true,
    port :3000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // new webpack.NamedModulesPlugin(), //当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    // new webpack.HotModuleReplacementPlugin() //启用HMR非常简单，在大多数情况下无需任何选项。默认使用webpack-dev-server配置hot=true就可以了
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
