const actions = {
    SIGN_IN_USER:({ commit }, user) => {
        commit('SIGN_IN_USER_MUTATION', user)
    },
    LOG_OUT_USER:({ commit }) => {
        commit('LOG_OUT_USER_MUTATION')
    }
}


export default actions