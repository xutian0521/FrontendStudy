const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
      new CleanWebpackPlugin(),
      // new HtmlWebpackPlugin({ //默认配置
      //   title: 'Output Management'
      // })
      new HtmlWebpackPlugin({ //指定模板配置
        filename: 'dist-index.html',
        template: 'template-index.html',
        inject: true
      }),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};