const countryDAO = require('../dao/country');

class CountryService {

    getCountries() {
        return countryDAO.getCountries();
    }

    createCountry(countryDto) {
        const {
            name,
            short_name
        } = countryDto;
        return countryDAO.createCountry(name, short_name);
    }

}

module.exports = new CountryService();
