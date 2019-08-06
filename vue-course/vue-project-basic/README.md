## Vue webpack开发环境 搭建基础1
> 参考： [从搭建vue-脚手架到掌握webpack配置（一.基础配置](https://www.jianshu.com/p/f05269760d84)

> 在vue-helloworld和vue-module-basic 基础上再加上其他插件和配置
1. 安装file-loader,url-loader
``` bash
npm install --save-dev file-loader@3.0.1
npm install --save-dev url-loader@1.1.2
```
2. 安装babel-core, babel-loader
``` bash
npm install --save-dev babel-core@6.26.3
npm install --save-dev babel-loader@7.1.5
```
3. 配置file-loader,url-loader,babel-core, babel-loader
``` js

module.exports = {
    entry:{
        app:'./src/main.js',
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:"js/[name].js",
    },
    module:{
        rules:[
            {
                test:/\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
                loader:"babel-loader", //加载器名，就是上一步安装的loader
                exclude:/node_modules/ //排除node_modules目录，我们不加载node模块中的js哦~
            },
            {
                test:/\.(png|jpe?j|gif|svg)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'img/[name].[ext]?[hash]'
                }
                //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
                //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
                //和上面一致
            }
        ]
    },
    resolve:{
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        //缩写扩展
        alias:{
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$':'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@': path.resolve(__dirname,'./src'),
        }
    },
}
```