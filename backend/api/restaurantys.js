module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation;

    const save = (req, res) => {
        const restaurantys = {
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        };
        
        if(req.params.id) restaurantys.id = req.params.id;

        try {
            existsOrError(restaurantys.name, 'Nome não informado')
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(restaurantys.id) {
            app.db('restaurantes')
                .update(restaurantys)
                .where({ id: restaurantys.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('restaurantes')
                .insert(restaurantys)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    };

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código da Restaurante não informado.');

            const subrestaurantys = await app.db('restaurantes')
                .where({ parentId: req.params.id });
            notExistsOrError(subrestaurantys, 'Restaurantes possui subcategorias.');

            const produtos = await app.db('produtos')
                .where({ restaurantysId: req.params.id });
            notExistsOrError(produtos, 'Restaurantes possui produtos.');

            const rowsDeleted = await app.db('restaurantes')
                .where({ id: req.params.id }).del();
            existsOrError(rowsDeleted, 'Restaurantes não foi encontrada.');

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    };

    const withPath = restaurantes => {
        const getParent = (restaurantes, parentId) => {
            const parent = restaurantes.filter(parent => parent.id === parentId);
            return parent.length ? parent[0] : null
        };

        const restaurantesWithPath = restaurantes.map(restaurantys => {
            let path = restaurantys.name;
            let parent = getParent(restaurantes, restaurantys.parentId);

            while(parent) {
                path = `${parent.name} > ${path}`;
                parent = getParent(restaurantes, parent.parentId)
            }

            return { ...restaurantys, path }
        });

        restaurantesWithPath.sort((a, b) => {
            if(a.path < b.path) return -1;
            if(a.path > b.path) return 1;
            return 0
        });

        return restaurantesWithPath
    };

    const get = (req, res) => {
        app.db('restaurantes')
            .then(restaurantes => res.json(withPath(restaurantes)))
            .catch(err => res.status(500).send(err))
    };

    const getById = (req, res) => {
        app.db('restaurantes')
            .where({ id: req.params.id })
            .first()
            .then(restaurantys => res.json(restaurantys))
            .catch(err => res.status(500).send(err))
    };

    const toTree = (restaurantes, tree) => {
        if(!tree) tree = restaurantes.filter(c => !c.parentId);
        tree = tree.map(parentNode => {
            const isChild = node => node.parentId == parentNode.id;
            parentNode.children = toTree(restaurantes, restaurantes.filter(isChild));
            return parentNode
        });
        return tree
    };

    const getTree = (req, res) => {
        app.db('restaurantes')
            .then(restaurantes => res.json(toTree(withPath(restaurantes))))
            .catch(err => res.status(500).send(err))
    };

    return { save, remove, get, getById, getTree }
};