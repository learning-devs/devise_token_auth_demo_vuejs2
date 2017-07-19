<template>
	<div class="container">
		<md-card md-with-hover>

			<md-card-header>
				<div class="md-display-1">Iniciar Sesión</div>
			</md-card-header>

			<md-card-content>
				<form v-on:submit.prevent="login">

					<md-input-container>
						<md-icon>account_circle</md-icon>
						<label>Email</label>
						<md-input type="email" v-model="user.email"></md-input>
					</md-input-container>

					<md-input-container>
						<md-icon>https</md-icon>
						<label>Contraseña</label>
						<md-input type="password" v-model="user.password"></md-input>
					</md-input-container>

					<md-button type="submit" class="md-raised md-accent" md-theme="blue">Iniciar Sesión</md-button>

				</form>
			</md-card-content>

		</md-card>
	</div>
</template>


<script>
	import { header } from './../main.js'
	export default {
		data() {
			return {
				user: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			login() {
				this.$http.get('auth', {
					params: {
						email: this.user.email,
						password: this.user.password
					}
				})
				.then(response => {
					// success callback
					console.log("bien" + response);
					return response.headers;
				},response => {
					// error callback
					console.log("error" + response);
				})
				.then(response => {
					console.log(response);
					header.access_token = response.map["access-token"][0];
					header.token_type = response.map["token-type"][0];
					header.client = response.map["client"][0];
					header.expiry = response.map["expiry"][0];
					header.uid = response.map["uid"][0];
				});
			}
		}
	}
</script>

<style scoped>
</style>
