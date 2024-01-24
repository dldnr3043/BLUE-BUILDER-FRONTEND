import { createWebHistory, createRouter } from "vue-router"
import LoginPage from "@/views/auth/LoginPage.vue"

const routes = [
    {
        path: "/",
        name: "LoginPage",
        component: LoginPage,
    },
    // {
    //     path: "/login",  
    //     name: "LoginPage",
    //     component: LoginPage,
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
