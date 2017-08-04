const getters = {
    userName: (state) => {
        return state.name;
    },
    userEmail: (state) => {
        return state.email;
    },
    userRole: (state) => {
        return state.role;
    },
    userAuthenticated: (state) =>{
        return state.authenticated;
    }
}


export default getters