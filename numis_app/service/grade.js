const gradeDAO = require('../dao/grade');

class GradeService {
    createGrade(gradeDto) {
        const {
            name,
            short_name,
            sort_order
        } = gradeDto;
        return gradeDAO.createGrade(name,
            short_name,
            sort_order);
    }
}

module.exports = new GradeService();
