import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import VueScrollTo from 'vue-scrollto';



createApp(App)
    .use(router)
    .use(VueScrollTo)
    .mount('#app')
