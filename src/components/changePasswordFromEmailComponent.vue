<template>
	<div class="container">
		<md-card md-with-hover>

			<div class="if-div" v-if="loading">
				<md-spinner :md-size="60" md-indeterminate class="md-accent">
				</md-spinner>
			</div>
			<div v-else>

				<md-card-header>
					<div class="md-display-1">Nueva contraseña</div>
				</md-card-header>

				<md-card-content>

					<form v-on:submit.prevent="change" >
						<md-layout md-gutter>

							<md-layout md-column md-gutter class="right-padding">

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
					password: '',
					password_confirmation: ''
				},
				headers: {
					client: this.$route.query.client_id,
					reset_password: true,
					access_token: this.$route.query.token,
					uid: this.$route.query.uid
				},
				loading: false
			}
		},
		methods: {
			change() {
				this.loading = true;
				const context = this;
				setTimeout(function() {
					auth.changePasswordFromEmail(context, context.user, context.$parent, context.headers)
					context.loading = false;
					context.password = '';
					context.password_confirmation = '';
				}, 2000);
			}
		}

	}
</script>

<style scoped>
	.md-card.md-theme-default.md-with-hover {
		height: 279px;
	}
</style>
