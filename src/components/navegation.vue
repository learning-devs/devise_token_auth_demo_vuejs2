<template>
	<div>
		<div v-if="this.user.name.length > 0">
			 <md-button>Hola, {{ this.user.name}}</md-button>
		</div>

		<div v-else>
			<router-link tag="md-button" to="login" class="md-raised ">Iniciar Sesión</router-link>

			<router-link v-bind:to="{ name:'registerUser' }">
				<md-button class="md-raised" >Registro</md-button>
			</router-link>
		</div>

	</div>
</template>

<script type="text/javascript">
	import { user_info } from './../main.js'
	export default {
		data() {
			return {
				user: {
					name: ''
				}
			}
		},
		methods: {
			setUser() {
				this.user.name = user_info.name;
				console.log("usuario " + this.user.name)
			}
		},
		watch: {
			$route() {
				this.setUser();
			}
		},
		created() {
			this.setUser();
		}
	}
</script>
