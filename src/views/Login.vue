<template>
    <h1>Inicio de sesión</h1>
    <form  @submit.prevent="handleSubmit">
     <div class="min-h-screen bg-yellow-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form with Floating Labels</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" v-model="inputId" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" v-model="inputPass" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password"  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button type=submit class="bg-blue-500 text-white rounded-md px-2 py-1">Acceso</button>
						</div>
                        <router-link :to="{name: 'Singup'}" class="bg-blue-500 text-white rounded-md px-2 py-1">Registrate</router-link>
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

const inputId = ref('blanco.jimenez.1992@gmail.com');
const inputPass = ref('123456');
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

</style>
