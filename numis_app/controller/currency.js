const currencyService = require('../service/currency');
const appStrings = require('../appstrings');

class CurrencyController {

    async getCurrencies(_req, res) {
        try {
            const items = await currencyService.getCurrencies();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createCurrency(req, res) {
        try {
            const id = await currencyService.createCurrency(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CurrencyController();
