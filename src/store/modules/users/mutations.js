const mutations = {
    SIGN_IN_USER_MUTATION: (state, user) =>{
        state.name = user.name;
        state.email = user.email;
        state.role = user.role;
        state.authenticated = true;
    },
    LOG_OUT_USER_MUTATION: (state) => {
        state.name = null;
        state.email = null;
        state.role = null;
        state.authenticated = false;
    }
}


export default mutations