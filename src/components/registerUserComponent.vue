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
	import { auth } from './../utils/auth.js'
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
				auth.signup(this, this.user, 'products',this.$parent);
			}
		},
		created() {
			auth.tokenValid(this, 'products');
		}
	}
</script>

<style scoped>
</style>
