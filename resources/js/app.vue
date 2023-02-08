<!-- the <router-view> tags is responsible for where 
    to show the rendered component based on the routes in routes.js file
    its only used once in file in app.vue
    and app.vue is not the home page, because here we use router-view here to tell view 
    that we will render our app here -->

	<template>
		<navBar/>
	   
		   <div class="app">
			   
			   <sideBar/>
			   
			   <b-container fluid class="align-self-start overallLayout">
				   
				<!-- <b-container fluid class="align-self-start">    -->
				   <b-container fluid> 
					    
					   <!--:key="$route.fullPath" using to clear cache on route change-->

					   <!-- <router-view :key="$route.fullPath"></router-view> -->

					   <router-view></router-view>
				   
				   </b-container>
	   
			   </b-container>
		   </div>
	</template>
		
	<script setup>
	   
		import navBar from './layout/Navbar.vue';
		import sideBar from "./layout/Sidebar.vue"
	</script>
	   
	   
	   
	   <!-- below css for all the project -->
	<style lang="scss">


		
</style>