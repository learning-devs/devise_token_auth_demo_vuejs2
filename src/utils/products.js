	import Vue from 'vue'
import { endpoints } from './../endpoints.js'
import { util } from './util.js'
import { auth } from './auth.js'


export const product =  {

	/*
		context = El conexto del componente
		redirect = La ruta que redireccionara en caso que no este logueado
		page = Pagina que se esta listando
		size = Numero de registros a mostrar
	 */
	getList(context, redirect,page,size) {
		auth.tokenValid(context, null, redirect);
		var header = auth.getAuthHeader();

		context.$http.get(endpoints.products.base, {
			params:  {
				page: page,
				size: size
			},
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
			//error callback
			return response.json();
		})
		.then(response => {
			context.llenarProductos(response.products);
			context.llenarMeta(response.meta);
		});
	},

	getProduct(context, id) {
		const header = auth.getAuthHeader();
		const url = endpoints.products.base + '/' + id;

		context.$http.get(url,{
			headers: {
				uid: header.uid,
				expiry: header.expiry,
				client: header.client,
				'token-type': header.token_type,
				'access-token': header.access_token,
			}
		})
		.then(response => {

		}, response => {
			//error callback
		});
	},

	/*
		context = El conexto del componente
		arr = El array donde se almacena los productos que devuelva el server
	*/
	register(context, arr){
		var header = auth.getAuthHeader();
		context.$http.post(endpoints.products.base, context.product, {
			headers: {
				uid: header.uid,
				expiry: header.expiry,
				client: header.client,
				'token-type': header.token_type,
				'access-token': header.access_token,
			}
		})
		.then(response => {
			arr.push(response.body.product);
			context.cleanProduct();
		}, response => {
			//error callback
			if(response.body.errors) {
				Vue.set(context.$data, 'errors', response.body.errors)
			}
		})
	},
	/*
		context = El conexto del componente
		creds = La data que se enviara al servicio
		id = El id del producto a editar
		parent_context = El contexto donde se mostrada el mensaje con la respuesta del servidor
	 */
	edit(context, creds, id, parent_context){
		const header = auth.getAuthHeader();
		const url = endpoints.products.base + '/' + id;
		context.$http.put(url, creds, {
			headers: {
				uid: header.uid,
				expiry: header.expiry,
				client: header.client,
				'token-type': header.token_type,
				'access-token': header.access_token,
			}
		})
		.then(response => {
			util.custom_alert.openDialog('dialog', parent_context, 'Correcto', 'Se ha actualizado correctamente');
		}, response => {
			//error callback
			if(response.body.errors) {
				Vue.set(context.$data, 'errors', response.body.errors)
			}
		});
	},
	/*
		context = El conexto del componente
		id = El id del producto a eliminar
		arr = Array que contiene los productos
		indice = Posicion del producto en el array
		parent_context = El contexto donde se mostrada el mensaje con la respuesta del servidor
	 */
	delete(context, arr, id, indice, parent_context){
		const header = auth.getAuthHeader();
		const url = endpoints.products.base + '/' + id;

		context.$http.delete(url,{
			headers: {
				uid: header.uid,
				expiry: header.expiry,
				client: header.client,
				'token-type': header.token_type,
				'access-token': header.access_token,
			}
		})
		.then(response => {
			util.custom_alert.openDialog('dialog', parent_context, 'Correcto', 'Se ha eliminado correctamente.');
			arr.splice(indice, 1);
		}, response => {
			//error callback
			if (response.body.errors[0]) {
				util.custom_alert.openDialog('dialog', parent_context, 'Error', response.body.errors[0]);
			}else{
				util.custom_alert.openDialog('dialog', parent_context, 'Error', response.body.errors.full_messages[0]);
			}
		});
	}
}
