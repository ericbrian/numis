const db = require("../db/db");

class ShapeDAO {
    async createShape(name) {
        const [id] = await db('shape')
            .insert({ name })
            .returning('id');

        return id;
    }
}

module.exports = new ShapeDAO();
