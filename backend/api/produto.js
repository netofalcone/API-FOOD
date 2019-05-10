const queries = require('./queries');

module.exports = app => {
    const { existsOrError } = app.api.validation;

    // metodo de salva
    const save = (req, res) => {
        const produto = { ...req.body };
        if(req.params.id) produto.id = req.params.id;

        // msg de validações
        try {
            existsOrError(produto.name, 'Nome não informado');
            existsOrError(produto.description, 'Descrição não informada');
            existsOrError(produto.restaurantysId, 'Restaurante não informada');
            existsOrError(produto.userId, 'Autor não informado');
        } catch(msg) {
            res.status(400).send(msg)
        }
        // persistencia dos dados que é atualização
        if(produto.id) {
            app.db('produtos')
                .update(produto)
                .where({ id: produto.id })
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            // aqui será para incluir o dados
            app.db('produtos')
                .insert(produto)
                .then(_=> res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    };
    // funcionalidade remove
    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('produtos')
                .where({ id: req.params.id }).del();

            // msg de erros
            try {
                existsOrError(rowsDeleted, 'Produto não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    };
    // fazendo paginação
    const limit = 10;//usado 10 resgistro por pagina
    // pegando todos os dados
    const get = async (req, res) => {
        const page = req.query.page || 1;

        // resultado da pagina com o contado
        const result = await app.db('produtos').count('id').first();
        const count = parseInt(result.count);

        // seleção dos dados
        app.db('produtos')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(produtos => res.json({ data: produtos, count, limit }))
            .catch(err => res.status(500).send(err))
    };
    // funçao de pega os dados com id só um dado
    const getById = (req, res) => {
        app.db('produtos')
            .where({ id: req.params.id })
            .first()
            .then(produto => {
                produto.content = produto.content.toString();
                return res.json(produto)
            })
            .catch(err => res.status(500).send(err))
    };
    //função de pega os dados do restaurante
    const getByRestaurantys = async (req, res) => {
        const restaurantysId = req.params.id;
        const page = req.query.page || 1;
        const restaurantes = await app.db.raw(queries.restaurantysWithChildren, restaurantysId);
        const ids = restaurantes.rows.map(c => c.id);

        // consulta dos dados
        app.db({a: 'produtos', u: 'users'})
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .limit(limit).offset(page * limit - limit)
            //igualhando as tabelas
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            // pegando os ids
            .whereIn('restaurantysId', ids)
            // ordenação descrente
            .orderBy('a.id', 'desc')
            // mandando os dados para o back
            .then(produtos => res.json(produtos))
            .catch(err => res.status(500).send(err))
    };

    return { save, remove, get, getById, getByRestaurantys }
};