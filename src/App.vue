<template>
	<div id="app">

		<md-toolbar md-theme="blue">
			<md-button class="md-icon-button">
			<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Demo API</h2>
			<navegation></navegation>
		</md-toolbar>

		<router-view></router-view>
	</div>
</template>

<script>
	import Navegation from './components/navegation.vue'
	export default {
		components: {
			navegation: Navegation
		},
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
	.container {
		width: 70%;
		margin: 50px auto;
	}
	.left-padding {
		padding-left: 10px;
	}
	.right-padding {
		padding-right: 10px;
	}
	.md-card .md-card-header {
		padding: 10px 16px 5px 16px;
	}
	.md-card .md-display-1 {
		font-weight: 500;
	}
	.md-table .md-table-cell .md-button:last-child {
    margin: 6px 0px 6px 8px;
	}
</style>
