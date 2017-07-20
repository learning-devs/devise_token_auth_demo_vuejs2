export const util = {
	/*
		context = El conexto del componente
		redirect = La ruta que redireccionara
	*/
	redirect(context,redirect){
		context.$router.push({ name: redirect });
	}
}