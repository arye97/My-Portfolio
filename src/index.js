import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Projects from "@/components/Projects";
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default new Router({
    mode: 'history',
    routes: [
        { path: 'projects', component: Projects},
        // otherwise redirect to home
        { path: '*', component: Home }
    ]
});