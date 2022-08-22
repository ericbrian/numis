const coinImageDAO = require('../dao/coinimage');

class CoinImageService {
    createCoinImage(coinImageDto) {
        const {
            coin_id,
            image_id
        } = coinImageDto;
        return coinImageDAO.createCoinImage(coin_id,
            image_id);
    }
}

module.exports = new CoinImageService();
