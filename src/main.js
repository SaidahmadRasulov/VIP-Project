import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import CNavbar from './Components/CNavbar/CNavbar.vue'
import CHome from './Components/CHome/CHome.vue';
import CAbout from './Components/CAbout/CAbout.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", name: "Navbar", component: CNavbar},
        {path: "/", name: "Home", component: CHome},
        {path: '/about', name: 'About',component: CAbout}
    ]
})

const app = createApp(App)
app.use(router);
app.mount('#app')
