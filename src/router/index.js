import Vue from 'vue'
import VueRouter from 'vue-router'
import Today from '../views/Today'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Today',
        component: Today
    },
    {
        path: '/all',
        name: 'All',
        component: () => import('../views/All')
    },
    {
        path: '/pomodoro',
        name: 'PoMoDoro',
        component: () => import('../views/PoMoDoro')
    },
    {
        path: '/my',
        name: 'My',
        component: () => import('../views/My')
    },
    {
        path: '/daycard',
        name: 'DayCard',
        component: () => import('../views/DayCard')
    },
    {
        path: '/dailynews',
        name: 'DailyNews',
        component: () => import('../views/DailyNews')
    },
    {
        path: '/habits',
        name: 'Habits',
        component: () => import('../views/Habits')
    },
    {
        path: '/newhabits',
        name: 'NewHabits',
        component: () => import('../views/NewHabits')
    },
    {
        path: '/dailylife',
        name: 'DailyLife',
        component: () => import('../views/DailyLife')
    },
    {
        path: '/checkrecord',
        name: 'CheckRecord',
        component: () => import('../views/CheckRecord')
    },
    {
        path: '/question',
        name: 'Question',
        component: () => import('../views/Question')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
