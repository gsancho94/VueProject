import { createRouter, createWebHistory } from 'vue-router';
import Front from "../views/Front.vue";
import countries from "../views/countries.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Front',
            component: Front
        },
        {
            path: '/countries',
            name: 'Countries',
            component: countries
        },
    ]
});
export default router