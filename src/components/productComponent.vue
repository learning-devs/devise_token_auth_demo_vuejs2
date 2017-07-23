<template>
	<div class="container">
		<md-card md-with-hover>

			<md-card-header>
				<div class="md-display-1">Productos</div>
			</md-card-header>

			<md-card-content>
				<form v-on:submit.prevent="register">

					<md-input-container :class="{'md-input-invalid' : errors.name }">
						<md-icon>subject</md-icon>
						<label>Nombre</label>
						<md-input type="text" v-model="product.name"></md-input>
						<span class="md-error" v-if="errors.name">{{ errors.name[0] }}</span>
					</md-input-container>

					<md-input-container :class="{'md-input-invalid' : errors.description }">
						<md-icon>description</md-icon>
						<label>Descripción</label>
						<md-input type="text" v-model="product.description"></md-input>
						<span class="md-error" v-if="errors.description">{{ errors.description[0] }}</span>
					</md-input-container>

					<md-input-container :class="{'md-input-invalid' : errors.price }">
						<md-icon>attach_money</md-icon>
						<label>Precio</label>
						<md-input type="text" v-model="product.price"></md-input>
						<span class="md-error" v-if="errors.price">{{ errors.price[0] }}</span>
					</md-input-container>

					<md-button v-if="!edit"class="md-raised md-accent" md-theme="blue" v-on:click.prevent="register">Registrar</md-button>

					<div v-else>
						<md-button class="md-raised md-accent" md-theme="blue" v-on:click.prevent="update">Editar</md-button>

						<md-button class="md-raised md-accent" md-theme="blue" v-on:click="cancelEdit">Cancelar</md-button>
					</div>
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
						<md-table-row v-for="(product, indice) in products" :key="product.id">
							<md-table-cell>{{ product.name }}</md-table-cell>
							<md-table-cell>{{ product.description }}</md-table-cell>
								<md-table-cell>{{ moneyFormat(product.price) }}</md-table-cell>
								<md-table-cell>{{ product.user }}</md-table-cell>
								<md-table-cell>
									<div>
										<md-button class="md-fab md-mini md-primary" md-theme="blue" v-on:click="setProductForm(indice)">
											<md-icon>mode_edit</md-icon>
										</md-button>
										<md-button class="md-fab md-mini md-warn" md-theme="blue" v-on:click="remove(product.id, indice)">
											<md-icon>delete</md-icon>
										</md-button>
									</div>
								</md-table-cell>
						</md-table-row>
					</md-table-body>

					<!--Paginacion-->
					

				</md-table>
				<md-table-pagination 
					v-bind:md-total = "meta.total_count" 
					v-bind:md-page = "meta.current_page"
					v-bind:md-size = "table.per_page"
					v-bind:md-page-options = "[table.per_page,table.per_page * 2 ,table.per_page * 4]"
					md-label = "Registros por pagina"
					md-separator = "de"
					v-on:pagination = "pagination"
					v-on:size = "size"
					v-on:page = "page">
					
					</md-table-pagination>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
	import { util } from './../utils/util.js'
	import { product } from './../utils/products.js'

	export default {
		data() {
			return {
				product: {
					id: '',
					name: '',
					description: '',
					price: '',
					user: ''
				},
				products: [],
				errors: {},
				edit: false,
				table:{
					page: 1,
					per_page: 5
				},
				meta:{
					current_page: 1,
					next_page: null,
					prev_page: null,
					total_pages: 1,
					total_count: 0
				}
			}
		},
		methods: {
			register() {
				product.register(this, this.products);
			},
			moneyFormat(n){
				return util.moneyFormat(n);			
			},
			setProductForm(indice){
				this.edit = true;
				this.product = this.products[indice];
			},
			cancelEdit(){
				this.edit = false;
			},
			update(){
				product.edit(this, this.product, this.product.id, this.$parent);
			},
			remove(id, indice){
				product.delete(this, this.products, id, indice, this.$parent);
			},
			llenarProductos(arr){
				this.products = arr;
			},
			cleanProduct(){
				this.product.id = '';
				this.product.name = '';
				this.product.description= '';
				this.product.price= '';
				this.product.user= '';
			},
			llenarMeta(meta){
				this.meta.current_page = meta.current_page;
				this.meta.next_page = meta.next_page;
				this.meta.prev_page = meta.prev_page;
				this.meta.total_pages = meta.total_pages;
				this.meta.total_count = meta.total_count;
			},
			/*se ejecuta cuando se cambia el numero de registros
			por pagina*/
			size(){
				
			},
			/*se ejecuta despues de cambiar de pagina o el numero
			de registos por pagina*/
			pagination(evt){
				product.getList(this, 'login',evt.page,evt.size);
			},
			/*se ejecuta cuando se cambia de pagina*/
			page(evt){
				
			}
		},
		created() {
			product.getList(this, 'login',this.table.page,this.table.per_page);
		},

	}
</script>

<style>
</style>
