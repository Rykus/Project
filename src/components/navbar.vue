<template>
<nav id="header" class="glob w-full z-30 top-10 py-1 bg-yellow-100 shadow-lg border-b border-blue-400">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input class="hidden" type="checkbox" id="menu-toggle">
         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  <img src="../assets/afterlife.png" class="h-10" alt="">
               </ul>
            </nav>
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
                
                <button @click = "buttidOut" class="buttoncolor buttonletters bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Salir del Hielo</button>
            </div>
         </div>
      </div>
   </nav>
   
</template>

<script setup>
import {logOut} from '../api/index.js' ;
import {useAuthStore} from '../store/auth.js'
import {useRouter} from 'vue-router'

const userOut = useAuthStore();
const router = useRouter();

const Funciona = () => {console.log('funciona')}

const buttidOut = async () => {
    console.log('funciona?')
    const response = await logOut()    
    router.push({name:'Login'})
    userOut.logout()
    console.log('ha salido')
}
</script>


<style>
.backgroundcol{background: var(--colordefondo)}
.buttoncolor{background: var(--colordebotones)}
.buttonletters{color: var(--letrabotones)}
.letterscolors{color: var(--letratexto)}
.backgroundcards{background: var(--fondotarjetas)}
.backgroundcards2{background: var(--fondotarjetas2)}
.glop{
	background-image: url(../assets/fondocard.jpg);
	background-size: cover;
}
.glob{
	background-image: url(../assets/fondobackground.jpg);
	background-size: cover;
}

.margins{
	margin-bottom: 10px !important;		
}
</style>


