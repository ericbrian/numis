const shapeService = require('../service/shape');
const appStrings = requre('./appstrings');

class ShapeController {

    async getShapes(_req, res) {
        try {
            const items = await shapeService.getShapes();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createShape(req, res) {
        try {
            const id = await shapeService.createShape(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new ShapeController();
