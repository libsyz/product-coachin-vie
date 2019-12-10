import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ForCompanies from './pages/for-companies/ForCompanies.vue'
import LandingPage from './pages/landing/LandingPage.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueRouter)

library.add(faFacebookSquare, faInstagram, faLinkedin );

Vue.component('font-awesome-icon', FontAwesomeIcon)


const routes = [
  { path: '/for-companies', component: ForCompanies, props: true  },
  { path: '/landing-page', component: LandingPage, props: true  },
  { path: '/', redirect: 'landing-page'  }
]

const router = new VueRouter({mode: 'history',
                              routes: routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
