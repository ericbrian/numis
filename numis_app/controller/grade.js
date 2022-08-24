const gradeService = require('../service/grade');
const appStrings = require('../appstrings');
const ApiError = require('../error/ApiError');

class GradeController {

    async getGrades(_req, res, next) {
        try {
            const items = await gradeService.getGrades();
            res.status(200).json(items);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }

    async createGrade(req, res, next) {
        try {
            const id = await gradeService.createGrade(req.body);
            res.status(201).json(id);
        } catch (err) {
            next(ApiError.internal(appStrings.GENERIC_500));
            return;
        }
    }
}

module.exports = new GradeController();
