const mintService = require('../service/mint');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class MintController {

    async getMints(_req, res, next) {
        try {
            const items = await mintService.getMints();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createMint(req, res, next) {
        try {
            const id = await mintService.createMint(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new MintController();
