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
				<md-table v-once>
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
				    <md-table-row v-for="(row, index) in 4" :key="index">
				      <md-table-cell>Producto {{index + 1}}</md-table-cell>
				      <md-table-cell v-for="(col, index) in 3" :key="index">Lorem ipsum</md-table-cell>
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
	export default {
		data() {
			return {
				product: {
					name: '',
					description: '',
					price: ''
				}
			}
		},
		methods: {
			created() {
				this.$http.get('products', {
					headers: {
						access_token: access-token,
						token_type: token-type,
						client: client,
						expiry: expiry,
						uid: uid
					}
				})
				.then(response => {
					return response.json()
				},response=> {
					// error callback
				})
				.then(response => {

				});
			},
			register() {
				// Para registrar el productico
			}
		}
	}
</script>

<style>
</style>
