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
	import { user_info } from './../main.js'
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
				this.$http.post('auth/sign_in', this.user)
				.then(response => {
					// success callback
					return response.headers;
				},response => {
					// error callback
					alert("Error, verifique los datos");
				})
				.then(response => {
					if (response) {
						header.access_token = response.map["access-token"][0];
						header.token_type = response.map["token-type"][0];
						header.client = response.map["client"][0];
						header.expiry = response.map["expiry"][0];
						header.uid = response.map["uid"][0];
						this.$router.push({name: 'products'});
					}
				});
			},
			validarToken(){
				this.$http.get('auth/validate_token',{
					headers: {
						uid: header.uid,
						client: header.client,
						'access-token': header.access_token
					}
				})
				.then(response=>{
					return response.json();
				})
				.then(response=>{
					if (response.success) {
						user_info.name = response.data.name;
						user_info.email = response.data.email;
						this.$router.push({name: 'products'});
					}
				});
			}
		},
		created(){
			this.validarToken();
		}
		
	}
</script>

<style scoped>
</style>
