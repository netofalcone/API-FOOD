<template>

<!-- <div class="home">
    <PageTitle  main="Home"
    sub="Food Delivery" />
    -->

   <div >
     <div class="menu">  
         <ul>

             <li>   <router-link to="/auth"> <strong> <a href="">Entra</a> </strong>   </router-link>   </li>
             <li>   <router-link to="/restaurantes">  <strong> <a href="">Restaurantes</a> </strong></router-link>  </li>
             <li>   <router-link to="/produtos"> <strong> <a href="">Produtos</a> </strong>   </router-link>   </li>
             <li>   <router-link to="/usuarios"> <strong> <a href="">Usuários</a> </strong>   </router-link>   </li>

            </ul>
    </div>


   <img class="materialboxed" src="@/imagem/ifood.png"> 
   <!-- <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="https://lorempixel.com/800/400/nature/4"> -->

   
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
        width: 100%;
        height: 100%;
    }
    a{
        margin-right: 10px;
        margin-left: 10px;
        color: rgb(247, 49, 49);

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

    .menu {
       float: right;

    }

    .menu ul,
    .menu li{
       margin: 0;
       line-height: 60px;
       padding: 0;

    }
    .menu li {
        float: left;
        padding-left: 10px;
        line-height: 50px;

    }
</style>
