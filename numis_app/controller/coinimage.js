class CoinImageController {
    async createCoinImage(req, res) {
        try {
            const id = await coinImageService.createCoinImage(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new CoinImageController();
