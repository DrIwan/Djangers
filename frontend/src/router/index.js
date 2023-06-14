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
import scalesPage from "@/components/pages/scalesPage"
import interpretationsPage from "@/components/pages/interpretationsPage"
import subtestsPage from "@/components/pages/subtestsPage"
import previewPage from "@/components/pages/previewPage"
import newScalesPage from "@/components/pages/newScalesPage"
import newInterPage from "@/components/pages/newInterPage"
import UpdateProfilePage from "@/components/pages/UpdateProfilePage"

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
    {
        path: '/scales',
        component: scalesPage
    },
    {
        path: '/interpretations',
        component: interpretationsPage
    },
    {
        path: '/subtests',
        component: subtestsPage
    },
    {
        path:'/preview',
        component: previewPage
    },
    {
        path:'/newScales',
        component: newScalesPage
    },
    {
        path:'/newInter',
        component: newInterPage
    },
    {
        path:'/updateProfile',
        component: UpdateProfilePage

    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
