const coinsetDAO = require('../dao/coinset');

class CoinsetService {
    createCoinset(coinsetDto) {
        const {
            name
        } = coinsetDto;
        return coinsetDAO.createCoinset(name);
    }
}

module.exports = new CoinsetService();
