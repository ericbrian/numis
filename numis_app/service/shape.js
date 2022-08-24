const shapeDAO = require('../dao/shape');

class ShapeService {

    getShapes() {
        return shapeDAO.getShapes();
    }

    createShape(shapeDto) {
        const {
            name
        } = shapeDto;
        return shapeDAO.createShape(name);
    }
}

module.exports = new ShapeService();
