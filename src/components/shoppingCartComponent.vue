<template>
	<div class="container">
		<md-card md-with-hover>
			<md-card-header>
				<div class="md-display-1">Carrito de compras</div>
			</md-card-header>

			<md-card-content>
				<md-table-card>
					<md-table>
						<md-table-header>
							<md-table-row>
								<md-table-head>Producto</md-table-head>
								<md-table-head>Valor</md-table-head>
								<md-table-head>Cantidad</md-table-head>
								<md-table-head>Acciones</md-table-head>
							</md-table-row>
						</md-table-header>

						<md-table-body>
							<md-table-row v-for="(product, indice) in productList" :key="product.id">
								<md-table-cell>{{ product.name }}</md-table-cell>
								<md-table-cell>{{ product.price | moneyFormat }}</md-table-cell>
								<md-table-cell>{{ product.quantity }}</md-table-cell>
								<md-table-cell>
									<div>
										<md-button class="md-fab md-mini md-warn" md-theme="blue" v-on:click="remove(indice)">
											<md-icon>delete</md-icon>
										</md-button>
									</div>
								</md-table-cell>
							</md-table-row>
						</md-table-body>
					</md-table>
				</md-table-card>
			</md-card-content>
		</md-card>

		<br>
		<!--Medios de pago-->
		<md-card md-with-hover v-if="this.total.amount > 0">
			<md-card-header>
				<div class="md-display-1">Medios de pago</div>
			</md-card-header>
			<md-card-content>
				<PayPal
					:amount= "this.total.amount.toString()"
					:currency= "this.total.currency"
					:client="credentials"
					:invoiceNumber="this.invoceNumber"
					:dev="true"
					v-on:paypal-paymentAuthorized="paymentAuthorized"
					v-on:paypal-paymentCompleted="paymentCompleted"
					v-on:paypal-paymentCancelled="paymentCancelled">
				</PayPal>
			</md-card-content>
		</md-card>
	</div>
</template>

<script>
	import PayPal from 'vue-paypal-checkout'
	import store from './../store'
	import { auth } from './../utils/auth.js'
	import { paypalService } from './../utils/paypal.js'
	import { util } from './../utils/util.js'

	export default {
		components: {
			PayPal
		},
		data() {
			return{
				total:{
					amount: 0,
					currency: "USD"
				},
				credentials:{
					sandbox: 'AcuyVvHlibkQljivZBmomhrzmEsbioUqOFVW2NZSanibt8QK4yxVyWRhQ-12qeT-yPP1l1Y58EE0tP-s'
				},
				invoceNumber: util.random_text(20)
			}
		},
		methods: {
			remove(indice){
				store.dispatch('REMOVE_PRODUCT_SHOPPING_CART',indice)
			},
			paymentAuthorized(data){
			},
			paymentCompleted(data){
				paypalService.complete(this,this.$parent,data);
			},
			paymentCancelled(data){
			}
		},
		computed: {
			productList(){
				if(this.$store.getters.productList.length == 0){
					this.total.amount = 0
				}else{
					for (var x in this.$store.getters.productList) {
						this.total.amount += this.$store.getters.productList[x].price;
					}
				}
				return store.getters.productList
			}
		},
		created(){
			auth.tokenValid(this,null,'login');
		}
	}
</script>