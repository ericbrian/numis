const coinService = require('../service/coin');
const appStrings = require('../appstrings');

class CoinController {
    async createCoin(req, res) {
        try {
            const id = await coinService.createCoin(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async getCoins(_req, res) {
        try {
            const items = await coinService.getCoins();
            res.status(200).json(items);

        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CoinController();
