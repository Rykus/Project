<template>

  <!-- TARJETA A ENSEÑAR -->
  <div class="max-w-sm rounded overflow-hidden shadow-lg" v-if="Show">
   <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"  >{{prop.tarea.tittle}}</div>
    <p class="text-gray-700 text-base">{{prop.tarea.description}}</p>
  </div>


<!-- BOTONES -->
<div class="px-6 pt-4 pb-2">
    <button @click="completada" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> completar </button>
    <button @click="Show=!Show" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> MODIFICAR </button>
    <button @click="borrarTarea" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> BORRAR :( </button>
    <span  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{prop.tarea.created_at}}</span>
    <span >{{prop.tarea.id}}</span>
  </div>
</div>



<!-- TARJETA MODIFICAR -->
<div class="max-w-sm rounded overflow-hidden shadow-lg" v-if="!Show">
  <form @submit.prevent="" class="px-6 py-4">
    <input type="text" v-model ="tarea.tittle" placeholder = "¿Que quieres que te agobie OTRA VEZ?" class="font-bold text-xl mb-2">
    <input type="textarea" v-model ="tarea.description" placeholder ="Describe tu odio MAS PROFUNDO" class="text-gray-700 text-base">
    
  </form>
    <div class="px-6 pt-4 pb-2">
    <button type="submit" @click="Show=!Show" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> MODIFICAR ENTRADA </button>
    <span >{{prop.tarea.id}}</span>
  </div>
</div>
 

</template>


<script setup>
import {updateComplete} from '../api/index'
import {deleteTask} from '../api/index'
import {ref} from 'vue'


const prop = defineProps({
    tarea: Object,
    });

const completada = async () => {
prop.tarea.isCompleted=!prop.tarea.isCompleted
const response = await updateComplete(prop.tarea.id,prop.tarea.isCompleted)
}


const Show = ref(true)


const ModificarTarea = async () =>{
    Show = !Show
    const response = await updateTask(prop.tarea.id,prop.tarea)
    
}

const borrarTarea = async () => {
    const response = await deleteTask(prop.tarea.id)
}


</script>


<style scoped>

</style>
