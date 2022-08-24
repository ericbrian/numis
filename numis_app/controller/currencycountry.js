const currencyCountryService = require('../service/currencycountry');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CurrencyCountryController {

    async getCurrencyCountries(_req, res, next) {
        try {
            const items = await currencyCountryService.getCurrencyCountries();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async getCountryCurrencies(_req, res, next) {
        try {
            const items = await currencyCountryService.getCountryCurrencies();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createCurrencyCountry(req, res, next) {
        try {
            const id = await currencyCountryService.createCurrencyCountry(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new CurrencyCountryController();
