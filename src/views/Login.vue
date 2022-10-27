<template>
    <h1>Inicio de sesión</h1>
    <form  @submit.prevent="handleSubmit">
     <div class="min-h-screen bg-yellow-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-4 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold text-green-400 " >Accede al Cyber Reino...</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-10 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" v-model="inputId" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-green-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-green-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-green-400 peer-focus:text-sm ">Correo electronico</label>
						</div>
						<div class="relative">
							<input autocomplete="off" v-model="inputPass" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password"  class="absolute left-0 -top-3.5 text-green-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-green-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-green-400 peer-focus:text-sm">Contraseña</label>
						</div>
						<div class="relative">
							<button type=submit class="bg-blue-500 text-white rounded-md px-2 py-1 alahu">Acceso al Cyber Reino</button>
						</div>
                        <router-link :to="{name: 'Singup'}" class="bg-blue-500  alahu text-white rounded-md px-2 py-1 ">Crea Usuario</router-link>
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
.alahu{color: var(--textoprincipal)}
.alahulabel{color: var(--textosecundario)}
</style>
