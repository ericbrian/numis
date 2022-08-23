const gradeService = require('../service/grade');
const appStrings = requre('./appstrings');

class GradeController {

    async getGrades(_req, res) {
        try {
            const items = await gradeService.getGrades();
            res.status(200).json(items);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }

    async createGrade(req, res) {
        try {
            const id = await gradeService.createGrade(req.body);
            res.status(200).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json(appStrings.GENERIC_500);
        }
    }
}

module.exports = new GradeController();
