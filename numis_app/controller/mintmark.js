const mintmarkService = require('../service/mintmark');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class MintmarkController {

    async getMintmarksForCountry(req, res, next) {
        try {
            const items = await mintmarkService.getMintmarksForCountry(req.params.country_id);
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createMintmark(req, res, next) {
        try {
            const id = await mintmarkService.createMintmark(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new MintmarkController();
