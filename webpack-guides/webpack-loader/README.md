# webpack-loader

>官网入门指南-管理资源：https://www.webpackjs.com/guides/asset-management/
----
### 1. 加载 CSS
``` ps1
npm install --save-dev style-loader css-loader
```
``` js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  };
```
### 2. 加载图片
``` ps1
npm install --save-dev file-loader
```
``` js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    }
  };
```
### 3. 加载字体
``` js
  module.exports = {
    module: {
      rules: [
        {
           test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    }
  };
```
### 4. 添加 NPM 脚本
``` json
  {
    "scripts": {
      "build": "webpack"
    }
  }

```

### 5. 加载数据
``` ps1
npm install --save-dev csv-loader xml-loader  
```
``` js
  module.exports = {
    module: {
      rules: [
       {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    }
  };
```
### 6.  找到index.html 打开

## 三种命令方式的区别
1. npx webpack 默认配置方式, 可以不需要webpack.config.js配置文件,默认打包为 main.js和dist目录下(如果配置webpack.config.js 该命令默认执行配置文件下的配置替换掉默认配置)
2. npx webpack --config webpack.config.js 指定配置文件方式运行
3. npm run build 使用npm脚本方式, 实际还是执行webpack的cli