<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Login</h3>
                    </div>

                    <div class="panel-body">
                        <form @submit.prevent="submitLogin">
                            <div class="form-group has-feedback" v-bind:class="[emailSuccessClass]">
                                <label for="email" class="control-label sr-only">Add your email address.</label>
                                <input ref="txtEmail" type="email" class="form-control" @input="checkEmailValidation" id="email" placeholder="Email" autofocus required>
                                <span v-bind:class="[emailIconClass]"></span>
                            </div>

                            <div class="form-group has-feedback" v-bind:class="[passwordSuccessClass]">
                                <label for="password" class="control-label sr-only">Add your password.</label>
                                <input ref="txtPassword" type="password" class="form-control" @input="checkPasswordValidation" id="password" placeholder="Password" required
                                       :pattern="passwordPattern" aria-describedby="passwordHelpSpan">
                                <span v-bind:class="[passwordIconClass]"></span>
                                <small id="passwordHelpSpan">{{ passwordMessage }}</small>
                            </div>

                            <div v-if="errorMessage" class="text-center text-danger">{{ errorMessage }}</div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="chkRemember" v-model="rememberMe">
                                    Remember Me
                                </label>
                                <button :disabled="submitBtnDisabled" class="btn btn-primary pull-right">Sign In</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "logar",
        props: {
            errorMessage: {
                type: String,
                required: false,
                default: ''
            },
            passwordMessage: {
                type: String,
                required: false,
                default: "O comprimento da senha deve ser maior que 4 mas não maior que 10"
            },
            passwordPattern: {
                type: String,
                required: false,
                default: '.{5,10}'
            }
        },
        data() {
            return {
                emailSuccessClass: '',
                passwordSuccessClass: '',
                emailIconClass: '',
                passwordIconClass: '',
                submitBtnDisabled: true,
                rememberMe: false
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
                    this.emailSuccessClass = 'has-success'
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
                    this.passwordSuccessClass = 'has-success'
                    this.passwordIconClass = 'glyphicon glyphicon-ok form-control-feedback'
                    if(this.$refs.txtEmail.checkValidity()) this.submitBtnDisabled = false
                } else {
                    this.passwordSuccessClass = 'has-error'
                    this.passwordIconClass = 'glyphicon glyphicon-remove form-control-feedback'
                    this.submitBtnDisabled = true
                }
            },
            submitLogin: function () {
                let email = this.$refs.txtEmail.value.trim()
                let password = this.$refs.txtPassword.value.trim()

                // FUNÇÕES DE COOKIE!
                // 'key=value; expires=current dateTime in UTC; path=/'
                if(this.rememberMe) {
                    let d = new Date()
                    d.setTime(d.getTime() + (180*24*60*60*1000)) //
                    document.cookie = 'email=' + email + ';expires=' + d.toUTCString() + ';path=/'
                    document.cookie = 'password=' + password + ';expires=' + d.toUTCString() + ';path=/'
                    console.log('Nós apenas configuramos os cookies: ' + document.cookie)
                } else {
                    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                    document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                    console.log('Acabamos de excluir os cookies: ' + document.cookie)
                }

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

</style>