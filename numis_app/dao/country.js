const db = require("../db/db");

class CountryDAO {

    table_name = 'country';

    async getCountries() {
        return db(this.table_name).select();
    }

    async createCountry(name, short_name) {
        const [id] = await db(this.table_name)
            .insert({ name, short_name })
            .returning('id');

        return id;
    }
}

module.exports = new CountryDAO();
