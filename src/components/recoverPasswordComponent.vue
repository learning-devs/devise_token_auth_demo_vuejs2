<template>
	<div class="container">
		<div v-if="loading">
			<md-spinner :md-size="60" md-indeterminate class="md-accent">
			</md-spinner>
		</div>
		<div v-else>
			<md-card md-with-hover>
				
				<md-card-header>
					<div class="md-display-1">Recuperar Contraseña</div>
				</md-card-header>

				<md-card-content>
					<form v-on:submit.prevent="recover">
						<md-input-container>
							<md-icon>account_circle</md-icon>
							<label>Email</label>
							<md-input type="email" v-model="user.email"></md-input>
						</md-input-container>

						<md-button type="submit" class="md-raised md-accent" md-theme="blue">Recuperar Contraseña</md-button>
					</form>
				</md-card-content>
			</md-card>
		</div>
		<md-card md-with-hover>

			<md-card-header>
				<div class="md-display-1">Recuperar Contraseña</div>
			</md-card-header>

			<md-card-content>
				<form v-on:submit.prevent="recover">

					<md-input-container>
						<md-icon>account_circle</md-icon>
						<label>Email</label>
						<md-input type="email" v-model="user.email"></md-input>
					</md-input-container>

					<md-button class="md-raised md-accent" md-theme="blue">Recuperar Contraseña</md-button>

				</form>
			</md-card-content>
		</md-card>
	</div>
</template>


<script>
	import { auth } from './../utils/auth.js'
	export default {
		data() {
			return {
				user: {
					email: '',
					redirect_url: 'http://localhost:8080/recover-password'
				},
				loading: false
			}
		},
		methods: {
			recover() {
				this.loading = true;
				const context = this;
				setTimeout(function(){
					auth.recoverPassword(context,context.user,context.$parent)
					context.loading = false;
				}, 2000);
			}
		}
	}
</script>

<style scoped>
</style>
