<template>
    <div class="Registro-login">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-20 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2">
                    <div class="panel panel-danger">
                        <div class="panel-heading">
                            <h3 class="panel-title" >Resgistro</h3>
                        </div>

                        <div class="panel-body">
                            <form @submit.prevent="submitLogin">

                                <div class="form-group has-feedback" >
                                    <label for="name" class="control-label sr-only">nome</label>
                                    <input  type="name" class="form-control"  id="name" placeholder="Nome" v-model="name" autofocus required>

                                </div>

                                <div class="form-group has-feedback">
                                    <label for="email" class="control-label sr-only">email</label>
                                    <input ref="txtEmail" type="email" class="form-control" @input="checkEmailValidation" id="email" placeholder="Email" v-model="email" autofocus required>

                                </div>

                                <div class="form-group has-feedback">
                                    <label for="password" class="control-label sr-only"> password.</label>
                                    <input ref="txtPassword" type="password" class="form-control" @input="checkPasswordValidation" id="password" placeholder="Password" v-model="password"  required
                                          aria-describedby="passwordHelpSpan">
                                    <small id="passwordHelpSpan">{{ passwordMessage }}</small>
                                </div>

                                <div class="text-center text-danger"></div>
                                <div class="checkbox">

                                    <a href="./restaurantes"><button type="submit" class="btn btn-primary pull-right">Entrar</button></a>

                                    <div class="col-md-3 ">
                                        <a href="/"><button type="button" class="btn btn-primary">Cancelar</button></a>
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
    export default {
        name: 'Registro-login',
    }
</script>

<style scoped>
    .container {
        max-width: 900px;
        margin: 0 auto;
    }
</style>