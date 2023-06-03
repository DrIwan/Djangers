import {createRouter, createWebHistory} from "vue-router"

import HomePage from "@/components/pages/HomePage"
import ProfilePage from "@/components/pages/ProfilePage"
import RegistrationPage from "@/components/pages/RegistrationPage"
import LoginPage from "@/components/pages/loginPage"
import mainPage from "@/components/pages/mainPage"
import profilePage from "@/components/pages/ProfilePage"
import attemptsPage from "@/components/pages/attemptsPage"
import testsPage from "@/components/pages/testsPage"
import workersPage from "@/components/pages/workersPage"

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
    {
        path: '/main',
        component: mainPage
    },
    {
        path: '/profile',
        component: profilePage
    },
    {
        path: '/attempts',
        component: attemptsPage
    },
    {
        path: '/tests',
        component: testsPage
    },
    {
        path: '/workers',
        component: workersPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
