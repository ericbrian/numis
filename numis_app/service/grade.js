const gradeDAO = require('../dao/grade');

class GradeService {

    getGrades() {
        return gradeDAO.getGrades();
    }

    createGrade(gradeDto) {
        const { name, short_name, sort_order } = gradeDto;
        return gradeDAO.createGrade(name, short_name, sort_order);
    }
}

module.exports = new GradeService();
