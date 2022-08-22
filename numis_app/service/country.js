const countryDAO = require('../dao/country');

class CountryService {
    createCountry(countryDto) {
        const {
            name,
            short_name
        } = countryDto;
        return countryDAO.createCountry(name, short_name);
    }

    getCountries() {
        countryDAO.getCountries();
    }
}

module.exports = new CountryService();
