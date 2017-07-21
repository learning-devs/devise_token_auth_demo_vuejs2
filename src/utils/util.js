export const util = {
	/*
		context = El conexto del componente
		redirect = La ruta que redireccionara
	*/
	redirect(context,redirect){
		context.$router.push({ name: redirect });
	},

	custom_alert:{
		alert: {
			title: 'Ups...',
			content: 'Algo salió mal.'
		},

		/*
			ref =
			title = Titulo de la alerta
			msg = Mensaje alerta
			context = El conexto del componente
		*/
		openDialog(ref, context, title, content) {
			this.alert.title = title
			this.alert.content = content
			context.$refs[ref].open();
		},

		/*
			ref =
		*/
		closeDialog(ref) {
			this.$refs[ref].close();
		}
	}
}
