const currencyCountryDAO = require('../dao/currencycountry');

class CurrencyCountryService {

    getCurrencyCountries() {
        return currencyCountryDAO.getCurrencyCountries();
    }

    createCurrencyCountry(currencyCountryDto) {
        const {
            currency_id,
            country_id
        } = currencyCountryDto;
        return currencyCountryDAO.createCurrencyCountry(currency_id,
            country_id);
    }
}

module.exports = new CurrencyCountryService();
