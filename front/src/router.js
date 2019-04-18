import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Restaurants from '@/components/Restaurants'
import Logar from '@/components/Logar'
import Registro from '@/components/Registro'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/logar',component: Logar},
        {path: '/registro',component: Registro},
        {path: '/restaurants', component: Restaurants}

    ]

})