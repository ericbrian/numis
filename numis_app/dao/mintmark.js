const db = require("../db/db");

class MintmarkDAO {

    table_name = 'mintmark';

    async getMintmarksForMint(mint_id) {
        return db(this.table_name)
            .where({ mint_id })
            .select('id', 'mark', 'description', 'mint_id', 'period');
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
