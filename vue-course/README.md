## Vue 阶梯学习案例模板
1. vue-helloworld 最基础的helloworld demo
2. vue-module-basic vue模块化(.vue) 案例demo
3. vue-project-basic vue项目构建 基础demo
4. vue-project-dev vue的web服务器server配置 demo
5. vue-router vue路由使用的 demo
6. vue-scaffold vue官方提供的vue-cli的脚手架

#### vue需要用到 常用插件说明

1. webpack, webpack-cli ：webpack自动构建打包开发环境基础插件
2. css-loader, style-loader
    `css-loader: 加载.css文件`
    `style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面`

3. vue-loader,vue-template-compiler 用于webpack自动打包.vue 文件。
    你应该将 vue-loader 和 vue-template-compiler 一起安装——除非你是使用自行 fork 版本的 Vue 模板编译器的高阶用户

4. babel-core, babel-loader
    babel-core 的作用是把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 ast，分析其语法后再转为低版本 js。首先安装 babel-core。.

    babel-loader: 如今 ES6 语法在开发中已经非常普及，甚至也有许多开发人员用上了 ES7 或 ES8 语法。然而，浏览器对这些高级语法的支持性并不是非常好。因此为了让我们的新语法能在浏览器中都能顺利运行，Babel 应运而生。一些高级语法还另需要配置 .babelrc 文件

5. file-loader,url-loader 一般一起使用

    file-loader:将文件发送到URL并将文件发送到输出目录
    url-loader:用于将文件转换为base64 URI的Webpack加载程序。

6. clean-webpack-plugin, html-webpack-plugin 一般一起使用
    clean-webpack-plugin:是一个流行的清理插件，安装和配置它。清理 /dist 文件夹
    html-webpack-plugin: 该插件将为你生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包。 