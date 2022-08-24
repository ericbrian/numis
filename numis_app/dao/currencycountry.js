const db = require("../db/db");

class CurrencyCountryDAO {

    async getCurrencyCountries(currency_id) {
        return db('currency_country as cc')
            .where({ currency_id })
            .join('currency as cu', 'cc.currency_id', 'cu.id')
            .join('country as co', 'cc.country_id', 'co.id')
            .select('cu.name as currency_name', 'co.name as country_name');
    }

    async getCountryCurrencies(country_id) {
        return db('currency_country as cc')
            .where({ country_id })
            .join('currency as cu', 'cc.currency_id', 'cu.id')
            .join('country as co', 'cc.country_id', 'co.id')
            .select('cu.name as currency_name', 'co.name as country_name');
    }

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
