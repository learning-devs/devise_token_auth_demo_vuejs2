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
						<md-input required type="email" v-model="user.email"></md-input>
					</md-input-container>

					<md-input-container>
						<md-icon>https</md-icon>
						<label>Contraseña</label>
						<md-input required type="password" v-model="user.password"></md-input>
					</md-input-container>

					<md-button type="submit" class="md-raised md-accent" md-theme="blue">Iniciar Sesión</md-button>

				</form>
			</md-card-content>

		</md-card>

		<md-dialog-alert
		  :md-title="alert.title"
		  :md-content-html="alert.content"
		  ref="dialog">
		</md-dialog-alert>

	</div>
</template>


<script>
	import { auth } from './../utils/auth.js'
	import Alert from './../utils/alert'
	
	export default {
		data() {
			return {
				user: {
					email: '',
					password: ''
				},
				alert: Alert.alert
			}
		},
		methods: {
			login() {
				auth.login(this, this.user, 'products');
			}
		},
		created() {
			auth.tokenValid(this, 'products');
		}

	}
</script>

<style scoped>
</style>
