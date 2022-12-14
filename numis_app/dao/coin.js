const db = require("../db/db");

class CoinDAO {

    async getCoins() {
        return db('coin').select();
    }

    async createCoin(coinDto) {
        const { face_value, series_or_theme_name, obverse, reverse, edge, years,
            composition, weight_grams, diameter_mm, comments, currency_id, country_id, mint_id, shape_id,
            designer_obv_id, designer_rev_id } = coinDto;
        const [id] = await db('coin')
            .insert({
                face_value,
                series_or_theme_name,
                obverse,
                reverse,
                edge,
                years,
                composition,
                weight_grams,
                diameter_mm,
                comments,
                currency_id,
                country_id,
                mint_id,
                shape_id,
                designer_obv_id,
                designer_rev_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CoinDAO();
