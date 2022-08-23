const mintService = require('../service/mint');
const appStrings = requre('./appstrings');

class MintController {

    async getMints(_req, res) {
        try {
            const items = await mintService.getMints();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createMint(req, res) {
        try {
            const id = await mintService.createMint(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new MintController();
