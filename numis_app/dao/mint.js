const db = require("../db/db");

class MintDAO {

    async getMints() {
        return db('mint as m')
            .join('country as c', `m.country_id`, `c.id`)
            .select('c.id', 'm.name as mint_name', 'c.name as country_name');
    }

    async createMint(name, location, country_id) {
        const [id] = await db('mint')
            .insert({ name, location, country_id })
            .returning('id');

        return id;
    }
}

module.exports = new MintDAO();
