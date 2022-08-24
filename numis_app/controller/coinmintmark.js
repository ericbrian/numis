const coinMintmarkService = require('../service/coinmintmark');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CoinMintmarkController {

    // GET /coinMintmarks/:coin_id
    async getCoinMintmarks(req, res, next) {

        const coin_id = req.params.coin_id;
        if (isNaN(coin_id))
            throw new Error('Coin Id is required!')

        try {
            const items = await coinMintmarkService.getCoinMintmarksByCoin(coin_id);
            res.status(200).json(items);

        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    // POST /coinMintmark
    async createCoinMintmark(req, res, next) {
        try {
            const id = await coinMintmarkService.createMintMark(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CoinMintmarkController();
