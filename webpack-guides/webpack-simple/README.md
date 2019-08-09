# webpack-simple 

>官网入门指南-起步：https://www.webpackjs.com/guides/getting-started/#使用一个配置文件
----
### 1. 修改脚本引用
 dist下的index.html的脚步引用`<script src="main.js"></script>` 改为`<script src="bundle.js"></script>`
### 2. 添加webpack.config.js 配置文件
``` js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
### 3. 使用带配置的 npx webpack命令
``` ps1
npx webpack --config webpack.config.js
```
### 4. 添加 NPM 脚本
``` json
  {
    "scripts": {
      "build": "webpack"
    }
  }

```

### 5. 使用NPM 脚本执行webpack命令

``` ps1
npm run build
```
### 6.  找到index.html 打开

## 三种命令方式的区别
1. npx webpack 默认配置方式, 可以不需要webpack.config.js配置文件,默认打包为 main.js和dist目录下(如果配置webpack.config.js 该命令默认执行配置文件下的配置替换掉默认配置)
2. npx webpack --config webpack.config.js 指定配置文件方式运行
3. npm run build 使用npm脚本方式, 实际还是执行webpack的cli