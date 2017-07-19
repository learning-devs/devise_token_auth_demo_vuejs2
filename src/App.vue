<template>
	<div id="app">

		<md-toolbar md-theme="blue">
			<md-button class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Demo API</h2>


			<router-link tag="md-button" to="login" class="md-raised ">Iniciar Sesión</router-link>

			<router-link v-bind:to="{ name:'registerUser' }">
				<md-button class="md-raised" >Registro</md-button>
			</router-link>

		</md-toolbar>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			login() {

			}
		}
	}
</script>

<style>
</style>
