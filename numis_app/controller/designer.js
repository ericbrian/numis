const designerService = require('../service/designer');
const appStrings = requre('./appstrings');

class DesignerController {
    async getDesigners(req, res) {
        try {
            const items = await designerService.getDesigners(req.body);
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createDesigner(req, res) {
        try {
            const id = await designerService.createDesigner(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new DesignerController();
