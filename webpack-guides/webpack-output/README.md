# webpack output

>官网入门指南-输出管理：https://www.webpackjs.com/guides/output-management/
----
## 1. 安装html-webpack-plugin, clean-webpack-plugin
这里没有介绍 lodash 和webpack等模块安装, 之前基础教程已经有了,在这之前先把依赖的基础插件安装上
``` powershell
npm install --save-dev html-webpack-plugin@3.2.0
npm install --save-dev clean-webpack-plugin@3.0.0
```
## 2. 配置webpack.config.js
这里配置了两个入口js文件,index.html 需要引用两个js文件, 一旦我们入口名称变了, 我们需要修改index.html的引用, 变得很难维护,我们可以借助插件自动生成index.html 并自动引用js文件,还可以自动清理dist文件夹
``` javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//注意clean-webpack-plugin 3.0.0 版本用法有变化
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
html-webpack-plugin 默认在的dist 文件夹生成index.html并引入入口js 文件
clean-webpack-plugin 默认会清理dist 文件夹下的文件, 这里也没有配置要清理的文件夹
## 3. 使用模板配置 html-webpack-plugin

``` javascript
  plugins: [
      new HtmlWebpackPlugin({ //指定模板配置
        filename: 'dist-index.html',
        template: 'template-index.html',
        inject: true
      }),
    ]
};
```
这里会根据根目录下的template-index.html 文件在dist 文件夹下生成dist-index.html,并引用入口里的js文件
## 4. 编写 案例js代码 
``` javascript
//index.js
import _ from 'lodash';
import printMe from './print.js';

  function component() {
    var element = document.createElement('div');
   var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

    return element;
  }

 document.body.appendChild(component());
```
``` javascript
export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
}
```