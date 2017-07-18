import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'



Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
