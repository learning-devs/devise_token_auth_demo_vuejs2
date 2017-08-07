import { endpoints } from './../endpoints.js'
import { util } from './util.js'
import { auth } from './auth.js'

export const paypalService = {
	/*
		context = Contexto del componente
		parent_context = Contexto del componente padre
        data= Objeto que contiene la respuesta cuando se completa el pago en paypal
    */
    complete(context,parent_context,data){
		var creds = {
			paypal_id: data.id,
			payer_email: data.payer.payer_info.email,
			recipient_name: data.payer.payer_info.shipping_address.recipient_name,
			payer_id: data.payer.payer_info.payer_id,
			state: data.state,
			currency: data.transactions[0].amount.currency,
			amount: parseFloat(data.transactions[0].amount.total),
			sale_id: data.transactions[0].related_resources[0].sale.id
		};
		var header = auth.getAuthHeader();
		context.$http.post(endpoints.payments.paypal, creds,{
			headers: {
				uid: header.uid,
				expiry: header.expiry,
				client: header.client,
				'token-type': header.token_type,
				'access-token': header.access_token,
			}
		})
		.then(response => {
			return response.headers;
		}, response => {
			util.custom_alert.openDialog('dialog', parent_context, 'Error', 'Ocurrio un error guardando el pago, comunicarle al administrador.');
		})
		.then(response => {
			if (response) {
				util.custom_alert.openDialog('dialog', parent_context, 'Correcto', 'El pago se registro con exito.');
			}
		});
    }
}