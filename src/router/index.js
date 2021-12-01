import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Profile from "@/views/Profile";
import Admin from "@/views/Admin";
import Register from "@/views/Register";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Unauthorized from "@/views/Unauthorized";

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
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
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
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
