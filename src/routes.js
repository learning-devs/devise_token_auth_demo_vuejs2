import LoginComponent from './components/loginComponent.vue'

export const routes = [
	{ path:'', component: LoginComponent, name: 'login'},
	{ path:'*', redirect: '/'}
]