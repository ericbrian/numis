const coinMintmarkDAO = require('../dao/coinmintmark');

class CoinMintmarkService {

    getCoinMintmarksByCoin(coin_id) {
        return coinMintmarkDAO.getCoinMintmarksByCoin(coin_id);
    }

    createCoinMintmark(coinMintmarkDto) {
        const {
            coin_id,
            mintmark_id
        } = coinMintmarkDto;
        return coinMintmarkDAO.createCoinMintmark(coin_id,
            mintmark_id);
    }
}

module.exports = new CoinMintmarkService();
