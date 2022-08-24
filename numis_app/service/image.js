const imageDAO = require('../dao/image');

class ImageService {

    getImages() {
        return imageDAO.getImages();
    }

    createImage(imageDto) {
        const {
            url,
            base64encoding,
            copyright,
            description
        } = imageDto;
        return imageDAO.createImage(url,
            base64encoding,
            copyright,
            description);
    }
}

module.exports = new ImageService();
