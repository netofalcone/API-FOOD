<template>

<div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Painel Administrativo"   
      sub="Food Delivery" /> 

<div>
  <b-tabs content-class="mt-7">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>

 
  </div>


</template>

<script>

import PageTitle from '@/components/PageTitle'

export default {

    name: 'AdminPages',
    components: {PageTitle }


}

</script>

<style>


</style>
