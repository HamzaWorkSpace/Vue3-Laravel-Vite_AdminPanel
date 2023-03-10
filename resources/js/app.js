import { createApp } from 'vue';
import { createPinia } from 'pinia';

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import '../css/app.scss';

import '@formkit/themes/genesis'
import App from './app.vue';
import { plugin, defaultConfig } from '@formkit/vue';
import routes from './router/index.js';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { VueCookieNext } from 'vue-cookie-next';

import * as controller from './global.js';

VueCookieNext.config({ expire: '7d' })
VueCookieNext.setCookie('last_refresh_value', '', { path: '/' });
VueCookieNext.setCookie('controller','');

const pinia = createPinia();

const app=createApp(App)
app.use(BootstrapVue3);
app.use(controller)
app.use(plugin, defaultConfig);
app.use(routes);
app.use(pinia);
app.use(VueLoading);
app.use(VueCookieNext);
app.mount('#app');