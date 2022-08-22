const db = require("../db/db");

class ImageDAO {
    async createImage(url, base64encoding, copyright, description) {
        const [id] = await db('image')
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
