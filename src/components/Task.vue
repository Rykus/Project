<template>

  <!-- TARJETA A ENSEÑAR -->
  <div class="max-w-sm rounded overflow-hidden shadow-lg border-4 border-red-600" v-if="Show">
   <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 letterscolors">{{prop.tarea.tittle}}</div>
    <p class="text-gray-700 text-base letterscolors">{{prop.tarea.description}}</p>
  </div>


<!-- BOTONES -->
<div class="px-6 pt-4 pb-2">
    <button @click="completada" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 buttoncolor buttonletters"> completar </button>
    <button @click="Show=!Show" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 buttoncolor buttonletters"> MODIFICAR </button>
    <button @click="borrarTarea" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 buttoncolor buttonletters"> BORRAR :( </button>
    
  </div>
</div>



<!-- TARJETA MODIFICAR -->
<div class="max-w-sm rounded overflow-hidden shadow-lg border-4 border-red-600" v-if="!Show">
  <form @submit.prevent="ModificarTarea" class="px-6 py-4">
    <input type="text" v-model="newTitulo" placeholder = "¿No sabes ni que querias?" class="font-bold text-xl mb-2 buttoncolor buttonletters">
    <input type="textarea" v-model ="newDescripcion" placeholder ="LA INFO, CHUM" class="text-gray-700 text-base buttoncolor buttonletters">
    <button type="submit" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 buttoncolor buttonletters mt-10"> MODIFICAR ENTRADA </button>
  </form>
    <div class="px-6 pt-4 pb-2">
    <span >{{prop.tarea.id}}</span>
  </div>
</div>
 

</template>


<script setup>
import {updateComplete} from '../api/index'
import {deleteTask} from '../api/index'
import {ref} from 'vue'
import {updateTask, getTask} from '../api/index';


// CREADO POR SI FUNCIONA
const emits = defineEmits (['evento']);

const prop = defineProps({
    tarea: Object,
    });


const completada = async () => {
prop.tarea.isCompleted=!prop.tarea.isCompleted
const response = await updateComplete(prop.tarea.id,prop.tarea.isCompleted)
emits('evento')

}




const Show = ref(true)
const newTitulo = ref();
const newDescripcion = ref()

const ModificarTarea = async () =>{     
Show.value=!Show.value
const response = await updateTask(prop.tarea.id, newTitulo.value, newDescripcion.value)
emits('evento')  
}

const borrarTarea = async () => {
const response = await deleteTask(prop.tarea.id)
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
