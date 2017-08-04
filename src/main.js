import Vue from 'vue'
import VueMaterial from 'vue-material/dist/vue-material.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import Vuex from 'vuex'
import store from './store'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const route_service = 'http://localhost:3000';
const version = '/api/v1/';

Vue.http.options.root = route_service + version;

Vue.material.registerTheme('blue', {
    primary: 'blue',
    accent: 'teal',
    warn: 'red',
    background: 'white'
});

Vue.material.registerTheme('black', {
    primary: 'black'
});

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


Vue.filter('moneyFormat', function(value) {
    return '$' + parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
})