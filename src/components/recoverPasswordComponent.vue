<template>
	<div class="container">
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
	export default {
		data() {
			return {
				user: {
					email: ''
				}
			}
		},
		methods: {
			recover() {

			}
		}
	}
</script>

<style scoped>
</style>
