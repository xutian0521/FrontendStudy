## vue-helloworld webpack配置的vue 最基础的 helloworld例子 环境搭建
> 如果npm等命令 不能用，现在去nodejs 官网下载nodejs的开发环境
1. 初始化 npm的package.json
``` bash
npm init -y
```
2. 安装 webpack 和webpack-cli
``` bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
```
3. 安装 vue
``` bash
npm install --save-dev vue
```
4. 配置webpack.config.js 和 
``` js
const path =require('path');
var webpack = require('webpack');

module.exports= {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
      }
}
```
5. 在 package.js添加 npm 命令脚本build
``` json
  {
    "scripts": {
      "build": "webpack"
    },
  }
```

5. 手动建立文件和文件夹,代码很简单, js定义vue变量,html 里引用变量并显示
```
  vue-helloworld
+ |- index.html
+ |- /src
+   |- index.js
```