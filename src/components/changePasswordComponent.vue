<template>
	<div class="container">
		<md-card md-with-hover>

			<div class="if-div" v-if="loading">
				<md-spinner :md-size="60" md-indeterminate class="md-accent"></md-spinner>
			</div>
			<div v-else>
				<md-card-header>
					<div class="md-display-1">Cambiar Contraseña</div>
				</md-card-header>

				<md-card-content>

					<form v-on:submit.prevent="change">
						<md-layout md-gutter>

							<md-layout md-column md-gutter class="right-padding">
								<md-input-container>
									<md-icon>https</md-icon>
									<label>Contraseña actual</label>
									<md-input required type="password" v-model="user.current_password"></md-input>
								</md-input-container>

								<md-input-container>
									<md-icon>https</md-icon>
									<label>Nueva contraseña</label>
									<md-input required type="password" v-model="user.password"></md-input>
								</md-input-container>

								<md-input-container>
									<md-icon>https</md-icon>
									<label>Confirmar contraseña</label>
									<md-input required type="password" v-model="user.password_confirmation"></md-input>
								</md-input-container>
							</md-layout>

						</md-layout>

						<md-button type="submit" class="md-raised md-accent" md-theme="blue">Cambiar</md-button>

					</form>
				</md-card-content>
			</div>
		</md-card>
	</div>
</template>

<script type="text/javascript">
	import { auth } from './../utils/auth.js'
	import { util } from './../utils/util.js'
	export default {
		data() {
			return {
				user: {
					current_password: '',
					password: '',
					password_confirmation: ''
				},
				loading: false
			}
		},
		methods: {
			change() {
				this.loading = true;
				const context = this;
				setTimeout(function(){
					auth.changePassword(context,context.user,context.$parent)
					context.loading = false;
					context.password = '';
					context.password_confirmation = '';
					context.current_password = '';
				}, 2000);
			}
		},
		created(){
			auth.tokenValid(this,null,'login');
		}

	}
</script>

<style scoped>
.md-card.md-theme-default.md-with-hover {
	height: 355px;
}
</style>
