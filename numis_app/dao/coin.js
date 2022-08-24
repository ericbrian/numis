const db = require("../db/db");

class CoinDAO {

    table_name = 'coin';

    async getCoins() {
        const res = db(this.table_name).select();
        return res;
    }

    async createCoin(face_value, pretty_face_value, series_or_theme_name, obverse, reverse, edge, years,
        composition, weight_grams, diameter_mm, comments, currency_id, country_id, mint_id, shape_id,
        designer_obv_id, designer_rev_id) {
        const [id] = await db(this.table_name)
            .insert({
                face_value,
                pretty_face_value,
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
