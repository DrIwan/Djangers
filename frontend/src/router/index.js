import {createRouter, createWebHistory} from "vue-router"

import HomePage from "@/components/HomePage"
import ProfilePage from "@/components/ProfilePage"

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/profile',
        component: ProfilePage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
