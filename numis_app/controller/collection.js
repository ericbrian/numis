const collectionService = require('../service/collection');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CollectionController {

    async getCollections(_req, res, next) {
        try {
            const items = await collectionService.getCollections();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createCollection(req, res, next) {
        try {
            const id = await collectionService.createCollection(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CollectionController();
