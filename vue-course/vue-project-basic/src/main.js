
import Vue from 'vue'
import './styles/main.css'
import App from './app.vue'

new Vue({
  el:"#app",
  template:'<App/>',
  components:{App}
})

console.log('hello vue!');

// 字符串嵌入变量 es6 语法测试
var name = 'React'
console.log(`hello, ${name}` ) // hello, React
