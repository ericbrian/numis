const db = require("../db/db");

class CoinImageDAO {

    table_name = 'coin_image';

    async getCoinImages() {
        return db(this.table_name).select();
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
