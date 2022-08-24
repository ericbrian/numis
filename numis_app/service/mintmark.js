const mintmarkDAO = require('../dao/mintmark');

class MintmarkService {

    getMintmarksForMinty(mint_id) {
        return mintmarkDAO.getMintmarksForMint(mint_id);
    }

    createMintmark(mintmarkDto) {
        const {
            mark,
            description,
            mint_id,
            period
        } = mintmarkDto;
        return mintmarkDAO.createMintmark(mark, description, mint_id, period);
    }
}

module.exports = new MintmarkService();
