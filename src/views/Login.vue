<template>
    <h1>Inicio de sesión</h1>
    <form  @submit.prevent="handleSubmit">
    <div>
        <label>Email</label>
        <input type="text" v-model="inputId" placeholder="Email">
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model="inputPass" placeholder="password">
    </div>
    <button>Acceso</button>
</form>
     <router-link :to="{name: 'Singup'}">Registrate</router-link>


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
if (response){
     store.login(response)
     router.push({name: 'posit'})}
}

</script>c

<style scoped>

</style>
