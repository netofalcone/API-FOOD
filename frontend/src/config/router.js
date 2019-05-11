import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ProdutosByRestaurantys from '@/components/produto/ProdutosByRestaurantys';
import ProdutoById from '@/components/produto/ProdutoById'
import Auth from '@/components/auth/Auth'
import Cadastros from '@/components/cadastro/Cadastros'
import { userKey } from '@/global'


Vue.use(VueRouter);

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
    {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
},
    {
        name: 'cadastro',
        path: '/cadastro',
        component: Cadastros
    },

    {
    name: 'produtosByRestaurantys',
    path: '/restaurantes/:id/produtos',
    component: ProdutosByRestaurantys
},
    {
    name: 'produtoById',
    path: '/produtos/:id',
    component: ProdutoById
},
    {
    name: 'auth',
    path: '/auth',
    component: Auth
}];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
});

export default router
