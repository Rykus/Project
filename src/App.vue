<template>
<h1>Task App</h1>
<ul>
  <li>
    <router-link :to="{name: 'Login'}">Inicio de sesión</router-link>
  </li>
  <li>
    <router-link :to="{name: 'Singup'}">Registro de cuenta</router-link>
  </li>
  <li>
    <router-link :to="{name: 'posit'}">Pagina de task</router-link>
  </li>
</ul>

<!-- EL rollo es meter 2 views aqui, una con la pagina inicial y otra con los post its
      La pagina inicial tendra dos componentes, el log in y el register. Cada uno con su acceso a la api, con el log y el register (obviamente)
      el otro tendra un componente estatico arriba, para crear nuevos post its. con el API de crear post.
      Abajo habra un componente que tendra todos los post it creados.
      Los post it creados abajo tendran 3 funciones extras, deletearlo, darlo por hecho y archivarlo
      2
-->
<router-view></router-view>
</template>

<script setup>
import {createClient} from '@supabase/supabase-js'
import { onMounted } from '@vue/runtime-core'
import {useAuthStore} from './store/auth'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase)
const auth = useAuthStore()
onMounted(() => {
  //registro()
  //login()
})


</script>

<style scoped>

</style>
