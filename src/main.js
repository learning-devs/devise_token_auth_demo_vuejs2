import Vue from 'vue'
import VueMaterial from 'vue-material/dist/vue-material.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueResource);

var version = '/api/v1/'

Vue.http.options.root = 'http://localhost:3000' + version

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
  data: {
  	access_token: '',
  	token_type: '',
  	client: '',
  	expiry: '',
  	uid: ''
  },
  router: router,
  render: h => h(App)
})
