<template>

 <div class="LoginComponet">
  <div class="container-fluid">
   <div class="row">
    <div class="col-xs-20 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2">
     <div class="panel panel-danger">
      <div class="panel-heading">
       <h3 class="panel-title" >Login</h3>
      </div>

      <div class="panel-body">
       <form @submit.prevent="submitLogin">
        <div class="form-group has-feedback" v-bind:class="[emailSuccessClass]">
         <label for="email" class="control-label sr-only">Adicionar email.</label>
         <input ref="txtEmail" type="email" class="form-control" @input="checkEmailValidation" id="email" placeholder="Email" v-model="usuario.email" autofocus required>
         <span v-bind:class="[emailIconClass]"></span>
        </div>

        <div class="form-group has-feedback" v-bind:class="[passwordSuccessClass]">
         <label for="password" class="control-label sr-only">Adicionar senha.</label>
         <input ref="txtPassword" type="password" class="form-control" @input="checkPasswordValidation" id="password" placeholder="Password" v-model="usuario.password"  required
                :pattern="passwordPattern" aria-describedby="passwordHelpSpan">
         <span v-bind:class="[passwordIconClass]"></span>
         <small id="passwordHelpSpan">{{ passwordMessage }}</small>
        </div>

        <div v-if="errorMessage" class="text-center text-danger">{{ errorMessage }}</div>
        <div class="checkbox">

          <a href="./restaurantes"><button :disabled="submitBtnDisabled" class="btn btn-primary pull-right">Entrar</button></a>


         <div class="col-md-3 ">
          <a href="/"><button type="button" class="btn btn-primary">Voltar ao Menu</button></a>
         </div>

        </div>
       </form>

      </div>
     </div>
    </div>
   </div>
  </div>
 </div>

</template>

<script>

 import Usuario from '@/services/usuarios'

    export default {
        name: 'LoginComponent',
        props: {
            errorMessage: {
                type: String,
                required: false,
                default: ''
            },
            passwordMessage: {
                type: String,
                required: false,
                default: "O comprimento da senha deve ser maior que 4 e menor que 10"
            },
            passwordPattern: {
                type: String,
                required: false,
                default: '.{3,10}'
            }
        },
        data() {
            return {
             usuario: {
               email: '',
               password: '',
               emailSuccessClass: '',
               passwordSuccessClass: '',
               emailIconClass: '',
               passwordIconClass: '',
               submitBtnDisabled: true,
               rememberMe: false
             }
            }
        },
        mounted: function () {
            let email = document.cookie.match('(^|;)\\s*' + 'email' + '\\s*=\\s*([^;]+)')
            let password = document.cookie.match('(^|;)\\s*' + 'password' + '\\s*=\\s*([^;]+)')
            this.$refs.txtEmail.value = email ? email.pop() : ''
            this.$refs.txtPassword.value = password ? password.pop() : ''
            if (email) this.submitBtnDisabled = false
            console.log('Nós apenas verificamos se havia cookies: ' + document.cookie)
        },
        methods: {
            checkEmailValidation: function () {
                if (this.$refs.txtEmail.checkValidity()) {
                 // mudanca nesta linha
                    this.emailSuccessClass = 'Sucess'
                    this.emailIconClass = 'glyphicon glyphicon-ok form-control-feedback'
                    if(this.$refs.txtPassword.checkValidity()) this.submitBtnDisabled = false
                } else {
                    this.emailSuccessClass = 'has-error'
                    this.emailIconClass = 'glyphicon glyphicon-remove form-control-feedback'
                    this.submitBtnDisabled = true
                }
            },
            checkPasswordValidation: function () {
                if (this.$refs.txtPassword.checkValidity()) {
                 // mudanca nesta linha
                    this.passwordSuccessClass = 'Sucess'
                    this.passwordIconClass = 'glyphicon glyphicon-ok form-control-feedback'
                    if(this.$refs.txtEmail.checkValidity()) this.submitBtnDisabled = false
                } else {
                    this.passwordSuccessClass = 'has-error'
                    this.passwordIconClass = 'glyphicon glyphicon-remove form-control-feedback'
                    this.submitBtnDisabled = true
                }
            },
            submitLogin: function () {
                let email = this.$refs.txtEmail.value.trim();
                let password = this.$refs.txtPassword.value.trim();

                this.$emit('loginCredentials',
                    {
                        'email': email,
                        'password': password
                    }
                )
            }
        }
    }
</script>

<style scoped>
 .loginComponet {
  max-width: 900px;
  margin: 0 auto;
 }

</style>