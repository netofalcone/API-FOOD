<template>

<!-- <div class="home">
    <PageTitle  main="Home"
    sub="Food Delivery" />
    -->

   <div >

           <router-link to="/">
                <strong>  <a href=""> Inicio</a> </strong>
           </router-link>

           <router-link to="/login">
               <strong>  <a href="">Login</a> </strong>
           </router-link>

           <router-link to="/registro">
               <strong>  <a href="">Registro</a> </strong>
           </router-link>

            <router-link to="/restaurantes">
            <strong>  <a href="">Restaurantes</a> </strong>
            </router-link>

           <strong>  <a href="">Produtos</a> </strong>

           <img class="materialboxed" src="@/imagem/ifood.png">

</div>


</template>



<script>

import PageTitle from '@/components/PageTitle'

export default {

    name: 'Home',
    components: { PageTitle },


    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    }

}
</script>

<style>
h1{
    font-size: 24px;
    display: inline;
    margin-right: 24px;
}


img {
    margin:0px;
    width: 100%
}
a{
    margin-right: 20px;
    margin-left: 20px;
    color: rgb(247, 49, 49);
    position: center;
     color: black;

}
 a:hover{
    margin-right: 20px;
    margin-left: 20px;
    text-decoration: none;
    color: black;
  
}

strong {
    color: rgb(252, 227, 0);
}

</style>
