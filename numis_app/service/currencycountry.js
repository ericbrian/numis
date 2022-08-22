const currencyCountryDAO = require('../dao/currencycountry');

class CurrencyCountryService {
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
