import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/views/auth/LoginPage.vue";

const routes = [
    {
        path: "/",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/login",  // TestComponent.vue로 이동할 Path
        name: "LoginPage",  // router name
        component: LoginPage,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
