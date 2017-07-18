<template>
	<div class="container">

		<md-card md-with-hover>
		  <md-card-header>
		    <div class="md-title">Iniciar Sesión</div>
		  </md-card-header>

		  <md-card-content>
				<form novalidate @submit.stop.prevent="submit">

				  <md-input-container>
				    <md-icon>account_circle</md-icon>
				    <label>Email</label>
				    <md-input type="text"></md-input>
				  </md-input-container>

				  <md-input-container>
				    <md-icon>https</md-icon>
				    <label>Contraseña</label>
				    <md-input type="tel"></md-input>
				  </md-input-container>

					<md-button class="md-raised md-accent" md-theme="blue">Iniciar Sesión</md-button>

				</form>
		  </md-card-content>
		</md-card>

	</div>
</template>

<style scoped>
	.container {
		width: 70%;
		margin: 50px auto;
	}
</style>
