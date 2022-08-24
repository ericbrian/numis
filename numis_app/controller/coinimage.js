const coinImageService = require('../service/coinimage');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CoinImageController {

    // GET /coinImages/:coin_id
    async getCoinImagesByCoinId(req, res, next) {

        const coin_id = req.params.coin_id;
        if (isNaN(coin_id))
            throw new Error('Coin Id is required!')

        try {
            const items = await coinImageService.getCoinImagesByCoinId(coin_id);
            res.status(200).json(items);
        } catch (err) {
            let msg = appStrings.GENERIC_500;
            if (err.message)
                msg = err.message;
            next(ApiError.internal(msg));
            return;
        }
    }

    // POST /coinImage
    async createCoinImage(req, res, next) {
        try {
            const id = await coinImageService.createCoinImage(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CoinImageController();
