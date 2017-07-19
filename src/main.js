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

Vue.http.options.root = 'http://localhost:3000' + version;

Vue.material.registerTheme('blue', {
	primary: 'blue',
	accent: 'teal',
	warn: 'red',
	background: 'white'
});

const router = new VueRouter({
	routes: routes,
	mode: 'history'
});

/*
Al parecer no se estan guardando del todo acá.

Yo me logueo y todo bien, los headers se guardan en estas variables de abajo
y de ahí llamo a validarToken para poner el nombre en la navegación y me
lleve a la vista de products, hasta acá todo bien, pero si yo vuelvo a
ingresar al login validarToken envia los headers vacios, entonces
como que no estan quedando guardados permanentemente o algo así.
*/

export var header = {
	access_token: '',
	token_type: '',
	client: '',
	expiry: '',
	uid: ''
};

/* Al parecer no se estan guardando del todo acá */
export var user_info = {
	name: '',
	email: ''
};

new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})
