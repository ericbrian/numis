const countryService = require('../service/country');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class CountryController {

    async getCountries(_req, res, next) {
        try {
            const countries = await countryService.getCountries();
            res.status(200).json(countries);

        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createCountry(req, res, next) {
        try {
            const id = await countryService.createCountry(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

}

module.exports = new CountryController();
