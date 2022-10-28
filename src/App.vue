<template>
<body class="backgroundcol">

</body>
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
.backgroundcol{background: var(--colordefondo)}
</style>
