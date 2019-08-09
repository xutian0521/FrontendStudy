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
      // new HtmlWebpackPlugin({
      //   title: 'Output Management'
      // })
      new HtmlWebpackPlugin({
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