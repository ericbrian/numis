const db = require("../db/db");

class DesignerDAO {

    async getEngravers() {
        return db(designer)
            .select('id', 'name', 'comment');
    }

    async createEngraver(name, comment) {
        const [id] = await db('designer')
            .insert({
                name,
                comment
            })
            .returning('id');

        return id;
    }
}

module.exports = new DesignerDAO();
