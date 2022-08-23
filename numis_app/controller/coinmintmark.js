const coinMintmarkService = require('../service/coinmintmark');
const appStrings = requre('./appstrings');

class CoinMintmarkController {

    // GET /coinMintmarks/:coin_id
    async getCoinMintmarks(_req, res) {
        const coin_id = req.params.coin_id;
        if (isNaN(coin_id))
            throw new Error('Coin Id is required!')

        try {
            const items = await coinService.getCoins(coin_id);
            res.status(200).json(items);

        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    // POST /coinMintmark
    async createCoinMintmark(req, res) {
        try {
            const id = await mintMarkService.createMintMark(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CoinMintmarkController();
