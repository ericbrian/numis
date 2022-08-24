const db = require("../db/db");

class DesignerDAO {

    table_name = 'designer';

    async getDesigners() {
        return db(this.table_name).select();
    }

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
