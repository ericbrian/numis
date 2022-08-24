const coinsetCoinService = require('../service/coinsetcoin');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CoinsetCoinController {
    async getCoinsetcoins(_req, res, next) {
        try {
            const items = await coinsetCoinService.getCoinsetcoins();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createCoinsetCoin(req, res, next) {
        try {
            const id = await coinsetCoinService.createCoinsetCoin(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CoinsetCoinController();
