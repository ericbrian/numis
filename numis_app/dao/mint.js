const db = require("../db/db");

class MintDAO {
    async createMint(name, location, country_id) {
        const [id] = await db('mint')
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
