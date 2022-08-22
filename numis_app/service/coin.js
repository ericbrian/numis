const coinDAO = require('../dao/coin');

class CoinService {
    createCoin(coinDto) {
        const {
            face_value,
            pretty_face_value,
            series_or_theme_name,
            obverse,
            reverse,
            edge,
            years,
            composition,
            weight_grams,
            diameter_mm,
            comments,
            currency_id,
            country_id,
            mint_id,
            shape_id,
            designer_obv_id,
            designer_rev_id
        } = coinDto;
        return coinDAO.createCoin(face_value,
            pretty_face_value,
            series_or_theme_name,
            obverse,
            reverse,
            edge,
            years,
            composition,
            weight_grams,
            diameter_mm,
            comments,
            currency_id,
            country_id,
            mint_id,
            shape_id,
            designer_obv_id,
            designer_rev_id);
    }
}

module.exports = new CoinService();
