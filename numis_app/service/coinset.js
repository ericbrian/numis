const coinsetDAO = require('../dao/coinset');

class CoinsetService {

    getCoinsets() {
        return coinsetDAO.getCoinsets();
    }

    createCoinset(coinsetDto) {
        const {
            name
        } = coinsetDto;
        return coinsetDAO.createCoinset(name);
    }
}

module.exports = new CoinsetService();
