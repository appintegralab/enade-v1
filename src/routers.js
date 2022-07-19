import {defineAsyncComponent} from "vue";
import { createWebHistory, createRouter } from 'vue-router';


const routes = [
    { path: '/', component: () => import("@/components/home/home.vue") },
    //{ path: '/lab', component: () => import("@/components/lab/lab.vue") },
    { path: '/admin/users', component: () => import("@/components/admin/users/users.vue") },
    { path: '/admin-relatorios', component: () => import("@/components/admin/relatorios/relatorios.vue") },
    { path: '/ies/:base/:id', component: () => import("@/components/ies/ies.vue") },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router