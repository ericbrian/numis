const db = require("../db/db");

class ImageDAO {

    table_name = 'image';

    async getImages() {
        return db(this.table_name).select();
    }

    async createImage(url, base64encoding, copyright, description) {
        const [id] = await db(this.table_name)
            .insert({
                url,
                base64encoding,
                copyright,
                description
            })
            .returning('id');

        return id;
    }
}

module.exports = new ImageDAO();
