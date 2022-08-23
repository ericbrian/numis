const collectionService = require('../service/collection');
const appStrings = require('./appstrings');

class CollectionController {

    async getCollections(_req, res) {
        try {
            const items = await collectionService.getCollections();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createCollection(req, res) {
        try {
            const id = await collectionService.createCollection(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CollectionController();
