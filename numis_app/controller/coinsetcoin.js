const coinsetCoinService = require('../service/coinsetcoin');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CoinsetCoinController {

    async getCoinsetcoins(req, res, next) {

        const coinset_id = req.params.coinset_id;
        if (isNaN(coinset_id))
            throw new Error('Coin Id is required!')

        try {
            const items = await coinsetCoinService.getCoinsetCoins(coinset_id);
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
