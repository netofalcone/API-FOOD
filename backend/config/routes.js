const admin = require('./admin');

module.exports = app => {
    app.post('/signup', app.api.user.save);
    app.post('/signin', app.api.auth.signin);
    app.post('/validateToken', app.api.auth.validateToken);

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(app.api.user.get);

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove));

    app.route('/restaurantes')
        .all(app.config.passport.authenticate())
        .get(app.api.restaurantys.get)
        .post(app.api.restaurantys.save);

    // Cuidado com ordem! Tem que vir antes de /restaurantes/:id
    app.route('/restaurantes/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.restaurantys.getTree);

    app.route('/restaurantes/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.restaurantys.getById)
        .put(app.api.restaurantys.save)
        .delete(app.api.restaurantys.remove);

    app.route('/produtos')
        .all(app.config.passport.authenticate())
        .get(app.api.produto.get)
        .post(app.api.produto.save);

    app.route('/produtos/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.produto.getById)
        .put(app.api.produto.save)
        .delete(app.api.produto.remove);

    app.route('/restaurantes/:id/produtos')
        .all(app.config.passport.authenticate())
        .get(app.api.produto.getByRestaurantys);

    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)
};