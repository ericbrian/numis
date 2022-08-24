const designerDAO = require('../dao/designer');

class DesignerService {

    getDesigners() {
        return designerDAO.getDesigners();
    }

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
