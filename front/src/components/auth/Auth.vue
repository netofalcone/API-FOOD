<template>
<div class="auth-content"> 
    <div class="auth-modal" > 

        <img src = "@/imagem/logo.png" width="180" alt="Logo"/>
        <hr>
        <div class="auth-title"> {{showSignup ? 'Cadastro' : 'Login' }}</div>

            <input v-if="showSignup" v-model="usuario.name"  type="text"  placeholder="Nome">
            <input v-model="usuario.email" name="email" type="text" placeholder="E-mail">
            <input v-model="usuario.password" name="password" type="password" placeholder="Senha">

            <button v-if="showSignup" @click="signup"> Registrar </button>
            <button v-else @click="signin">Entrar</button>

            <a href @click.prevent="showSignup =  !showSignup">

                <span v-if="showSignup"> Já tem cadastro? Acesse o Login! </span>
                <span v-else> Não tem cadastro? Registre-se aqui! </span>

             </a>

    </div>

</div>
    
</template>

<script>

import {baseApiUrl, showError, userKey } from '@/config/global'
import axios from 'axios'
import Usuario from '@/services/usuarios'

export default {
    name: 'Auth',
    data: function(){
        return {
            showSignup: false,
            usuario: {}
        }
    },
    methods: {
        signin(){
            axios.post(`${baseApiUrl}/signin`, this.usuario)
            .then(res =>{
                this.$store.commit('setUser', res.data);
                localStorage.setItem(userKey, JSON.stringify(res.data));
                this.$router.push({path: '/'})
            })
            .catch(showError)
        },
         signup(){
            axios.post(`${baseApiUrl}/signup`, this.usuario)
            .then (() =>{
                this.$toasted.global.defaultSuccess();
                this.usuario = {};
                this.showSignup = false
 
            }).catch(showError)
         }
    }
}
</script>

<style>

.auth-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-modal {
    background-color: aliceblue;
    width: 450px;
    padding: 40px;
    box-shadow: 0 1px 5px rgba(0,0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;

}

.auth-title {
    font-size: 25px;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 15px;
}

.auth-modal input {
    border: 1px solid #BBB;
    width: 100%;
    margin-bottom: 15px;
    padding: 3px 8px;

}

.auth-modal button {
   align-self: flex-end;
  background-color: rgb(94, 2, 199);
  color: #FFF;
  padding:  10px 15px;
  margin-top: 20px;

}

.auth-modal a {
 margin-top: 25px;

}

.auth-modal a:hover {
    color: rgb(146, 4, 165)

}

.auth-modal hr {
    border: 0px;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right,
    rgba(120,120,120,0),
    rgba(120,120,120, 0.75),
    rgba(120,120,120,0)
    );

}

</style>
