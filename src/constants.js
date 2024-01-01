export const SITE_NAME = 'JC Design';
export const SITE_URL = 'https://www.jcdesign.com.au'
export const SITE_EMAIL = 'hello@jcdesign.com.au'

import VueScrollTo from 'vue-scrollto';

const { scrollTo } = VueScrollTo;

export const scrollToEnquire = (duration = 50) => {
  scrollTo('#enquire', duration, { easing: 'ease-in-out' });
};