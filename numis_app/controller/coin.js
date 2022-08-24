const coinService = require('../service/coin');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CoinController {

    // GET /coins
    async getCoins(_req, res, next) {
        try {
            const items = await coinService.getCoins();
            res.status(200).json(items);

        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    // POST /coin
    async createCoin(req, res, next) {
        try {
            const id = await coinService.createCoin(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CoinController();
