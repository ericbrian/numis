const mintmarkDAO = require('../dao/mintmark');

class MintmarkService {

    getMintmarks() {
        return mintmarkDAO.getMintmarks();
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
