import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
         MainContent: import('../views/main-content/HomeMain.vue'),
         SideBarContent: import('../views/side-content/HomeSide.vue')
        },
        meta:{
            title:"Home"
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router