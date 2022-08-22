
const db = require("../db/db");

class CoinMintmarkDAO {
    async createCoinMintmark(coin_id, mintmark_id) {
        const [id] = await db('coin_mintmark')
            .insert({
                coin_id,
                mintmark_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinMintmarkDAO();
