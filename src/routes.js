import LoginComponent from './components/loginComponent.vue'


const RegisterUserComponent = resolve =>{
	require.ensure(['./components/registerUserComponent.vue'],() =>{
		resolve(require('./components/registerUserComponent.vue'));
	})
}


const RecoverPasswordComponent = resolve =>{
	require.ensure(['./components/recoverPasswordComponent.vue'],() =>{
		resolve(require('./components/recoverPasswordComponent.vue'));
	})
}

const ProductComponent = resolve =>{
	require.ensure(['./components/productComponent.vue'],() =>{
		resolve(require('./components/productComponent.vue'));
	})
}

export const routes = [
	{ path:'', component: LoginComponent, name: 'login'},
	{ path:'/users/create', component: RegisterUserComponent, name: 'registerUser'},
	{ path:'/products', component: LoginComponent, name: 'products'},
	{ path:'/recover-password', component: RecoverPasswordComponent, name: 'recoverPassword'},
	{ path:'*', redirect: '/'}
]