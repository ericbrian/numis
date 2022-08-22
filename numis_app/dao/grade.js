const db = require("../db/db");

class GradeDAO {
    async createGrade(name, short_name, sort_order) {
        const [id] = await db('grade')
            .insert({
                name,
                short_name,
                sort_order
            })
            .returning('id');

        return id;
    }
}

module.exports = new GradeDAO();
