<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <ul>
                        <h5>Sobre ifood</h5>
                        <li><a href="">Quem somos</a></li>
                        <li><a href="">Privacidade</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <h5>Contato</h5>
                        <li><a href="">Como pedir</a></li>
                        <li><a href="">Fale conosco</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <h5>Cidade</h5>
                        <li><a href="">João Pessoa</a></li>
                        <li><a href="">Rio Tinto</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <h5>Siga nossas redes</h5>
                        <li><a href="">facebook</a></li>
                        <li><a href="">instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <span><strong>Copyright</strong> © 2019 food Inc. Todos os direitos reservados.</span>
    </footer>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        flex: 1;
        grid-area: footer;
        background-color:rgb(39, 40, 50);
        color:rgb(255, 255, 255);

        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 0px;
        font-size: 15px;
        flex-wrap: wrap;
    }
    div h5{
        font-size: 17px;
        justify-content: space-evenly;
    }


</style>
