const db = require("../db/db");

class PersonDAO {
    async createShape(name) {
        const [id] = await db('shape').insert({
            name
        }).returning('id');

        return id;
    }
}

module.exports = new PersonDAO();
