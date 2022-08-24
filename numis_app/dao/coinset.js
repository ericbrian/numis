const db = require("../db/db");

class CoinsetDAO {

    table_name = 'coinset';

    async getCoinsets() {
        return db(this.table_name).select();
    }

    async createCointset(name) {
        const [id] = await db(this.table_name)
            .insert({ name })
            .returning('id');

        return id;
    }
}

module.exports = new CoinsetDAO();
