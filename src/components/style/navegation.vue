<template>
	<div>
		<div v-if="userAuthenticated">
			 <md-button>{{ userName }}</md-button>
			 <router-link tag="md-button" v-bind:to="{ name: 'shoppingCart' }" class="md-raised">Carrito Compras: {{ quantityProducts }}</router-link>
			 <router-link tag="md-button" v-bind:to="{ name: 'changePassword' }" class="md-raised">Cambiar Contraseña</router-link>
			 <md-button class="md-raised" v-on:click="logout">Cerrar sesion</md-button>
		</div>

		<div v-else>
			<router-link tag="md-button" to="login" class="md-raised">Iniciar Sesión</router-link>
			<router-link tag="md-button" v-bind:to="{ name:'registerUser' }" class="md-raised">Registro</router-link>

		</div>

	</div>
</template>

<script type="text/javascript">
	import { auth } from './../../utils/auth.js'
	import store from './../../store'
	
	export default {
		methods: {
			logout(){
				auth.logout(this,'login');
			}
		},
		computed: {
			userName(){
				return store.getters.userName;
			},
			userAuthenticated(){
				return store.getters.userAuthenticated;
			},
			quantityProducts(){
				return store.getters.productsQuantity;
			}
		},
		created(){
			auth.tokenValid(this);
		}
	}
</script>
