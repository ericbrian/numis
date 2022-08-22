const db = require("../db/db");

class DesignerDAO {
    async createDesigner(name, comment) {
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
