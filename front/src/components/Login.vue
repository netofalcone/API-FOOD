<template>
    <div class="Login">
        <Login
                :errorMessage="errorMessage"
                v-on:loginCredentials="checkCredentials"
                passwordPattern=".{2,8}"
                passwordMessage="Greater than 1 and less than 9"
        ></Login>
    </div>
</template>

<script>
    export default {
        name: "Login",
        components: {
            logar,
            'Logar': logar
        },
        data() {
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

</style>