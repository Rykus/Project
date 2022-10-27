<template>
      
    <navbar/>
    <Taskcreate @evento="ShowTask"/>
   
    <div v-for="data in titulitis" v-bind:key="data.id">
        <Task @evento="ShowTask" :tarea="data"/>
    </div>

    <button @click = "buttidOut"> aqui te sales :D</button>
    

</template>

<script setup>
import {onMounted, ref} from 'vue';
import {logOut} from '../api/index.js' ;
import {useAuthStore} from '../store/auth.js'
import {useRouter} from 'vue-router'
import Taskcreate from '../components/Taskcreate.vue'
import Task from '../components/Task.vue'
import {getTask} from '../api/index'
import { objectToString } from '@vue/shared';
import navbar from '../components/navbar.vue'

const userOut = useAuthStore();
const router = useRouter();


const titulitis = ref();

const ShowTask = async () =>{ 
    const response = await getTask()
    titulitis.value = await response
}

onMounted ( async () => {
    await ShowTask()    
})

const onEvento = () =>{
    if (eventoRecivido.value = true)
    onMounted ( async () => {
    await ShowTask()    
})}

const buttidOut = async () => {
    const response = await logOut()    
    router.push({name:'Login'})
    userOut.logout()
    console.log('ha salido')
}



</script>

<style scoped>

</style>





