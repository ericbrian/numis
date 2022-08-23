const mintmarkService = require('../service/mintmark');
const appStrings = require('./appstrings');

class MintmarkController {

    async getMintmarksForCountry(req, res) {
        try {
            const items = await mintmarkService.getMintmarksForCountry(req.params.country_id);
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createMintmark(req, res) {
        try {
            const id = await mintmarkService.createMintmark(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new MintmarkController();
