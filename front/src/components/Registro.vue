<template>
    <div class="container">

        <form>
            <h1>Cadastro de Clientes</h1>
            <div class="form-row">

                <div class="form-group col-md-6">
                    <label for="inputText">Nome</label>
                    <input type="text" class="form-control" id="inputText" placeholder="Nome">
                </div>

                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>

                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                </div>

                <div class="form-group col-md-6">
                    <label for="inputPassword5">Repita seu Password</label>
                    <input type="password" class="form-control" id="inputPassword5" placeholder="Password">
                </div>

            </div>
            <div class="form-group">
                <label for="inputAddress">Zona:</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputAddress2">Endereços:</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Cidades</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">Estado</label>
                    <select id="inputState" class="form-control">
                        <option selected>São Paulo</option>
                        <option>Paraíba</option>
                        <option>Rio Grande do Norte</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Registro",
    }
</script>

<style scoped>

</style>