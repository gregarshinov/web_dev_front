import Vue from 'vue';
import Router from 'vue-router';
import Research from '@/components/Research';
import Home from "@/components/Home";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/research',
            name: 'Research',
            component: Research
        }
    ]
});