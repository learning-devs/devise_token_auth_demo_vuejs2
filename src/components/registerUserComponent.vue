<template>
	<div class="container">
		<md-card md-with-hover>
			<md-card-header>
				<div class="md-display-1">Registro</div>
			</md-card-header>

			<md-card-content>

				<form v-on:submit.prevent="register" >
					<md-layout md-gutter>

						<md-layout md-column md-gutter class="right-padding">
							<md-input-container>
								<md-icon>account_circle</md-icon>
								<label>Nombre</label>
								<md-input required type="text" v-model="user.name"></md-input>
							</md-input-container>

							<md-input-container>
								<md-icon>account_circle</md-icon>
								<label>Email</label>
								<md-input required type="email" v-model="user.email"></md-input>
							</md-input-container>
						</md-layout>

						<md-layout md-column md-gutter class="left-padding">
							<md-input-container>
								<md-icon>https</md-icon>
								<label>Contraseña</label>
								<md-input required type="password" v-model="user.password"></md-input>
							</md-input-container>

							<md-input-container>
								<md-icon>https</md-icon>
								<label>Confirmar Contraseña</label>
								<md-input required type="password" v-model="user.password_confirmation"></md-input>
							</md-input-container>
						</md-layout>

					</md-layout>

					<md-button type="submit" class="md-raised md-accent" md-theme="blue">Registrarse</md-button>

				</form>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
	import { header } from './../main.js'
	export default {
		data(){
			return{
				user: {
					name: '',
					email: '',
					password: '',
					password_confirmation: ''
				}
			}
		},
		methods: {
			register() {
				this.$http.post('auth', this.user)
				.then(response => {
					// success callback
					return response.headers;
				},response => {
					// error callback
					alert("Error, verifique los datos");
				})
				.then(response => {	
					if (response){
						header.access_token = response.map["access-token"][0];
						header.token_type = response.map["token-type"][0];
						header.client = response.map["client"][0];
						header.expiry = response.map["expiry"][0];
						header.uid = response.map["uid"][0];
						this.$router.push('/products');
					}
				});
			}
		}
	}
</script>

<style scoped>
</style>
