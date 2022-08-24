const currencyCountryDAO = require('../dao/currencycountry');

class CurrencyCountryService {

    getCurrencyCountries(currency_id) {
        return currencyCountryDAO.getCurrencyCountries(currency_id);
    }

    getCountryCurrencies(country_id) {
        return currencyCountryDAO.getCountryCurrencies(country_id);
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
