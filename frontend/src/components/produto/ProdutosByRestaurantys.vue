<template>
    <div class="produtos-by-restaurantys">

        <PageTitle icon="fa fa-folder-o" :main="restaurantys.name" sub="Restaurante" />

        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                <ProdutoItem :produto="produto" />
            </li>
        </ul>

        <div class="load-more">
            <button v-if="loadMore" class="btn btn-lg btn-outline-primary" @click="getProdutos">Carregar Mais produtos</button>
        </div>

    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'
import ProdutoItem from './ProdutoItem'

export default {
    name: 'ProdutosByRestaurantys',
    components: { PageTitle, ProdutoItem },
    data: function() {
        return {
            restaurantys: {},
            produtos: [],
            page: 1,
            loadMore: true
        }
    },
    methods: {
        getRestaurantys() {
            const url = `${baseApiUrl}/restaurantes/${this.restaurantys.id}`;
            axios(url).then(res => this.restaurantys = res.data)
        },
        getProdutos() {
            const url = `${baseApiUrl}/restaurantes/${this.restaurantys.id}/produtos?page=${this.page}`;
            axios(url).then(res => {
                this.produtos = this.produtos.concat(res.data);
                this.page++;

                if(res.data.length === 0) this.loadMore = false
            })
        }
    },
    watch: {
        $route(to) {
            this.restaurantys.id = to.params.id;
            this.produtos = [];
            this.page = 1;
            this.loadMore = true;

            this.getRestaurantys();
            this.getProdutos()
        }
    },
    mounted() {
        this.restaurantys.id = this.$route.params.id;
        this.getRestaurantys();
        this.getProdutos()
    }
}
</script>

<style>
    .produtos-by-restaurantys ul {
        list-style-type: none;
        padding: 0px;
    }

    .produtos-by-restaurantys .load-more {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>
