import {createRouter, createWebHistory} from "vue-router"

import HomePage from "@/components/pages/HomePage"
import ProfilePage from "@/components/pages/ProfilePage"
import RegistrationPage from "@/components/pages/RegistrationPage"
import LoginPage from "@/components/pages/loginPage"

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/registration',
        component: RegistrationPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/login',
        component: LoginPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
