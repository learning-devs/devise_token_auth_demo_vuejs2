<template>
	<div class="container">
		<div v-if="loading">
			<md-spinner :md-size="60" md-indeterminate class="md-accent">
			</md-spinner>
		</div>
		<div v-else>
			<md-card md-with-hover>
				<md-card-header>
					<div class="md-display-1">Registro</div>
				</md-card-header>

				<md-card-content>

					<form v-on:submit.prevent="change" >
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

						<md-button type="submit" class="md-raised md-accent" md-theme="blue">Cammbiar</md-button>

					</form>
				</md-card-content>
			</md-card>
		</div>
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
				loading: false,
				changed: true
			}
		},
		methods: {
			change() {
				this.loading = true;
				const context = this;
				setTimeout(function(){	
					auth.changePassword(context,context.user,context.$parent)
					context.loading = false;
				}, 2000);		
			}
		}

	}
</script>