<template>
    <div class="content">
        <router-view> </router-view>
    </div>

</template>

<script>
export default {
    name:'Content'

}
</script>

<style>
.content{
    grid-area: content;
    background: linear-gradient(to right, #d6d6d6,  #ffffff);
    padding: 10px;

}

</style>
