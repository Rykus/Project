<template >
    <header><navbar/></header>
    <body class="glop flexi">
        
   
    <div class="mt-10">
    <Taskcreate @evento="ShowTask"/>
   </div>
    <div v-for="data in titulitis" v-bind:key="data.id" class="mt-10">
        <Task @evento="ShowTask" :tarea="data"/>
    </div>
    </body>       
<footer class="glob"></footer>
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
.flexi{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
}
</style>





