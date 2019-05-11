<template>
    <div class="restaurant">
        <b-form>

            <input id="restaurantys-id" type="hidden" v-model="restaurantys.id" />
            <b-form-group label="Nome:" label-for="restaurantys-name">
                <b-form-input id="restaurantys-name" type="text" v-model="restaurantys.name" required :readonly="mode === 'remove'" placeholder="Informe o Nome do Restaurante..." />
            </b-form-group>

            <b-form-group label="Restaurante Pai:" label-for="restaurantys-parentId">
                <b-form-select v-if="mode === 'save'" id="restaurantys-parentId" :options="restaurantes" v-model="restaurantys.parentId" />
                <b-form-input v-else id="restaurantys-parentId2" type="text" v-model="restaurantys.path" readonly />
            </b-form-group>

            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>

        <b-table hover striped :items="restaurantes" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="success" @click="loadRestaurantys(data.item)" class="mr-2"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" @click="loadRestaurantys(data.item, 'remove')"><i class="fa fa-trash"></i></b-button>
            </template>
        </b-table>

    </div>
</template>

<script>
    import { baseApiUrl, showError } from '@/global'
    import axios from 'axios'

    export default {
        name: "Restaurant",
        data: function() {
            return {
                mode: 'save',
                restaurantys: {},
                restaurantes: [],
                fields: [
                    { key: 'id', label: 'Código', sortable: true },
                    { key: 'name', label: 'Nome', sortable: true },
                    { key: 'path', label: 'Caminho', sortable: true },
                    { key: 'actions', label: 'Ações' }
                ]
            }
        },
        methods: {
            loadRestaurantes() {
                const url = `${baseApiUrl}/restaurantes`;
                axios.get(url).then(res => {
                    // this.restaurantes = res.data
                    this.restaurantes = res.data.map(restaurantys => {
                        return { ...restaurantys, value: restaurantys.id, text: restaurantys.path }
                    })
                })
            },
            reset() {
                this.mode = 'save';
                this.restaurantys = {};
                this.loadRestaurantes()
            },
            save() {
                const method = this.restaurantys.id ? 'put' : 'post';
                const id = this.restaurantys.id ? `/${this.restaurantys.id}` : '';
                axios[method](`${baseApiUrl}/restaurantes${id}`, this.restaurantys)
                    .then(() => {
                        this.$toasted.global.defaultSuccess();
                        this.reset()
                    })
                    .catch(showError)
            },
            remove() {
                const id = this.restaurantys.id;
                axios.delete(`${baseApiUrl}/restaurantes/${id}`)
                    .then(() => {
                        this.$toasted.global.defaultSuccess();
                        this.reset()
                    })
                    .catch(showError)
            },
            loadRestaurantys(restaurantys, mode = 'save') {
                this.mode = mode;
                this.restaurantys = { ...restaurantys }
            }
        },
        mounted() {
            this.loadRestaurantes()
        }
    }
</script>

<style scoped>

</style>