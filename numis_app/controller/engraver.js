const designerService = require('../service/engraver');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class EngraverController {
    async getEngravers(req, res, next) {
        try {
            const items = await designerService.getDesigners(req.body);
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createEngraver(req, res, next) {
        try {
            const id = await designerService.createDesigner(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;

        }
    }
}

module.exports = new EngraverController();
