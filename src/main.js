import Vue from 'vue'
import VueMaterial from 'vue-material/dist/vue-material.js';
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'



Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.material.registerTheme('blue', {
  primary: 'blue',
  accent: 'teal',
  warn: 'red',
  background: 'white'
})

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
