import { createRouter, createWebHistory } from 'vue-router'
import { SITE_NAME } from '../constants.js'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { 
            title: `${SITE_NAME} | Home Page`,
            pageTitle: 'Home Page', 
        }, 
        description: 'This is the description for the home page.',
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: `${SITE_NAME} | About Page`,
            pageTitle: 'About me', 
        },
        description: 'This is the description for the about page.',
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../views/Pricing.vue'),
        meta: {
            title: `${SITE_NAME} | Pricing Page`,
            pageTitle: 'Pricing', 
        },
        description: 'This is the description for the Pricing page.',
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/Work.vue'),
        meta: {
            title: `${SITE_NAME} | Work Page`,
            pageTitle: 'My Work', 
        },
        description: 'This is the description for the Clients page.',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || SITE_NAME;
    next();
  });

export default router;