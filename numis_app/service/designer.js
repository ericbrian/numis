const designerDAO = require('../dao/designer');

class DesignerService {

    getDesigner() {
        return designerDAO.getDesigner();
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
