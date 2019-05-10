<template>
    <div class="produto-item">

        <router-link :to="{ name: 'produtoById', params: { id: produto.id } }">
            <div class="produto-item-image d-none d-sm-block">
                <img v-if="produto.imageUrl"
                    :src="produto.imageUrl"
                    height="150" width="150" alt="Produto">
                <img v-else
                    src="@/assets/article.png"
                    height="150" width="150" alt="Produto">
            </div>
            <div class="produto-item-info">
                <h2>{{ produto.name }}</h2>
                <p>{{ produto.description }}</p>
                <span class="produto-item-author">
                    <strong>Autor: </strong>{{ produto.author }}
                </span>
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'ProdutoItem',
    props: ['produto']
}
</script>

<style>
    .produto-item {
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #FFF;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .produto-item a {
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        color: #000;
    }

    .produto-item-info h2 {
        font-size: 1.7rem;
    }

    .produto-item-image {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #AAA;
    }

    .produto-item-image img {
        border-radius: 5px;
    }

    .produto-item-info {
        display: flex;
        align-self: stretch;
        flex-direction: column;
    }

    .produto-item-info p {
        flex: 1;
        color: #555;
        font-size: 1.1rem;
    }
</style>
