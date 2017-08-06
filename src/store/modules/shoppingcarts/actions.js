const actions = {
    ADD_PRODUCT_SHOPPING_CART: ({ commit }, product) => {
        commit('ADD_PRODUCT_SHOPPING_CART_MUTATION', product)
    },
    REMOVE_PRODUCT_SHOPPING_CART: ({ commit }, indice) => {
        commit('REMOVE_PRODUCT_SHOPPING_CART_MUTATION', indice)
    },
    SUM_QUANTITY_PRODUCT_SHOPPING_CART: ({ commit }, product) => {
        commit('SUM_QUANTITY_PRODUCT_SHOPPING_CART_MUTATION',product)
    }
}


export default actions