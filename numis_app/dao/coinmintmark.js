
const db = require("../db/db");

class CoinMintmarkDAO {

    table_name = 'coin_mintmark';

    async getCoinMintmarksByCoin(coin_id) {
        return db(this.table_name)
            .where({ coin_id })
            .select();
    }

    async createCoinMintmark(coin_id, mintmark_id) {
        const [id] = await db(this.table_name)
            .insert({
                coin_id,
                mintmark_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinMintmarkDAO();
