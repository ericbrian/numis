const countryDAO = require('../dao/country');

class CountryService {
    createCountry(countryDto) {
        const {
            name,
            short_name
        } = countryDto;
        return countryDAO.createCountry(name,
            short_name);
    }
}

module.exports = new CountryService();