const db = require("../db/db");

class GradeDAO {

    table_name = 'grade';

    async getGrades() {
        return db(this.table_name).select();
    }

    async createGrade(name, short_name, sort_order) {
        const [id] = await db(this.table_name)
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
