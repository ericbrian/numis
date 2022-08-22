const e = require("express");

class CountryController {
    async createCountry(req, res) {
        try {
            const id = await countryService.createCountry(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }

    async getCountries(_req, res) {
        try {
            const countries = await countryService.getCountries();
            res.status(201).json(countries);

        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new CountryController();
