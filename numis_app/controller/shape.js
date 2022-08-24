const shapeService = require('../service/shape');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class ShapeController {

    async getShapes(_req, res, next) {
        try {
            const items = await shapeService.getShapes();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createShape(req, res, next) {
        try {
            const id = await shapeService.createShape(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new ShapeController();
