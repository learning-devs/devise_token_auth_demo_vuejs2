import { endpoints } from './../endpoints.js'
import { header_names } from './../localStorageVariables.js'
import { user_names } from './../localStorageVariables.js'


export default {
	
	/*
		context = El conexto del componente
		creds = La data que se enviara al servicio
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
	 */
	getList(context,page) {

	},
	getProduct(context,id) {

	},
	/*
		context = El conexto del componente
		creds = La data que se enviara al servicio
		id = El id del producto a editar
	 */
	edit(context,creds,id){

	},
	/*
		context = El conexto del componente
		id = El id del producto a eliminar
	 */
	delete(context,id){

	}
}
