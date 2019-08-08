# vue-router

## simple.html 
使用官网最 基础的教程,没有前端编译打包工具, 实现路由效果

## webpack 案例 基于vue-moudule

1. 安装 vue-router
``` bash
npm install --save-dev vue-router@3.0.2
```
2. 建立 index.vue, home.vue, discover.vue 3个页面
    index.html 用于入口文件, main.js入口脚本, 在index.html 中定义：
``` html
<!--index.html-->
<div id="app">
    <h1>Hello Vue Router!</h1>
    <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/home">Go to home</router-link>
        <router-link to="/discover">Go to discover</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</div>
```
> 一开始我准备 把路由配置的html 写在 index.vue 里面， 这样会有个问题，就是我切换到其他页面后跳转路由就会消失，因为其他页面并没有配置路由的html，这个路由的html应该是页面公共部分，切换后不会改变的。这里我把他放在入口文件index.html
3. main.js 配置
``` js
import Vue from 'vue';
import VueRouter from 'vue-router';
import _index from './router/index.vue';
import _home from './router/home.vue';
import _discover from './router/discover.vue';

Vue.use(VueRouter); //首先vue 主键使用并加载VueRouter
const routers= [
  { path: '/', component: _index},
  { path: '/home', component : _home},
  { path: '/discover', component: _discover}
]
const router = new VueRouter({
  routes:routers //这里注意 VueRouter 构造函数的参数名是routes, 如果使用简写传入参数, 不用命名参数传递, 则保持和构造函数同样的参数名, 否则没有效果 。 
});
new Vue({
  el: '#app',
  router,
  components: { 
    'index' :_index,
    'home' : _home,
    'discover' : _discover
   },
  // render: h => h(_index)
});
```
这里的 ` render: h => h(_index)`表示初始化vue模块 默认加载哪个components局部页,我们默认加载index.html 这里就不配置了，否则路由就不显示了