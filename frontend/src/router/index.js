import {createRouter, createWebHistory} from "vue-router"

import HomePage from "@/components/pages/HomePage"
import ProfilePage from "@/components/pages/ProfilePage"
import RegistrationPage from "@/components/pages/RegistrationPage"
import LoginPage from "@/components/pages/loginPage"
import mainPage from "@/components/pages/mainPage"
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
import attemptPage from "@/components/pages/attemptPage"
import interpretationPage from "@/components/pages/interpretationPage"
import scalePage from "@/components/pages/scalePage"
import subtestPage from "@/components/pages/subtestPage"
import CardUserPage from "@/components/pages/CardUserPage"
import updateCardUserPage from "@/components/pages/updateCardUserPage"
import bindPage from "@/components/pages/bindPage"
import createTestMainSetPage from "@/components/pages/createTestMainSetPage"
import checkSubtestPage from "@/components/pages/checkSubtestPage"
import createSubtestMainSetPage from "@/components/pages/createSubtestMainSetPage"
import createQuestPage from "@/components/pages/createQuestPage"
import createQuestSubPage from "@/components/pages/createQuestSubPage"
import endCreateTest from "@/components/pages/endCreateTest"
import endCreateSubT from "@/components/pages/endCreateSubT"
import testPage from "@/components/pages/testPage"
import endTest from "@/components/pages/endTest"
import resultsPage from "@/components/pages/resultsPage"

const routes = [
    {
        path: '/',
        component: HomePage,
        meta:{
            title: 'Главная'
        }
    },
    {
        path: '/registration',
        component: RegistrationPage,
        meta:{
            title: 'Регистрация'
        }
    },
    {
        path: '/profile',
        component: ProfilePage,
        meta:{
            title: 'Личный кабинет'
        }
    },
    {
        path: '/login',
        component: LoginPage,
        meta:{
            title: 'Вход в систему'
        }
    },
    {
        path: '/main',
        component: mainPage,
        meta:{
            title: 'Меню'
        }
    },
    {
        path: '/tests',
        component: testsPage,
        meta:{
            title: 'Тесты'
        }
    },
    {
        path: '/workers',
        component: workersPage,
        meta:{
            title: 'Учетные записи'
        }
    },
    {
        path: '/scales',
        component: scalesPage,
        meta:{
            title: 'Шкалы'
        }
    },
    {
        path: '/interpretations',
        component: interpretationsPage,
        meta:{
            title: 'Интерпретации'
        }
    },
    {
        path: '/subtests',
        component: subtestsPage,
        meta:{
            title: 'Субтесты'
        }
    },
    {
        path:'/newScales',
        component: newScalesPage,
        meta:{
            title: 'Создание шкалы'
        }
    },
    {
        path:'/newInter',
        component: newInterPage,
        meta:{
            title: 'Создание интерпретации'
        }
    },
    {
        path:'/updateProfile',
        component: UpdateProfilePage,
        meta:{
            title: 'Изменение профиля'
        }

    },
    {
        path:'/attempts',
        component: attemptsPage,
        meta:{
            title: 'Попытки'
        }
    },
    {
        path:'/attempt/:attemptId',
        component: attemptPage,
        meta:{
            title: 'Попытка'
        }
    },
    {
        path:'/interpretation/:interpretationId',
        component: interpretationPage,
        meta:{
            title: 'Интерпретация'
        }
    },
    {
        path:'/scale/:scaleId',
        component: scalePage,
        meta:{
            title: 'Шкала'
        }
    },
    {
        path:'/test/:testId',
        component: previewPage,
        meta:{
            title: 'Превью теста'
        }
    },
    {
        path:'/testU/:testId',
        component: testPage,
        meta:{
            title: 'Прохождение теста'
        }
    },

    {
        path:'/subtest/:subtestId',
        component: subtestPage,
        meta:{
            title: 'СубТест'
        }
    },
    {
        path:'/cardUser/:cardUserId',
        component: CardUserPage,
        meta:{
            title: 'Карточка пользователя'
        }
    },
    {
        path:'/updateCardUser',
        component: updateCardUserPage,
        meta:{
            title: 'Изменение карточки'
        }
    },
    {
        path:'/bind/:bindId',
        component: bindPage,
        meta:{
            title: 'Заявка'
        }
    },
    {
        path: '/mainSetTest',
        component: createTestMainSetPage,
        meta:{
            title:'Главные настройки теста'
        }
    },
    {
        path: '/checkSubtest',
        component: checkSubtestPage,
        meta:{
            title:'Выбор субтестов'
        }
    },
    {
        path: '/mainSetSubtest',
        component: createSubtestMainSetPage,
        meta:{
            title:'Главные настройки субтеста'
        }
    },
    {
        path: '/createQuest',
        component: createQuestPage,
        meta:{
            title:'Добавление вопросов'
        }
    },
    {
        path: '/createQuestSub',
        component: createQuestSubPage,
        meta:{
            title:'Добавление вопросов'
        }
    },
    {
        path: '/endCreateTest',
        component:endCreateTest,
        meta:{
            title:'Результаты'
        }
    },
    {
        path: '/endCreateSubT',
        component:endCreateSubT,
        meta:{
            title:'Результаты'
        }
    },
    {
        path:'/endTest',
        component:endTest,
        meta:{
            title:'Отправка ответов'
        }
    },
    {
        path:'/results',
        component:resultsPage,
        meta:{
            title:'Результат'
        }
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
router.beforeEach((to,from,next)=>{
    document.title = `${to.meta.title}`;
    next();
})

export default router
