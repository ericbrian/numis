const mintDAO = require('../dao/mint');

class MintService {

    getMints() {
        return mintDAO.getMints();
    }

    createMint(mintDto) {
        const { name, location, country_id } = mintDto;
        return mintDAO.createMint(name, location, country_id);
    }
}

module.exports = new MintService();
