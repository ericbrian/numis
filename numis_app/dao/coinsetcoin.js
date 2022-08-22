const db = require("../db/db");

class CoinsetCoinDAO {
    async createCoinsetCoin(coinset_id, coin_id) {
        const [id] = await db('coinset_coin')
            .insert({
                coinset_id,
                coin_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinsetCoinDAO();
