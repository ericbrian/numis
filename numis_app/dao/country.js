const db = require("../db/db");

class CountryDAO {
    async createCountry(name, short_name) {
        const [id] = await db('country')
            .insert({
                name,
                short_name
            })
            .returning('id');

        return id;
    }

    async getCountries() {
        return db('country').select();
    }
}

module.exports = new CountryDAO();
