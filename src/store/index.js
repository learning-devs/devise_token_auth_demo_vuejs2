import Vue from 'vue';
import Vuex from 'vuex';


//Import modules
import products from './modules/products'
import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        products,
        users
    }
})


export default store