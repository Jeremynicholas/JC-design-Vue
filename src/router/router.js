import { createRouter, createWebHistory } from 'vue-router'
import { SITE_NAME } from '../constants.js'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { 
            title: `${SITE_NAME} | Freelance Web designer Melbourne`,
            pageTitle: 'Freelance Web designer Melbourne', 
            description: 'Freelance web designer based in Melbourne, helping to deliver you online presence. Contact me today!'
        }, 
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: `${SITE_NAME} | About me`,
            pageTitle: `About ${ SITE_NAME }`, 
            description: `<p>${ SITE_NAME } is <span>an online web services company</span> dedicated to providing quality & innovative digital design.</p>
            <p>My products are designed to optimise your business and improve your efficiency. ${ SITE_NAME } separates itself by partnering with you to achieve your objectives with <span>a personal and flexible approach</span>.</p>`,
            imgSrc: '/images/about-us.png',
        },
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('../views/Pricing.vue'),
        meta: {
            title: `${SITE_NAME} | Pricing | How much does it cost to build a website`,
            pageTitle: 'Pricing, how it works.', 
            description: `<p>You will be guided through the build every step of the way and will have <span>open communication</span> throughout the whole process to make it as seamless as possible. The creation of your website will be designed from considerable experience in the industry, but ultimately <span>built to your specifications.</span></p>`,
            imgSrc: '/images/rocket-icon.png',

        },
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/Work.vue'),
        meta: {
            title: `${SITE_NAME} | Recent Work`,
            pageTitle: 'Recent Work', 
            description: `<p>See some of the recent projects I have worked on below. These websites span across the healthcare, not-for profit and travel industries.</p>`,
            imgSrc: '/images/work.png',
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
      if (savedPosition) {
        return savedPosition;
      } else {
        // Scroll to the top by default
        return { top: 0 };
      }
    }
  });


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || SITE_NAME;
    next();
});

export default router;