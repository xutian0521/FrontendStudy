# webpack-env

>参考：https://www.webpackjs.com/guides/production/
----
## webpack配置 开发(development)和生成模式(production)区别
``` javascript
 module.exports = {
   mode: 'development',
    optimization: {
        usedExports: true
    }
 };
```
1. mode 设置为development 时生成的bundle.js 文件就是不带版本, production 是压缩版本
2. optimization 配置为usedExports =true, 编译生成的bundle.js会注释未引用代码`/* unused harmony export square */`
## 1. 安装 webpack-merge
``` powershell
npm install --save-dev webpack-merge@4.2.1
```
## 2. 建立不同环境的配置文件
1. webpack.common.js, webpack.dev.js和webpack.prod.js 不同的环境配置不一样
2. 这里开发环境使用的代码映射`devtool: 'source-map'` 配合`uglifyjs-webpack-plugin`压缩js代码, 测试环境使用的`devtool: 'inline-source-map'`为了减少生成文件体积,`source-map` 会在dist 文件夹下生成`.map`的映射文件
3. js代码里可以通过`process.env.NODE_ENV == 'production'` 来判断,一般主流框架对于测试很生产环境都是有区别的,所以最好在配置文件加上指定环境的配置。
4. 文件中dev,和prod 使用webpack-merge 读取了common里的配置, 可以把公共配置放到common里,减少代码冗余

## 启动脚本解释
``` json
{
    "script":{
        "build-dev": "webpack --config webpack.dev.js", //生成测试环境dist文件
        "dev": "webpack-dev-server --open --config webpack.dev.js",//启动带webserver测试,不生成dist代码
        "release": "webpack --config webpack.prod.js" //生成生产环境dist文件
    }
}
```