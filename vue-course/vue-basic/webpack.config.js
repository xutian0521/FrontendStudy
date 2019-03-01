const path =require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin');

module.exports= {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase:'./dist',
        overlay: {
            warnings: true,
            errors: true
          }
    },
    plugins:[
        //new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        //   })
    ],
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
     
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
      }
}