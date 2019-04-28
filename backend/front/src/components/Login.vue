<template>

    <div class="Login">
        <login-component
                :errorMessage="errorMessage"
                v-on:loginCredentials="checkCredentials"
                passwordPattern=".{2,8}"
                passwordMessage="Greater than 1 and less than 9"
        ></login-component>
    </div>

</template>

<script>
    import LoginComponent from './LoginComponent'
    export default {
        name: "Login",
        components: {
            LoginComponent,
            'login-component': LoginComponent
        },
        data () {
            return {
                errorMessage: ''
            }
        },
        methods: {
            checkCredentials: function (event) {
                console.log('Email is: ' + event.email)
                console.log('Password is: ' + event.password)
            }
        }
    }

</script>

<style scoped>
    .Login {
        padding-top: 50px;
        padding-right: 100px;
        padding-bottom: 50px;
        padding-left: 10px;
    }

</style>