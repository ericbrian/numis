const coinsetService = require('../service/coinset');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CoinsetController {

    async getCoinsets(_req, res, next) {
        try {
            const items = coinsetService.getCoinsets();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createCoinset(req, res, next) {
        try {
            const id = await coinsetService.createCoinset(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CoinsetController();
