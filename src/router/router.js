import { createRouter, createWebHistory } from 'vue-router'
import VueScrollTo from 'vue-scrollto';
import { nextTick } from 'vue';

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

    /*--- PAYMENTS ---*/
    {
        path: '/payments',
        name: 'payments',
        component: () => import('../views/payments/Payments.vue'),
        meta: {
            title: `${SITE_NAME} | Payment Links`,
            pageTitle: 'Payment Links', 
        },
    },
    {
        path: '/website-basic',
        name: 'website-basic',
        component: () => import('../views/payments/WebsiteBasic.vue'),
        meta: {
            title: `${SITE_NAME} | Website Basic`,
            pageTitle: 'Basic Website',
            packagePrice: 'AUD $800',
            buttonUrl: 'https://buy.stripe.com/cN27vE0z37jvfIIeV1',
        },  
    } , 
    {
        path: '/website-standard',
        name: 'website-standard',
        component: () => import('../views/payments/WebsiteStandard.vue'),
        meta: {
            title: `${SITE_NAME} | Website Standard`,
            pageTitle: 'Standard Website',
            packagePrice: 'AUD $1,850',
            buttonUrl: 'https://buy.stripe.com/6oE5nw4PjavHdAAaEJ',
        }
      },
    {
        path: '/website-advance',
        name: 'website-advance',
        component: () => import('../views/payments/WebsiteAdvance.vue'),
        meta: {
            title: `${SITE_NAME} | Website Advance`,
            pageTitle: 'Advance Website',
            packagePrice: 'AUD $2,850',
            buttonUrl: 'https://buy.stripe.com/9AQ3fobdH5bneEEcMS',
        }
      },
    {
        path: '/web-hosting-basic',
        name: 'web-hosting-basic',
        component: () => import('../views/payments/WebHostingBasic.vue'),
        meta: {
            title: `${SITE_NAME} | Web Hosting Basic`,
            pageTitle: 'Basic Web Hosting',
            packagePrice: 'AUD $30',
            perMonth: true,
            buttonUrl: 'https://buy.stripe.com/28og2achL0V7gMM289',
        },  
    } , 
    {
        path: '/web-hosting-standard',
        name: 'web-hosting-standard',
        component: () => import('../views/payments/WebHostingStandard.vue'),
        meta: {
            title: `${SITE_NAME} | Web Hosting Standard`,
            pageTitle: 'Standard Web Hosting',
            packagePrice: 'AUD $40',
            perMonth: true,
            buttonUrl: 'https://buy.stripe.com/5kA7vEftX33fgMM6oq',
        }
      },
    {
        path: '/web-hosting-advance',
        name: 'web-hosting-advance',
        component: () => import('../views/payments/WebHostingAdvance.vue'),
        meta: {
            title: `${SITE_NAME} | Web Hosting Advance`,
            pageTitle: 'Advance Web Hosting',
            packagePrice: 'AUD $50',
            perMonth: true,
            buttonUrl: 'https://buy.stripe.com/7sIcPY1D76frfII28c',
        }
      },

    /*--- FORM PAGES ---*/
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

    /*--- 404 ---*/
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
      if (to.name === 'home') {
      } else {
        return { top: 0, behavior: 'smooth' };
      }
    },
  });
    


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || SITE_NAME;
    next();
});

export default router;