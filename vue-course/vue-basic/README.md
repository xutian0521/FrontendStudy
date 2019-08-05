##vue-basic 带模块化加载基础例子

1. 入库文件为main.js , main.js 引用app.vue, app.vue 中有vue js,css已经template html模板

2. 在vue-helloworld基础上 加上vue-loader 插件，用于支持.vue 文件模块化
``` bash 
npm install --save-dev vue-loader@15.7.0
```

#### 启动
> webpack 配置不会生成 index.html, 需要自己建立一个, 放一个id为app的div，并导入dist/bundle.js"，此例子已包含index.html文件，在根目录下
``` bash
npm run build 
```