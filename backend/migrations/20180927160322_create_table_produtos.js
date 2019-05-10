
exports.up = function(knex, Promise) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('description', 1000).notNull();
        table.string('imageUrl', 1000);
        table.integer('userId').references('id').inTable('users').notNull();
        table.integer('restaurantysId').references('id').inTable('restaurantes').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('produtos')
};
