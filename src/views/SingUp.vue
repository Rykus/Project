<template>
    <h1>Ventana de Registro de cuentas</h1>
      <router-link :to="{name: 'Login'}">Inicia sesión</router-link>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Email</label>
        <input type="email" v-model= "inputId" placeholder="Email">
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model= "inputPass" placeholder="Password">
    </div>
    <div>
        <label>Confirm Password</label>
        <input type="password" v-model= "inputPassR" placeholder="Confirm password">
    </div>
    <button>Sign Up</button>
    </form>
</template>

<script setup>
import {registro} from '../api/index'
import {ref} from 'vue';
import {useRouter} from 'vue-router'

const inputId = ref('');
const inputPass = ref('');
const inputPassR = ref('');
const router = useRouter();

const handleSubmit = async () => {

    const response = await registro(inputId.value ,inputPass.value);
    
    if (response) router.push({name: 'Login'})
    console.log();
}


</script>

<style scoped>

</style>
