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
``` powershell
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
``` json
{
    "script" :{
      "dev-server": "node build/dev-server.js --config webpack.config-dev.js",
    }
}
```
``` javascript
module.exports = {
  devServer: {
    contentBase: './dist', //设置dev目录
    open: true //是否打开浏览器
  }
}
`webpack-dev-server` 插件不配置port 参数, 默认是8080端口
```
3. js 配置(dev-server.js)
``` json
{
    "script" :{
      "dev-server": "node build/dev-server.js --config webpack.config-dev.js"
    }
}
```
```javascript
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
```
原理是读取webpack配置,传入配置参数, 手动实例化插件调用启动server方法
## 4. 使用 webpack-dev-middleware
``` powershell
npm install --save-dev express@4.16.4 webpack-dev-middleware@3.6.0
```
``` json
{
    "script" :{
      "server": "node build/server.js webpack.config-dev.js"
    }
}
```
``` javascript
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```
**使用express web服务器, 并使用自定义中间件 webpack-dev-middleware实现dev开发, 并手动启动监听**