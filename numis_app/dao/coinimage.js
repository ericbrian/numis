const db = require("../db/db");

class CoinImageDAO {

    table_name = 'coin_image';

    async getCoinImagesByCoinId(coin_id) {
        return db(this.table_name)
            .where({ coin_id })
            .select();
    }

    async createCoinImage(coin_id, image_id) {
        const [id] = await db(this.table_name)
            .insert({
                coin_id,
                image_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinImageDAO();
