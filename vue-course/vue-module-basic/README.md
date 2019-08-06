##vue-basic 带模块化加载基础例子

1. 入库文件为main.js , main.js 引用app.vue, app.vue 中有vue js,css已经template html模板

2. 在vue-helloworld基础上 加上vue-loader, vue-template-compiler 插件(这两个插件必须同时使用[参考](https://vue-loader.vuejs.org/zh/guide/#vue-cli])，用于支持.vue 文件模块化

``` bash 
npm install --save-dev vue-loader@15.7.0
npm install --save-dev vue-template-compiler@2.6.10
```
3. 另外加入css-loader,style-loader 插件用于构建css样式
> `css-loader: 加载.css文件`
> `style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面`

#### 启动

``` bash
npm run build 
```
> 注意： webpack 配置不会生成 index.html, 需要自己建立一个, 放一个id为app的div，并导入dist/bundle.js"，此例子已包含index.html文件，在根目录下

