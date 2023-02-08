<template>

  <!-- <nav class="navbar fixed-top navbar-expand-lg"> -->
    <nav class="navbar navbar-expand-lg">
      <div class="logo">
       
      </div>
    <a class="navbar-brand" href="#"><strong> Admin Panel</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navlinks">

        <router-link :to="{ path: '/' }" class="button" title="Link 1">
          <span class="text" >Link 1</span>
        </router-link>


        <!-- <div id="Admin" v-if="userLogin.role=='admin' || userLogin.role=='despatch_manager' || userLogin.role=='marketing_edit'">
        -->
        <router-link :to="{ path: '/' }" class="button" title="Link 2">
          <span class="text">Link 2</span>
        </router-link>

        <router-link :to="{ path: '/' }" class="button" title="Link 3">
          <span class="text">Link 3</span>
        </router-link>
        <router-link :to="{ path: '/' }"  class="button" title="Link 4">
          <span class="text">Link 4</span>
        </router-link>
      
      </div>
    </div>

  </nav>
  
  </template>
   
  <script setup>
    import logoURL from '../assets/logo.png';
  </script>

  <style lang="scss" scoped>
.logo {
			
			img {
				width: 4rem;
			}
		}
  
  .drop{
    padding-left: 38px
  }

  .plink{
    text-decoration: none;
    color:#000;
    padding-top:5px;
  }
</style>