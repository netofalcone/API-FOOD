module.exports = app => {
    // modelo
    const Stat = app.mongoose.model('Stat', {
        users: Number,
        restaurantes: Number,
        produtos: Number,
        createdAt: Date
    });
    // metodo de pega a estatistica mais nova
    const get = (req, res) => {
        // pegando ultimos dados cadastrados
        Stat.findOne({}, {}, { sort: { 'createdAt' : -1 }})
            .then(stat => {
                const defaultStat = {
                    users: 0,
                    restaurantes: 0,
                    produtos: 0
                };
                res.json(stat || defaultStat)
            })
    };

    return { Stat, get }
};