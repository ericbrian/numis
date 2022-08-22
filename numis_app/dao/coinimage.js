const db = require("../db/db");

class CoinImageDAO {
    async createCoinImage(coin_id, image_id) {
        const [id] = await db('coin_image')
            .insert({
                coin_id,
                image_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinImageDAO();
