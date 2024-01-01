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
            pageTitle: `About ${ SITE_NAME }`, 
            description: `<p>JC Design is <span>an online web services company</span> dedicated to providing quality & innovative digital design.</p>
            <p>Our products are designed to optimise your business and improve your efficiency. JC Design separates itself by partnering with you to achieve your objectives with a<span>personal and flexible approach</span>.</p>`,
            imgSrc: '/images/web-design-logo.png',
        },
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../views/Pricing.vue'),
        meta: {
            title: `${SITE_NAME} | Pricing | How much does it cost to build a website`,
            pageTitle: 'Pricing, how it works', 
            description: `<p>You will be guided through the build every step of the way and will have open communication throughout the whole process to make it as seamless as possible. The creation of your website will be designed from considerable experience in the industry, but ultimately built to your specifications.</p>`,
            imgSrc: '/images/graphic-design-logo.png',

        },
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/Work.vue'),
        meta: {
            title: `${SITE_NAME} | Work Page`,
            pageTitle: 'Recent Work', 
            description: `<p>See some of the recent projects I have worked on below.</p>`,
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return { selector: to.hash };
        } else {
          return { top: 0 };
        }
      }
    
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || SITE_NAME;
    next();
});

export default router;