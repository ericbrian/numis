const coinsetCoinDAO = require('../dao/coinsetcoin');

class CoinsetCoinService {

    getCoinsetCoins(coinset_id) {
        return coinsetCoinDAO.getCoinsetCoins(coinset_id);
    }

    createCoinsetCoin(coinsetCoinDto) {
        const {
            coinset_id,
            coin_id
        } = coinsetCoinDto;
        return coinsetCoinDAO.createCoinsetCoin(coinset_id,
            coin_id);
    }
}

module.exports = new CoinsetCoinService();
