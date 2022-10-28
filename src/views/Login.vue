<template>
    <h1>Inicio de sesión</h1>
    <form  @submit.prevent="handleSubmit">
     <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12 glob" >
	<div class="relative py-4 sm:max-w-xl sm:mx-auto">

		<div class="backgroundcol relative px-4 py-10  shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="buttonletters text-2xl font-semibold text-green-400 " >Accede al Afterlife, chum</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-10 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 ">
						<div class="relative">
							<input autocomplete="off" v-model="inputId" id="email" name="email" type="text" class=" peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class=" absolute left-0 -top-3.5 text-green-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-green-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-green-400 peer-focus:text-sm ">Correo electrónico</label>
						</div>
						<div class="relative">
							<input autocomplete="off" v-model="inputPass" id="password" name="password" type="password" class="yarpeer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password"  class=" absolute left-0 -top-3.5 text-green-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-green-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-green-400 peer-focus:text-sm">Contraseña</label>
						</div>
						<div class="relative margins">
							<button type=submit class=" text-white rounded-md px-2 py-1 buttoncolor buttonletters">Acceso al tablón</button>
						</div>
						
						<router-link :to="{name: 'Singup'}" class="margins mt-3 text-white rounded-md px-2 py-1 buttoncolor buttonletters ">Crea Usuario</router-link>
					</div>
				</div>
				                     
			</div>
		</div>
	</div>
</div></form>

</template>

<script setup>
import {ref} from 'vue';
import {login} from '../api/index'
import {useRouter} from 'vue-router'
import {useAuthStore} from '../store/auth'

const inputId = ref('');
const inputPass = ref('');
const router = useRouter();
const store = useAuthStore();

console.log (inputId, inputPass)

const handleSubmit = async () => {
const response = await login(inputId.value, inputPass.value);
console.log(response)
if (response){
    store.login(response)
    router.push({name:'posit'})
}}

</script>

<style scoped>
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

