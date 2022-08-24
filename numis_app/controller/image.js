const imageService = require('../service/image');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class ImageController {

    async getImages(req, res, next) {
        try {
            const items = await gradeService.getImages(req.params.coin_id);
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createImage(req, res, next) {
        try {
            const id = await imageService.createImage(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new ImageController();
