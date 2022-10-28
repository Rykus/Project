<template>
      <div class="max-w-sm rounded overflow-hidden shadow-lg border-4 border-red-600 ">
   <div class="px-6 py-4">
    <input type="text" v-model ="tarea.tittle" placeholder = "Tipo de trabajo" class="font-bold text-xl mb-2 buttoncolor buttonletters">
    
    <input type="textarea" v-model ="tarea.description" placeholder ="Describe el trabajo" class="text-gray-700 text-base buttoncolor buttonletters">        
   </div>
  <div class="px-6 pt-4 pb-2">
    <button  @click="crearTarea" class=" text-white rounded-md px-2 py-1 buttoncolor buttonletters"> Publicar </button>
  </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import {newTask} from '../api/index'
import {useAuthStore} from '../store/auth'


const emits = defineEmits (['evento']);
const store = useAuthStore()

    const tarea = ref ({
    user_id: store.id,
    tittle: "", 
    description: "",
    })

const crearTarea = async () =>{
    console.log(tarea.value)
    const response = await newTask (tarea.value)
    console.log (tarea.value)
    emits('evento')    
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

</style>
