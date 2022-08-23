const countryService = require('../service/country');
const appStrings = requre('./appstrings');

class CountryController {
    async createCountry(req, res) {
        try {
            const id = await countryService.createCountry(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async getCountries(_req, res) {
        try {
            const countries = await countryService.getCountries();
            res.status(200).json(countries);

        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new CountryController();
