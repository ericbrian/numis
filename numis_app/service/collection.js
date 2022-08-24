const collectionDAO = require('../dao/collection');

class CollectionService {

    getCollections() {
        return collectionDAO.getCollections();
    }

    createCollection(collectionDto) {
        const {
            coin_id,
            coinset_id,
            years,
            mint_id,
            mintmark_id,
            grade_id,
            condition,
            paid_amount,
            paid_currency_id,
            sourced_from,
            sourced_when,
            is_cleaned
        } = collectionDto;
        return collectionDAO.createCollection(coin_id,
            coinset_id,
            years,
            mint_id,
            mintmark_id,
            grade_id,
            condition,
            paid_amount,
            paid_currency_id,
            sourced_from,
            sourced_when,
            is_cleaned);
    }
}

module.exports = new CollectionService();
