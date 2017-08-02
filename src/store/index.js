import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

//Import modules
import products from './modules/products'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        products
    }
})


export default store