module.exports = {
    restaurantysWithChildren: `
        WITH RECURSIVE subrestaurantes (id) AS (
            SELECT id FROM restaurantes WHERE id = ?
            UNION ALL
            SELECT c.id FROM subrestaurantes, restaurantes c
                WHERE "parentId" = subrestaurantes.id
        )
        SELECT id FROM subrestaurantes
    `
};