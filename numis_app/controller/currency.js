const currencyService = require('../service/currency');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CurrencyController {

    async getCurrencies(_req, res, next) {
        try {
            const items = await currencyService.getCurrencies();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createCurrency(req, res, next) {
        try {
            const id = await currencyService.createCurrency(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CurrencyController();
