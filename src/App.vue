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
<router-view></router-view>
</template>

<script setup>

import {createClient} from '@supabase/supabase-js'
import { onMounted } from '@vue/runtime-core'
import {useAuthStore} from './store/auth'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase)
const auth = useAuthStore()



</script>

<style scoped>

</style>
