<template>
    <div class="produto-admin">
        <b-form>
            <input id="produto-id" type="hidden" v-model="produto.id" />

            <b-form-group label="Nome:" label-for="produto-name">
                <b-form-input id="produto-name" type="text" v-model="produto.name" required :readonly="mode === 'remove'" placeholder="Informe o Nome do Produto..." />
            </b-form-group>

            <b-form-group label="Slug" label-for="produto-description">
                <b-form-input id="produto-description" type="text" v-model="produto.description" required :readonly="mode === 'remove'" placeholder="Informe o Nome do Slug..." />
            </b-form-group>

            <b-form-group v-if="mode === 'save'" label="Imagem (URL):" label-for="produto-imageUrl">
                <b-form-input id="produto-imageUrl" type="text" v-model="produto.imageUrl" required :readonly="mode === 'remove'" placeholder="Informe a URL da Imagem..." />
            </b-form-group>

            <b-form-group v-if="mode === 'save'" label="Restaurantes:" label-for="produto-restaurantysId">
                <b-form-select id="produto-restaurantysId" :options="restaurantes" v-model="produto.restaurantysId" />
            </b-form-group>

            <b-form-group v-if="mode === 'save'" label="Autor:" label-for="produto-userId">
                <b-form-select id="produto-userId" :options="users" v-model="produto.userId" />
            </b-form-group>


            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>

        </b-form>
        <hr>

        <b-table hover striped :items="produtos" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="success" @click="loadProduto(data.item)" class="mr-2"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" @click="loadProduto(data.item, 'remove')"><i class="fa fa-trash"></i></b-button>
            </template>
        </b-table>

        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />

    </div>

</template>

<script>

import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'ProdutoAdmin',
    data: function() {
        return {
            mode: 'save',
            produto: {},
            produtos: [],
            restaurantes: [],
            users: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'description', label: 'Descrição', sortable: true },
                { key: 'email', label: 'Usuario', sortable: true },
                { key: 'actions', label: 'Ações' }

            ]
        }
    },
    methods: {
        loadProdutos() {
            const url = `${baseApiUrl}/produtos?page=${this.page}`;
            axios.get(url).then(res => {
                // this.produtos = res.data
                this.produtos = res.data.data;
                this.count = res.data.count;
                this.limit = res.data.limit
            })
        },
        reset() {
            this.mode = 'save';
            this.produto = {};
            this.loadProdutos()
        },
        save() {
            const method = this.produto.id ? 'put' : 'post';
            const id = this.produto.id ? `/${this.produto.id}` : '';
            axios[method](`${baseApiUrl}/produtos${id}`, this.produto)
                .then(() => {
                    this.$toasted.global.defaultSuccess();
                    this.reset()
                })
                .catch(showError)
        },
        remove() {
            const id = this.produto.id;
            axios.delete(`${baseApiUrl}/produtos/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess();
                    this.reset()
                })
                .catch(showError)
        },
        loadProduto(produto, mode = 'save') {
            this.mode = mode;
            //this.produto = { ...produto }
            axios.get(`${baseApiUrl}/produtos/${produto.id}`)
                .then(res => this.produto = res.data)
        },
        // preechimento da combox
        loadRestaurantes() {
            const url = `${baseApiUrl}/restaurantes`;
            axios.get(url).then(res => {
                this.restaurantes = res.data.map(restaurantys => {
                    return { value: restaurantys.id, text: restaurantys.path }
                })
            })
        },
        // preechimento da combox
        loadUsers() {
            const url = `${baseApiUrl}/users`;
            axios.get(url).then(res => {
                this.users = res.data.map(user => {
                    return { value: user.id, text: `${user.name} - ${user.email}` }
                })
            })
        }
    },
    watch: {
        page() {
            this.loadProdutos()
        }
    },
    // chamada do metodo
    mounted() {
        this.loadUsers();
        this.loadRestaurantes();
        this.loadProdutos()
    }
}
</script>

<style>

</style>