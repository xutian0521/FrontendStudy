# Vue webpack开发环境 搭建基础3 webserver

## package.json的script解释：
1. dev :使用webpack-dev-server 插件和 webpack.config配置的 webserver
2. dev-cli  :使用webpack-dev-server 插件和 cli 参数配置的 webserver
3. dev-server :使用webpack-dev-server 插件和 单独js(dev-server.js) 配置并手动启动监听的 webserver
4. server ：使用express + webpack-dev-middleware 中间件的方式实现webserver 属于比较底层的方式
5. express ：使用纯express 方式, 暂时未实现
## 不同的webserver 插件使用
### 1. dev (webpack-dev-server)
> 两种配置方式 

必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR。如果 webpack 或 webpack-dev-server 是通过 --hot 选项启动的，那么这个插件会被自动添加，所以你可能不需要把它添加到 webpack.config.js 中。
1. cli 配置
``` json
//package.json
{ 
    "scripts": {
        "dev": "webpack-dev-server --hot --open --port 3000",
        }
}
```
2. webpack.config 配置

``` json
//package.json
{
    "scripts": {
        "dev-cli": "webpack-dev-server",
        }
}
```
``` js
//  webpack.config.js
const path =require('path');

module.exports ={

    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port: 3000, //端口号
        hot: true, //是否开启 HMR热更新
        open : true //是否启动的时候打开浏览器
    }
}
```

### 2. dev-server (webpack-dev-server) 
1. 单独js配置 -其实算是 第一种方式dev 的第三种配置方式
``` js
// build/dev-server.js
const webpackDevServer =require('webpack-dev-server');
const webpack =require('webpack');

const config =require('../webpack.config');
const options ={
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler =webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost',() => {
    console.log('dev server listening on port 3000');
});
```

### 3. server (express + webpack-dev-middleware)
1. express 加 webpack-dev-middleware 组合方式
``` js
// server.js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware =require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

app.listen(3000, function () {
   console.log('Example app listening on port 3000!\n');
});
```

### 4. express (express)
1. 纯 express方式
实现起来很复杂, 这里用express.js 搭建了一个简单的webserver