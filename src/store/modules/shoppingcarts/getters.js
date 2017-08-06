
const getters = {
    productsQuantity: (state) => {
        return state.productList.length;
    },
    productList: (state) => {
        return state.productList;
    }
}


export default getters