const currencyDAO = require('../dao/currency');

class CurrencyService {

    getCurrencies() {
        return currencyDAO.getCurrencies();
    }

    createCurrency(currencyDto) {
        const {
            name,
            short_name,
            years,
            demonitized_date,
            comments
        } = currencyDto;
        return currencyDAO.createCurrency(name,
            short_name,
            years,
            demonitized_date,
            comments);
    }
}

module.exports = new CurrencyService();
