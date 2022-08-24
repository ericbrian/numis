const db = require("../db/db");

class MintmarkDAO {

    table_name = 'mintmark';

    async getMintmarks() {
        return db(this.table_name).select();
    }

    async createMintmark(mark, description, mint_id, period) {
        const [id] = await db('mintmark')
            .insert({
                mark,
                description,
                mint_id,
                period
            })
            .returning('id');

        return id;
    }
}

module.exports = new MintmarkDAO();
