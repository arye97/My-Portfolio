import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Personal from './components/Projects/Personal'
import University from "./components/Projects/University";
import Footsteps from "./components/Projects/DetailedViews/Footsteps";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default new Router({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/projects/personal', component: Personal, name: 'Personal' },
        { path: '/projects/university', component: University, name: 'University' },
        { path: '/projects/university/footsteps', component: Footsteps, name: 'Footsteps'},
        // otherwise redirect to home
        { path: '*', redirect: '/home' }
    ]
});