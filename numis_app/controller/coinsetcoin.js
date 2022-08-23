const coinsetCoinService = require('../service/coinsetcoin');
const appStrings = requre('./appstrings');

class CoinsetCoinController {
    async getCoinsetcoins(_req, res) {
        try {
            const items = await coinsetCoinService.getCoinsetcoins();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createCoinsetCoin(req, res) {
        try {
            const id = await coinsetCoinService.createCoinsetCoin(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CoinsetCoinController();
