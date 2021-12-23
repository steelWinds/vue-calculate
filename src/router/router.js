import { createRouter, createWebHistory } from 'vue-router';

import CalculatePage from '../views/CalculatePage.vue';

let routes = [
    {
        path: '/',
        alias: '/home',
        component: CalculatePage
    }
];

const domain = import.meta.env.DEV ? '/' : import.meta.env.VITE_REPO_NAME;

const router = createRouter({
    routes, 
    history: createWebHistory(domain)
});

export default router;
