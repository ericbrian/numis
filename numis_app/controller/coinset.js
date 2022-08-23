const coinsetService = require('../service/coinset');
const appStrings = requre('./appstrings');

class CoinsetController {

    async getCoinsets(_req, res) {
        try {
            const items = coinsetService.getCoinsets();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createCoinset(req, res) {
        try {
            const id = await coinsetService.createCoinset(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CoinsetController();
