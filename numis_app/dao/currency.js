const db = require("../db/db");

class CurrencyDAO {

    table_name = 'currency';

    async getCurrencies() {
        return db(this.table_name).select();
    }

    async createCurrency(name, short_name, years, demonitized_date, comments) {
        const [id] = await db(this.table_name)
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
