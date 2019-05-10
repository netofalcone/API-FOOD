const schedule = require('node-schedule');
// temporizador de dados
// olhando o banco e pegando os dados
module.exports = app => {

    // obtendo o resultado
    schedule.scheduleJob('*/1 * * * * ', async function () {
        const usersCount = await app.db('users').count('id').first();
        const restaurantesCount = await app.db('restaurantes').count('id').first();
        const produtosCount = await app.db('produtos').count('id').first();

        const { Stat } = app.api.stat;

        //ultima estatistica
        const lastStat = await Stat.findOne({}, {}, { sort: { 'createdAt' : -1 } });

        // criando nova estatistica
        const stat = new Stat({
            users: usersCount.count,
            restaurantes: restaurantesCount.count,
            produtos: produtosCount.count,
            createdAt: new Date()
        });

        // comparação de mudança de dados
        const changeUsers = !lastStat || stat.users !== lastStat.users;
        // teste de obs[falta colocar este dado {restaurantes}]
        const changeRestaurantes = !lastStat || stat.restaurantes !== lastStat.restaurantes;
        const changeProdutos = !lastStat || stat.produtos !== lastStat.produtos;

        // teste e inserção do dados
        if(changeUsers || changeRestaurantes || changeProdutos) {
            stat.save().then(() => console.log('[Stats] Estatíticas atualizadas!!!!!!!!!!!!!!!!!'));
        }
    });
};