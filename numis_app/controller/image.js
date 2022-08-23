const imageService = require('../service/image');
const appStrings = require('./appstrings');

class ImageController {

    async getImages(req, res) {
        try {
            const items = await gradeService.getImages(req.params.coin_id);
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createImage(req, res) {
        try {
            const id = await imageService.createImage(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new ImageController();
