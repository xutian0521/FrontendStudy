## Vue webpack开发环境 搭建基础2 其他

#### 其他配置
1. source-map
> 当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。
``` javascript
module.exports ={
    devtool: 'inline-source-map',
}
```
>vue-project-basic 基础上配置
#### 其他常用插件
1. clean-webpack-plugin, html-webpack-plugin

##### 安装
``` bash
npm install --save-dev clean-webpack-plugin@2.0.0
npm install --save-dev html-webpack-plugin@3.2.0
```
##### 配置
``` js
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports ={
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
          })
    ]
}
```

