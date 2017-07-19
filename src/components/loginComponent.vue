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

					<md-button class="md-raised md-accent" md-theme="blue">Iniciar Sesión</md-button>

				</form>
			</md-card-content>

		</md-card>
	</div>
</template>


<script>
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
					return response.headers;
				},response => {
					// error callback
					console.log(response);
				})
				.then(response => {
					access_token = response.access-token;
					token_type = response.token-type;
					client = response.client;
					expiry = response.expiry;
					uid = response.uid;
				});
			}
		}
	}
</script>

<style scoped>
</style>
