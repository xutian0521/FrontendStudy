
import Vue from 'vue'
import './styles/main.css'
import App from './app.vue'

new Vue({
  el:"#app",
  template:'<App/>',
  components:{App}
})

console.log('hello vue with other plugins!');
console.logs('测试source map 错误定位');