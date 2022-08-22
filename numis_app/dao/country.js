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
}

module.exports = new CountryDAO();
