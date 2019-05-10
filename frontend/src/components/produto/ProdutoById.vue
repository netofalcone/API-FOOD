<template>

    <div class="produto-by-id">
        <PageTitle icon="fa fa-file-o" :main="produto.name" :sub="produto.description" />
        <div class="produto-content" v-html="produto.content"></div>
    </div>

</template>

<script>
import 'highlightjs/styles/dracula.css'
import hljs from 'highlightjs/highlight.pack.js'
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name: 'ProdutoById',
    components: { PageTitle },
    data: function() {
        return {
            produto: {}
        }
    },
    mounted() {
        const url = `${baseApiUrl}/produtos/${this.$route.params.id}`
        axios.get(url).then(res => this.produto = res.data)
    },
    updated() {
        document.querySelectorAll('.produto-content pre.ql-syntax').forEach(e => {
            hljs.highlightBlock(e)
        })
    }
}
</script>

<style>
    .produto-content {
        background-color: #FFF;
        border-radius: 8px;
        padding: 25px;
    }

    .produto-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #FFF;
    }

    .produto-content img {
        max-width: 100%;
    }

    .produto-content :last-child {
        margin-bottom: 0px;
    }
</style>
