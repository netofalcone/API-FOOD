<template>
    <div class="cadastros-pages">
        <PageTitle icon="fa fa-home" main="Painel de Controle do Usuario" sub="ifood Delivery"/>
        <div class="cadastros-pages-tabs">

            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Produto" active><Product/></b-tab>
                    <b-tab title="Restaurante"><Restaurant/></b-tab>
                </b-tabs>
            </b-card>

        </div>
    </div>
</template>

<script>
    import PageTitle from '../template/PageTitle'
    import Product from './Product'
    import Restaurant from './Restaurant'
    export default {
        name: "Cadastros",
        components: { PageTitle, Product, Restaurant }
    }
</script>

<style scoped>

</style>