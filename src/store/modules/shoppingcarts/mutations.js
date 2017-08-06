const mutations = {
    ADD_PRODUCT_SHOPPING_CART_MUTATION: (state, product) => {
		product.quantity = 1;
		state.productList.push(product);
		state.productList
    },
    REMOVE_PRODUCT_SHOPPING_CART_MUTATION: (state, indice) => {
      state.productList.splice(indice, 1);
    },
    SUM_QUANTITY_PRODUCT_SHOPPING_CART_MUTATION:(state,producto) => {
      
    }
}


export default mutations