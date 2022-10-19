<template>
<h1>Task App</h1>
<ul>
  <li>
    <router-link :to="{name: 'home'}"> Home</router-link>
  </li>
  <li>
    <router-link :to="{name: 'login'}">login</router-link>
  </li>
</ul>
<router-view></router-view>
</template>

<script setup>
import {createClient} from '@supabase/supabase-js'
import { onMounted } from '@vue/runtime-core'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase)

const registro = async () =>{
  const result = supabase.auth.signUp({
    email: 'blanco.jimenez.1992@gmail.com',
    password: '123456',
})
console.log (result)
}

const user = null

const login = async () => {
 const response = await supabase.auth.signInWithPassword({
  email: 'blanco.jimenez.1992@gmail.com',
  password: '123456',
  })
  nuevoTask (response.data.user.id)
}

const nuevoTask = async (id) => {
    const response = await supabase.from('task')
        .insert({
            user_id: id,
            tittle: 'Titulo',
            description: 'Descripcion del task'
        })
    console.log(response)
}

const getTask = async () => {
  const response = await supabase
  .from ('task')
  .select ('*')
  .order ('id',{ascending: false})
}

const updateTask = async () => {
const response = await supabase
  .from('task')
  .update({
    tittle: 'titulo modif',
    description: 'Descripcion modif',
  })
  .eq('id', '1')
} 


const deleteTask = async () => {
  const response = await subapase
  .from ('task')
  .delete()
  .eq('id','1')
}


onMounted(() => {
  //registro()
  //login()
})

console.log(process.env.NODE_ENV)
</script>

<style scoped>

</style>
