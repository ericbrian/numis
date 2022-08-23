const coinImageService = require('../service/coinimage');
const appStrings = require('../appstrings');

class CoinImageController {

    // GET /coinImages/:coin_id
    async getCoinImages(req, res) {
        try {
            const coin_id = req.params.coin_id;
            if (isNaN(coin_id))
                throw new Error('Coin Id is required!')
            const items = await coinImageService.getCoinImages(coin_id);
            res.status(200).json(items);

        } catch (err) {
            console.error(err);
            let msg = appStrings.GENERIC_500;
            if (err.message)
                msg = err.message;
            res.status(500).json(msg);
        }
    }

    // POST /coinImage
    async createCoinImage(req, res) {
        try {
            const id = await coinImageService.createCoinImage(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CoinImageController();
