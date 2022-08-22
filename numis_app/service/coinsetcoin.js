const coinsetCoinDAO = require('../dao/coinsetcoin');

class CoinsetCoinService {
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
