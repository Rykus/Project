import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import ('../views/Home.vue'),
        children: [
            {
            path: 'Login',
            name: 'Login',
            component: () => import ('../views/LogIn.vue'),
        },
        {
            path: 'SingIn',
            name: 'SingIn',
            component: () => import ('../views/SingIn.vue'),
        },
    ]
    },



    {
        path: '/SingIn',
        name: 'SingIn',
        component: () => import ('../views/SingIn.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;