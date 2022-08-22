const mintDAO = require('../dao/mint');

class MintService {
    createmint(mintDto) {
        const {
            name,
            location,
            country_id
        } = mintDto;
        return mintDAO.createmint(name,
            location,
            country_id);
    }
}

module.exports = new MintService();
