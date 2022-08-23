const currencyCountryService = require('../service/currencycountry');
const appStrings = require('../appstrings');

class CurrencyCountryController {

    async getCurrencyCountries(_req, res) {
        try {
            const items = await currencyCountryService.getCurrencyCountries();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async getCountryCurrencies(_req, res) {
        try {
            const items = await currencyCountryService.getCountryCurrencies();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createCurrencyCountry(req, res) {
        try {
            const id = await currencyCountryService.createCurrencyCountry(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CurrencyCountryController();
