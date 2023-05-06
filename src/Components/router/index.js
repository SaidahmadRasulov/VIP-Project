import {createRouter, createWebHistory} from 'vue-router';
import CHome from '../CHome/CHome.vue';
import CAbout from '../CAbout/CAbout.vue';
import Notification from '../Notification/Notification.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CHome
        },
        {
            path: '/message',
            name: 'About',
            component: CAbout
        },
        {
            path: '/notification',
            name: 'Notification',
            component: Notification
        }
    ]
})

export default router