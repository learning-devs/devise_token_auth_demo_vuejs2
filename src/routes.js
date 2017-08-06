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

const ChangePasswordComponent = resolve =>{
	require.ensure(['./components/changePasswordComponent.vue'],() =>{
		resolve(require('./components/changePasswordComponent.vue'));
	})
}

const ChangePasswordFromEmailComponent = resolve =>{
	require.ensure(['./components/changePasswordFromEmailComponent.vue'],() =>{
		resolve(require('./components/changePasswordFromEmailComponent.vue'));
	})
}

const ShoppingCartComponent = resolve =>{
	require.ensure(['./components/shoppingCartComponent.vue'],() =>{
		resolve(require('./components/shoppingCartComponent.vue'));
	})
}

export const routes = [
	{ path:'', component: LoginComponent, name: 'login'},
	{ path:'/users/create', component: RegisterUserComponent, name: 'registerUser'},
	{ path:'/products', component: ProductComponent, name: 'products'},
	{ path: '/shoppingCartComponent', component: ShoppingCartComponent, name:'shoppingCart'},
	{ path:'/recover-password', component: RecoverPasswordComponent, name: 'recoverPassword'},
	{ path:'/change-password', component: ChangePasswordComponent, name: 'changePassword'},
	{ path:'/change-password-from-email', component: ChangePasswordFromEmailComponent, name: 'changePasswordFromEmail'},
	{ path:'*', redirect: '/'}
]
