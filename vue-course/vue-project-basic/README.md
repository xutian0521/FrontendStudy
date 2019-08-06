## Vue webpack开发环境 搭建基础1
1. 参考： [从搭建vue-脚手架到掌握webpack配置（一.基础配置](https://www.jianshu.com/p/f05269760d84)


#### 一些错误解决
`ERROR in ./src/app.vue
Module Error (from ./node_modules/vue-loader/lib/index.js):
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.`
解释：提示模块错误，vue-loader 没有和相应的插件一起使用，确保在Webpack配置中包含vueloaderplugin配置
> [需要安装官网 vue-loader 配置 ](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)
> **vue-loader@15x 以上需要以下配置 测试15x 版本以下安装不成功，必须15x 以上。15x版本以下待测试**
``` js
// webpack.config.js
onst VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```


`Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.`

> **注意babel-core 和依赖版本 babel-loader (babel-core@6.x 依赖babel-loader@7) ，##解决安装 `npm install --save-dev babel-loader@7`**

`Error: 

Vue packages version mismatch:

- vue@2.6.7
- vue-template-compiler@2.5.2

This may cause things to work incorrectly. Make sure to use the same version for both.
If you are using vue-loader@>=10.0, simply update vue-template-compiler.
If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.`

> **vue 和vue-template-compiler 版本不一致导致错误，##解决安装 `npm install --save-dev vue-template-compiler@2.6.7`**