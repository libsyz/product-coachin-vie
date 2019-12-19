import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import VueParticles from 'vue-particles';
import BootstrapVue from 'bootstrap-vue';

import ForIndividuals from './pages/for-individuals/ForIndividuals.vue'
import ForCompanies from './pages/for-companies/ForCompanies.vue'
import LandingPage from './pages/landing/LandingPage.vue'
import AboutUs from './pages/about-us/AboutUs.vue'
import SandboxPage from './pages/sandbox/SandboxPage.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.use(BootstrapVue)

library.add(faFacebookSquare, faInstagram, faLinkedin );

Vue.component('font-awesome-icon', FontAwesomeIcon)


const routes = [
  { path: '/for-individuals', component: ForIndividuals, props: true  },
  { path: '/for-companies', component: ForCompanies, props: true  },
  { path: '/landing-page', component: LandingPage, props: true  },
  { path: '/about-us', component: AboutUs, props: true  },
  { path: '/sandbox', component: SandboxPage, props: true },
  { path: '/', redirect: 'landing-page'  }
]

const router = new VueRouter({mode: 'history',
                              routes: routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
