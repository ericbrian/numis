const currencyCountryService = require('../service/currencycountry');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CurrencyCountryController {

    async getCurrencyCountries(req, res, next) {
        const currency_id = req.params.currency_id;
        if (isNaN(currency_id))
            throw new Error('Coin Id is required!')

        try {
            const items = await currencyCountryService.getCurrencyCountries(currency_id);
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async getCountryCurrencies(req, res, next) {
        const country_id = req.params.country_id;
        if (isNaN(country_id))
            throw new Error('Coin Id is required!')

        try {
            const items = await currencyCountryService.getCountryCurrencies(country_id);
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
