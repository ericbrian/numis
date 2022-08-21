const shapeDAO = require('../dao/shape');

class ShapeService {
    createShape(shapeDto) {
        const { name } = shapeDto;
        return shapeDAO.createShape(name);
    }
}

module.exports = new ShapeService();
