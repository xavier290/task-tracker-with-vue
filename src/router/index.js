import { createRouter, createWebHashHistory } from 'vue-router'

import Landing from '../views/landing'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'

const routes = [
    { 
        path: '/',
        name: Landing, 
        component: Landing
    },
    {
        path: '/home',
        name: Home,
        component: Home
    },
    {
        path: '/login', 
        name: Login,
        component: Login
    },
    {
        path: '/register', 
        name: Register,
        component: Register
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes // short for `routes: routes`
})

export default router