const db = require("../db/db");

class MintDAO {

    table_name = 'mint';

    async getMints() {
        return db(this.table_name).select();
    }

    async createMint(name, location, country_id) {
        const [id] = await db(this.table_name)
            .insert({
                name,
                location,
                country_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new MintDAO();
