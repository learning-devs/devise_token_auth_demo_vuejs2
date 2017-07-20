<template>
	<div>
		<div v-if="this.user.authenticated">
			 <md-button>Hola, {{ this.user.name}}</md-button>
			 <md-button class="md-raised" v-on:click="logout">Cerrar sesion</md-button>
		</div>

		<div v-else>
			<router-link tag="md-button" to="login" class="md-raised ">Iniciar Sesión</router-link>

			<router-link v-bind:to="{ name:'registerUser' }">
				<md-button class="md-raised">Registro</md-button>
			</router-link>
		</div>

	</div>
</template>

<script type="text/javascript">
	import { auth } from './../../utils/auth.js'

	export default {
		data() {
			return {
				user: auth.getUserInformation(this)
			}
		},
		methods: {
			setUser() {
				this.user = auth.getUserInformation(this);
			},
			logout(){
				auth.logout(this,'login');
			}
		},
		watch: {
			$route() {
				this.setUser();
			}
		}
	}
</script>
