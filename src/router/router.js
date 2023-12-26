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
            description: 'This is the description for the home page.',
        }, 
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: `${SITE_NAME} | About Page`,
            pageTitle: 'About me', 
            description: `<p>JC Design is a <span>online web services company</span> dedicated to providing quality & innovative digital design.</p>
            <p>Our products are designed to optimise your business and improve your efficiency. JC Design separates itself by partnering with you to achieve your objectives with a<span>personal and flexible approach</span>.</p>`,
            imgSrc: '/public/images/web-design-logo.png',
        },
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../views/Pricing.vue'),
        meta: {
            title: `${SITE_NAME} | Pricing Page`,
            pageTitle: 'Pricing', 
            description: 'This is the description for the Pricing page.',
            imgSrc: '/public/images/graphic-design-logo.png',

        },
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/Work.vue'),
        meta: {
            title: `${SITE_NAME} | Work Page`,
            pageTitle: 'My Work', 
            description: 'This is the description for the Clients page.',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {
            title: `${SITE_NAME} | 404 Page`,
            pageTitle: 'Oops wrong page', 
            description: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
        },        
    },

    {
        path: '/thanks',
        name: 'success',
        component: () => import('../components/forms/SubmissionSuccess.vue'),
    },
    {
        path: '/fail',
        name: 'fail',
        component: () => import('../components/forms/SubmissionFail.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {    
        return { x: 0, y: 0 };
    }
    
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || SITE_NAME;
    next();
});

export default router;