import { createWebHistory, createRouter } from "vue-router";
import List from "../views/List";
import Home from "@/views/Home.vue";
import Form from "@/views/Form.vue";
import Update from "@/views/Update.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list",
        name: "list",
        component: List,
    },
    {
        path: "/form",
        name: "form",
        component: Form,
    },
    {
        path: "/update/:id",
        name: "Update",
        component: Update,
    }
]

const routers = createRouter({
    history: createWebHistory(),
    routes
});

export default routers;