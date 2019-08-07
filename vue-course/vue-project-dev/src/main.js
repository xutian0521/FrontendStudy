import Vue from 'vue';
import './styles/main.css';
import App from './module/app.vue';

new Vue({
    el:'#app',
    components :{ 'runoob':App}
});
var ids = [1,2,3,4,5,6];
ids.forEach(item => {
    console.log(item);
} )
console.log('hello vue o(*￣︶￣*)o %%');
console.logs('错误测试');