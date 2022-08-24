const db = require("../db/db");

class CoinsetCoinDAO {

    table_name = 'coinset_coin';

    async getCoinsetCoins() {
        return db(this.table_name).select();
    }

    async createCoinsetCoin(coinset_id, coin_id) {
        const [id] = await db(this.table_name)
            .insert({
                coinset_id,
                coin_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinsetCoinDAO();
