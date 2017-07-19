<template>
	<div>
		Productos
	</div>
</template>

<script>
	export default {
		data() {
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
			}
		}
	}
</script>

<style>
</style>
