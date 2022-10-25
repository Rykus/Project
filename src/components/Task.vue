<template>
   <div class="max-w-sm rounded overflow-hidden shadow-lg">
   <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{prop.tarea.tittle}}</div>
    <p class="text-gray-700 text-base">
        {{prop.tarea.description}}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button @click="modificarTarea" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> MODIFICAR </button>
    <button @click="borrarTarea" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> BORRAR :( </button>
    <span  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{prop.tarea.created_at}}</span>
    <span >{{prop.tarea.id}}</span>
  </div>
</div>
</template>

<script setup>

import {updateTask} from '../api/index'
import {deleteTask} from '../api/index'
import {ref} from 'vue'


const prop = defineProps({
    tarea: Object,
    });

const ModificarTarea = async () =>{
    const response = await updateTask(taskId, task)
}



const borrarTarea = async () => {
    const response = await deleteTask(prop.tarea.id)
}

</script>


<style scoped>

</style>
