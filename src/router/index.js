import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'teste',
        components: {
         MainContent: import('../views/main-content/home.vue'),
         SideBarContent: import('../views/side-content/home.vue')
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router