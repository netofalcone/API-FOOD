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
 background: linear-gradient(to right, #a5a5a5,  #c2c1c1);
padding: 20;

}

</style>
