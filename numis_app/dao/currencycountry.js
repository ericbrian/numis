const db = require("../db/db");

class CurrencyCountryDAO {
    async createCurrencyCountry(currency_id, country_id) {
        const [id] = await db('currency_country')
            .insert({
                currency_id,
                country_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CurrencyCountryDAO();
