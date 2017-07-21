import { endpoints } from './../endpoints.js'
import { header_names } from './../localStorageVariables.js'
import { user_names } from './../localStorageVariables.js'
import { util } from './util.js'

export const auth = {
	user: {
		authenticated: false
	},

	/*
		parent_context = El contexto donde se mostrada la alerta en caso de error
		context = El conexto del componente
		creds = La data que se enviara al servicio
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
	*/
	login(context, creds, redirect, parent_context) {
		context.$http.post(endpoints.auth.sign_in, creds)
		.then(response => {
			return response.headers;
		},response => {
			util.custom_alert.openDialog('dialog', parent_context, 'Error', response.body.errors[0]);
		})
		.then(response => {
			if (response) {
				this.setAuthHeader(response);
				this.tokenValid(context, redirect);
			}
		});
	},


	/*
		context = El conexto del componente
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
		redirect_error = La ruta que redireccionara en caso que el servicio responda con error
	*/
	tokenValid(context, redirect, redirect_error) {
		var header = this.getAuthHeader();
		context.$http.get(endpoints.auth.validate_token, {
			headers: {
				uid: header.uid,
				client: header.client,
				'access-token': header.access_token
			}
		})
		.then(response => {
			return response.json();
		}, response => {
			return response.json();
		})
		.then(response => {
			if (response && response.success) {
				this.setUserInformation(response);
				this.user.authenticated = true;
				if (redirect) {
					util.redirect(context, redirect);
				}
			}else{
				this.user.authenticated = false;
				if (redirect_error) {
					util.redirect(context, redirect_error);
				}
			}
		});
	},


	/*
		parent_context = El contexto donde se mostrada la alerta en caso de error
		context = El conexto del componente
		creds = La data que se enviara al servicio
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
	*/
	signup(context, creds, redirect, parent_context) {
		context.$http.post(endpoints.auth.base, creds)
		.then(response => {
			return response.headers;
		},response => {
			debugger;
			util.custom_alert.openDialog('dialog', parent_context, 'Error',response.body.errors.full_messages);
		})
		.then(response => {
			if (response){
				this.setAuthHeader(response);
				this.tokenValid(context, redirect);
			}
		});
	},


	/*
		context = El conexto del componente
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
	*/
	logout(context, redirect) {
		var header = this.getAuthHeader();
		context.$http.delete(endpoints.auth.sign_out, {
			headers: {
				uid: header.uid,
				client: header.client,
				'access-token': header.access_token
			}
		})
		.then(response => {
			return response.json()
		})
		.then(response => {
			if (response) {
				this.clearAuthHeader();
				this.clearUserInformation();
				this.user.authenticated = false;
				if (redirect) {
					util.redirect(context, redirect);
				}
			}
		})

	},
<<<<<<< HEAD
	/*
		parent_context = El contexto donde se mostrada la alerta en caso de error
		context = El conexto del componente
		creds = La data que se enviara al servicio
	*/
	changePasswordFromEmail(context, creds,parent_context){
		context.$http.GET(endpoints.auth.password_edit_from_email,creds)
		.then(response => {
			return response.json();
		},response => {
			if (response.body.errors[0]) {
				util.custom_alert.openDialog('dialog', parent_context, 'Error',response.body.errors[0]);
			}else{
				util.custom_alert.openDialog('dialog', parent_context, 'Error',response.body.errors.full_messages[0]);
			}
			
		})
		.then(response => {
			if (response) {
				util.custom_alert.openDialog('dialog', parent_context, 'Correcto','Se ha cambiado la contraseña correctamente');
			}
		});
=======

	changePasswordFromEmail(){

>>>>>>> 2167455cb7f1e14e191b62a0f5d046221b3cb032
	},


	/*
		parent_context = El contexto donde se mostrada la alerta en caso de error
		context = El conexto del componente
		creds = La data que se enviara al servicio
	*/
	changePassword(context, creds, parent_context){
		var header = this.getAuthHeader();
		context.$http.put(endpoints.auth.password, creds, {
			headers: {
				uid: header.uid,
				client: header.client,
				'access-token': header.access_token
			}
		})
		.then(response => {
			return response.json();
		},response => {
			if (response.body.errors[0]) {
				util.custom_alert.openDialog('dialog', parent_context, 'Error', response.body.errors[0]);
			}else{
				util.custom_alert.openDialog('dialog', parent_context, 'Error', response.body.errors.full_messages[0]);
			}

		})
		.then(response => {
			if (response) {
				util.custom_alert.openDialog('dialog', parent_context, 'Correcto', 'Se ha cambiado la contraseña correctamente');
			}
		});
	},
	/*
		parent_context = El contexto donde se mostrada la alerta en caso de error
		context = El conexto del componente
		creds = La data que se enviara al servicio
	*/
	recoverPassword(context,creds,parent_context){
		context.$http.post(endpoints.auth.password,creds)
		.then(response => {
			return response.json();
		},response => {
			if (response.body.errors[0]) {
				util.custom_alert.openDialog('dialog', parent_context, 'Error',response.body.errors[0]);
			}else{
				util.custom_alert.openDialog('dialog', parent_context, 'Error',response.body.errors.full_messages[0]);
			}
			
		})
		.then(response => {
			if (response) {
				util.custom_alert.openDialog('dialog', parent_context, 'Correcto','Se ha enviado un correo para actualizar la contraseña.');
			}
		});
	},
	getAuthHeader() {
		var header = {
			uid: localStorage.getItem(header_names.uid),
			client:  localStorage.getItem(header_names.client),
			access_token: localStorage.getItem(header_names.access_token),
			token_type: localStorage.getItem(header_names.token_type),
			expiry: localStorage.getItem(header_names.expiry)
		}
		return header
	},


	/*
		data = Objeto que contiene el header de la respuesta del servicio
	*/
	setAuthHeader(data) {
		localStorage.setItem(header_names.access_token, data.map["access-token"][0]);
		localStorage.setItem(header_names.token_type, data.map["token-type"][0]);
		localStorage.setItem(header_names.client, data.map["client"][0]);
		localStorage.setItem(header_names.expiry, data.map["expiry"][0]);
		localStorage.setItem(header_names.uid, data.map["uid"][0]);
	},


	/*
		json = Json que contiene la información de usuario
	*/
	setUserInformation(json) {
		localStorage.setItem(user_names.name , json.data.name);
		localStorage.setItem(user_names.email, json.data.email);
	},


	/*
		context = El conexto del componente
	*/
	getUserInformation(context) {
		this.tokenValid(context);
		var user = {
			name: localStorage.getItem(user_names.name),
			email: localStorage.getItem(user_names.email),
			authenticated: this.user.authenticated
		}
		return user
	},
	clearAuthHeader() {
		localStorage.removeItem(header_names.access_token);
		localStorage.removeItem(header_names.token_type);
		localStorage.removeItem(header_names.client);
		localStorage.removeItem(header_names.expiry);
		localStorage.removeItem(header_names.uid);
	},
	clearUserInformation() {
		localStorage.removeItem(user_names.name);
		localStorage.removeItem(user_names.email);
	}
}
