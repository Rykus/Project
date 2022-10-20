<template>
    <h1>Inicio de sesión</h1>
    
    <div>
        <label>Email</label>
        <input type="text" v-model= "inputId">
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model= "inputPass">
    </div>
     <router-link :to="{name: 'SingIn'}">Registrate</router-link>
</template>

<script setup>
import {ref} from 'vue';

const inputId = ref('correo electrónico');
const inputPass = ref('Password');
</script>

<style scoped>

</style>
