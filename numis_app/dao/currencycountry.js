const db = require("../db/db");

class CurrencyCountryDAO {

    table_name = 'currency_country';

    async getCurrencyCountries() {
        return db(this.table_name).select();
    }

    async createCurrencyCountry(currency_id, country_id) {
        const [id] = await db(this.table_name)
            .insert({
                currency_id,
                country_id
            })
            .returning('id');

        return id;
    }
}

module.exports = new CurrencyCountryDAO();
