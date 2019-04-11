<template>

<div class="home">
    <PageTitle  main="Home"
    sub="Food Delivery" />


   <div>
    <img src="@/imagem/ifood.png">
   </div>

</div>



      
 


</template>



<script>

import PageTitle from '@/components/PageTitle'

export default {

    name: 'Home',
    components: { PageTitle }

}
</script>

<style>

img {
    margin: 0%;
    width: 100%
}

</style>
