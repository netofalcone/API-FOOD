import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import AdminPages from '@/components/admin/AdminPages'

import Login from '@/components/Login'
import Registro from '@/components/Registro'

import Restaurantes from '@/components/Restaurantes'
import Produtos from '@/components/Produtos'


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
        name: 'login',
        path: '/login',
        component: Login,
    },

    {
        name: 'registro',
        path: '/registro',
        component: Registro,
    },

    {
        name: 'restaurantes',
        path: '/restaurantes',
        component: Restaurantes

    },

    {
        name: 'produto',
        path: '/produto',
        component: Produtos

    },

];

export default new VueRouter ({
    mode:'history',
    routes: routes
})

