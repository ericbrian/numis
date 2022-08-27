const engraverDAO = require('../dao/engraver');

class EngraverService {

    getEngravers() {
        return engraverDAO.getEngravers();
    }

    createEngraver(engraverDto) {
        const {
            name,
            comment
        } = engraverDto;
        return engraverDAO.createEngraver(name,
            comment);
    }
}

module.exports = new EngraverService();
