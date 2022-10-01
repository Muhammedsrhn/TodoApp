import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import routers from "./router/router"


createApp(App).use(BootstrapVue3).use(IconsPlugin).use(routers).mount('#app');

