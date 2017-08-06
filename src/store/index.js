import Vue from 'vue';
import Vuex from 'vuex';


//Import modules
import products from './modules/products'
import users from './modules/users'
import shoppingcarts from './modules/shoppingcarts'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        products,
        users,
        shoppingcarts
    }
})


export default store