const db = require("../db/db");

class CollectionDAO {
    async createCollection(coin_id, coinset_id, years, mint_id, mintmark_id, grade_id, condition, paid_amount, paid_currency_id, sourced_from, sourced_when, is_cleaned) {
        const [id] = await db('collection')
            .insert({
                coin_id,
                coinset_id,
                years,
                mint_id,
                mintmark_id,
                grade_id,
                condition,
                paid_amount,
                paid_currency_id,
                sourced_from,
                sourced_when,
                is_cleaned
            })
            .returning('id');

        return id;
    }
}

module.exports = new CollectionDAO();
