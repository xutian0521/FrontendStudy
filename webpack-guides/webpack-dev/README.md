# webpack-dev

>官网入门指南-开发：https://www.webpackjs.com/guides/development/

## 1. 使用 source map
当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置
``` javascript
//webpack.config.js
module.exports = {
  devtool: 'inline-source-map',
};

```
## 2. 使用观察模式
``` json
{
    "script" :{
        "watch": "webpack --watch"
    }
}

```
当问及被更改时候, webpakc 会观察变化,并自动重新编译生成, 但页面不会刷新, 需手动刷新浏览器查看修改后的效果

## 3. 使用 webpack-dev-server
``` bash
npm install --save-dev webpack-dev-server@3.2.1
```
两种配置方式
1. cli 配置
``` json
{
    "script" :{
      "dev-cli": "webpack-dev-server --open"
    }
}
```
2. webpack.config 配置
``` javascript
module.exports = {
  devServer: {
    contentBase: './dist', //设置dev目录
    open: true //是否打开浏览器
  }
}
```
