const designerDAO = require('../dao/designer');

class DesignerService {
    createDesigner(designerDto) {
        const {
            name,
            comment
        } = designerDto;
        return designerDAO.createDesigner(name,
            comment);
    }
}

module.exports = new DesignerService();
