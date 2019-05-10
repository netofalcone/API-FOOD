<template>

    <div class="home">
        <PageTitle icon="fa fa-home" main="Painel de Controle" sub="ifood Delivery"/>

        <div class="stat">
            <Stat title="Restaurantes" :value="stat.restaurantes" icon=" fa fa-home" color="#f73100"/>
            <Stat title="Produtos" :value="stat.produtos" icon="fa fa-cutlery" color="#3282cd"/>
            <Stat title="Usuários" :value="stat.users" icon="fa fa-group" color="#f84c17"/>
        </div>

    </div>

</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
