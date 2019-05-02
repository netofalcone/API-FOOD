import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import AdminPages from '@/components/admin/AdminPages'
import Restaurantes from '@/components/Restaurantes'
import Produtos from '@/components/Produtos'
import Usuarios from '@/components/Usuarios'
import Auth from '@/components/auth/Auth'

Vue.use (VueRouter);

const routes = [
    {
    name: 'home',
    path: '/',
    component: Home
    },
        {
    name: 'AdminPages',
    path: '/admin',
    component: AdminPages
    },
    {
        name: 'restaurantes',
        path: '/restaurantes',
        component: Restaurantes
    },
    {
        name: 'produtos',
        path: '/produtos',
        component: Produtos
    },
    {
        name: 'usuarios',
        path: '/usuarios',
        component: Usuarios
    },
    {
        name: 'auth',
        path: '/auth',
        component: Auth
    },
];

export default new VueRouter ({
    mode:'history',
    routes: routes
})



