<template>
    <h1>Inicio de sesión</h1>
    <form  @submit.prevent="handleSubmit">
    <div>
        <label>Email</label>
        <input type="text" v-model= "inputId" placeholder="Email">
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model= "inputPass" placeholder="password">
    </div>
    <button>Acceso</button>
</form>
     <router-link :to="{name: 'Singup'}">acceso</router-link>
</template>

<script setup>
import {ref} from 'vue';
import {login} from '../api/index'
import {useRouter} from 'vue-router'

const inputId = ref('');
const inputPass = ref('');
const router = useRouter();


const handleSubmit = async () => {
const response = await login(inputId.value ,inputPass.value);
if (response) router.push({name: 'posit'})
}

</script>

<style scoped>

</style>
