import Vue from 'vue';
import VueRouter from 'vue-router';
import _index from './router/index.vue';
import _home from './router/home.vue';
import _discover from './router/discover.vue';

Vue.use(VueRouter);
const routers= [
  { path: '/', component: _index},
  { path: '/home', component : _home},
  { path: '/discover', component: _discover}
]
const router = new VueRouter({
  routes:routers
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