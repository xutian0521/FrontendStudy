## Vue 解答

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

5. 