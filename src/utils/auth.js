import { endpoints } from './../endpoints.js'
import { header_names } from './../localStorageVariables.js'
import { user_names } from './../localStorageVariables.js'


export const auth = {
	user: {
		authenticated: false
	},
	/*
		context = El conexto del componente
		creds = La data que se enviara al servicio
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
	*/
	login(context, creds, redirect) {
		context.$http.post(endpoints.auth.sign_in, creds)
		.then(response => {
			return response.headers;
		},response => {
			console.log(response);
			alert("Error, verifique los datos");
		})
		.then(response => {

			if (response) {
				this.setAuthHeader(response);
				this.tokenValid(context)
				if (this.user.authenticated && redirect) {
					context.$router.push({ name: redirect });
				}
			}
		});
	},
	/*
		context = El conexto del componente
	*/
	tokenValid(context) {
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
		})
		.then(response => {
			if (response && response.success) {
				this.setUserInformation(response);
				this.user.authenticated = true;
			}else{
				this.user.authenticated = false;
			}
		});
	},
	/*
		context = El conexto del componente
		creds = La data que se enviara al servicio
		redirect = La ruta que redireccionara en caso que el servicio responda correctamente
	*/
	signup(context, creds, redirect) {
		context.$http.post(endpoints.auth.base, creds)
		.then(response => {
			return response.headers;
		},response => {
			alert("Error, verifique los datos");
		})
		.then(response => {
			if (response){
				this.setAuthHeader(response);
				if (this.tokenValid && redirect){
					context.$router.push({ name: redirect });
				}
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
					context.$router.push({ name: redirect });
				}
			}
		})

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
		localStorage.setItem(header_names.access_token,data.map["access-token"][0]);
		localStorage.setItem(header_names.token_type,data.map["token-type"][0]);
		localStorage.setItem(header_names.client,data.map["client"][0]);
		localStorage.setItem(header_names.expiry,data.map["expiry"][0]);
		localStorage.setItem(header_names.uid,data.map["uid"][0]);
	},
	/*
		json = Json que contiene la información de usuario
	*/
	setUserInformation(json) {
		localStorage.setItem(user_names.name ,json.data.name);
		localStorage.setItem(user_names.email,json.data.email);
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
		localStorage.removeItem(user_names.user_email);
	}
}
