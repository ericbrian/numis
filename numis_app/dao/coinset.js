const db = require("../db/db");

class CoinsetDAO {
    async createCointset(name) {
        const [id] = await db('coinset')
            .insert({ name })
            .returning('id');

        return id;
    }
}

module.exports = new CoinsetDAO();
