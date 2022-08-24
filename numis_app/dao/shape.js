const db = require("../db/db");

class ShapeDAO {

    table_name = 'shape';

    async getShapes() {
        return db(this.table_name)
            .select()
            .orderBy('name');
    }

    async createShape(name) {
        const [id] = await db(this.table_name)
            .insert({ name })
            .returning('id');

        return id;
    }
}

module.exports = new ShapeDAO();
