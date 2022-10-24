<template>
    <h1>TABIEN</h1>
    <Taskcreate />
    <button @click = "buttidOut"> aqui te sales :D</button>
    

</template>

<script setup>
import {ref} from 'vue';
import {logOut} from '../api/index.js' ;
import {useAuthStore} from '../store/auth.js'
import {useRouter} from 'vue-router'
import Taskcreate from '../components/Taskcreate.vue'

const userOut = useAuthStore();
const router = useRouter();

const buttidOut = async () => {
    const response = await logOut()
    
    router.push({name:'Login'})
    userOut.logout()
    console.log('ha salido')
}
</script>

<style scoped>

</style>