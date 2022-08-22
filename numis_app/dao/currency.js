const db = require("../db/db");

class CurrencyDAO {
    async createCurrency(name, short_name, years, demonitized_date, comments) {
        const [id] = await db('currency')
            .insert({
                name,
                short_name,
                years,
                demonitized_date,
                comments
            })
            .returning('id');

        return id;
    }
}

module.exports = new CurrencyDAO();
