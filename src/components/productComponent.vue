<template>
	<div class="container">
		<md-card md-with-hover>

			<md-card-header>
				<div class="md-display-1">Productos</div>
			</md-card-header>

			<md-card-content>
				<form v-on:submit.prevent="register">

					<md-input-container>
						<md-icon>subject</md-icon>
						<label>Nombre</label>
						<md-input type="text" v-model="product.name"></md-input>
					</md-input-container>

					<md-input-container>
						<md-icon>description</md-icon>
						<label>Descripción</label>
						<md-input type="text" v-model="product.description"></md-input>
					</md-input-container>

					<md-input-container>
						<md-icon>attach_money</md-icon>
						<label>Precio</label>
						<md-input type="text" v-model="product.price"></md-input>
					</md-input-container>

					<md-button class="md-raised md-accent" md-theme="blue">Registrar</md-button>

				</form>
			</md-card-content>

		</md-card>
		<br>
		<!-- Tabla de productos -->
		<md-card md-with-hover>
			<md-card-content>
				<md-table>
				  <md-table-header>
				    <md-table-row>
				      <md-table-head>Nombre</md-table-head>
				      <md-table-head>Descripción</md-table-head>
				      <md-table-head>Precio</md-table-head>
				      <md-table-head>Usuario</md-table-head>
				      <md-table-head>Acciones</md-table-head>
				    </md-table-row>
				  </md-table-header>

				  <md-table-body>
				    <md-table-row v-for="product in products" :key="product.id">
				      <md-table-cell>{{ product.name }}</md-table-cell>
				      <md-table-cell>{{ product.description }}</md-table-cell>
							<md-table-cell>{{ moneyFormat(product.price) }}</md-table-cell>
							<md-table-cell>{{ product.user }}</md-table-cell>
							<md-table-cell>
								<div>
									<md-button class="md-fab md-mini md-primary" md-theme="blue">
										<md-icon>mode_edit</md-icon>
									</md-button>
									<md-button class="md-fab md-mini md-warn" md-theme="blue">
										<md-icon>delete</md-icon>
									</md-button>
								</div>
							</md-table-cell>
				    </md-table-row>
				  </md-table-body>
				</md-table>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
	import { auth } from './../utils/auth.js'
	import { endpoints } from './../endpoints.js'

	export default {
		data() {
			return {
				product: {
					name: '',
					description: '',
					price: '',
					user: ''
				},
				products: []
			}
		},
		methods: {
			register() {
				// Para registrar el productico
			},
			moneyFormat(n){
				return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
			}
		},
		created() {
			auth.tokenValid(this, null, 'login');

			var header = auth.getAuthHeader();
			this.$http.get(endpoints.products.base, {
				headers: {
					uid: header.uid,
					expiry: header.expiry,
					client: header.client,
					'token-type': header.token_type,
					'access-token': header.access_token,
				}
			})
			.then(response => {
				return response.body;
			}, response => {
				return response.json();
			})
			.then(response => {
				this.products = response.products;
			});
		},

	}
</script>

<style>
</style>
