# Fronten dStudy

## 目录说明
1. [vue-course](./vue-course) vue教程
2. [webpack-guides](./webpack-guides) webpack指南

## 参考网站
1. wepack中文官网文档：https://www.webpackjs.com/guides/
2. npm中文文档： https://www.npmjs.cn/
3. express中文官网：http://www.expressjs.com.cn/ 英文官网：http://expressjs.com/
4. vue官网文档：https://cn.vuejs.org/v2/guide/
5. vue loader官方文档： https://vue-loader.vuejs.org/zh/

## npm 使用
``` bash
npm init #初始化在当前目录下建立一个package.json 文件,并写入基础配置
npm install #不带包名 安装package.json 依赖项文件

npm install moduleName # 安装模块到项目目录下
npm install -g moduleName # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
npm install -save moduleName # -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install -save-dev moduleName # -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

```
> NPM install -save 和 -save-dev 傻傻分不清:https://www.cnblogs.com/limitcode/p/7906447.html

## 如何删除全局和本地 webpack和webpack-cli
``` bash
1. npm uninstall -g webpack-cli
2. npm uninstall webpack-cli
3. npm uninstall -g webpack
4. npm un webpack
```
