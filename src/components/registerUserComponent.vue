<template>
	<div class="container">
		<md-card md-with-hover>
			<md-card-header>
				<div class="md-title">Registro</div>
			</md-card-header>

			<md-card-content>
				<form v-on:submit.prevent="register" >
					<md-layout md-gutter>
						<md-layout>
							<md-input-container>
								<md-icon>account_circle</md-icon>
								<label>Nombre</label>
								<md-input required type="text" v-model="user.name"></md-input>
							</md-input-container>
						</md-layout>

						<md-layout>
							<md-input-container>
								<md-icon>account_circle</md-icon>
								<label>Email</label>
								<md-input required type="email" v-model="user.email"></md-input>
							</md-input-container>
						</md-layout>
					</md-layout>


					<md-layout md-gutter>
						<md-layout>
							<md-input-container>
								<md-icon>https</md-icon>
								<label>Contraseña</label>
								<md-input required type="password" v-model="user.password"></md-input>
							</md-input-container>
						</md-layout>

						<md-layout>
							<md-input-container>
								<md-icon>https</md-icon>
								<label>Confirmar Contraseña</label>
								<md-input required type="password" v-model="user.confirm_password"></md-input>
							</md-input-container>
						</md-layout>
					</md-layout>

					<md-button class="md-raised md-accent" md-theme="blue">Registrarse</md-button>

				</form>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user: {
					name: '',
					email: '',
					password: '',
					confirm_password: ''
				}
			}
		},
		methods: {
			register() {

			}
		}
	}
</script>

<style scoped>
	.container {
		width: 70%;
		margin: 50px auto;
	}
</style>
