import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import ('../views/Home.vue'),
        redirect: {
            name:'Login'
        },
        children: [
            {
            path: 'Login',
            name: 'Login',
            component: () => import ('../views/LogIn.vue'),
        },
        {
            path: 'Singup',
            name: 'Singup',
            component: () => import ('../views/SingUp.vue'),
        },
    ]
    },
    {
        path: '/posit',
        name: 'posit',
        component: () => import ('../views/Posit.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router;