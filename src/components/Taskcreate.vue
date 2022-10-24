<template>
    
<input type="text" v-model ="tarea.tittle" placeholder = "¿Que quieres que te agobie?">
<input type="textarea" v-model ="tarea.description" placeholder ="Describe tu odio">
<button @click="crearTarea">AQUI SE CREAN COSAS</button>
</template>

<script setup>
import {ref} from 'vue';

const crearTarea = async () =>{
    console.log (tarea.value)
}

const tarea = ref ({
    tittle: "", 
    description: "",
    })

</script>

<style scoped>

</style>
