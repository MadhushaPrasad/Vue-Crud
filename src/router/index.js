import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Profile from "@/views/Profile";
import Admin from "@/views/Admin";
import Register from "@/views/Register";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Unauthorized from "@/views/Unauthorized";
import Role from "../Models/role";
import store from '../store'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        meta: {role: [Role.ADMIN]}
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: {roles: [Role.ADMIN, Role.USER]}
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/404",
        name: "404",
        component: NotFound,
    },
    {
        path: "/401",
        name: "401",
        component: Unauthorized,
    },
    //otherwise unKnown pages
    {
        path: "/:catchAll(.*)",
        redirect: "/404"
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const {roles} = to.meta;
    const currentUser = store.getters['currentUser']
    if (roles?.length) {
        if (!currentUser) {
            return next({path: '/login'});

        }

        if (!roles.includes(currentUser.role)) {
            return next({path: '/401'});
        }
    }
    next();
});

export default router;
