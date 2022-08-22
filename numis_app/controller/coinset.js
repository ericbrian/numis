class CoinsetController {
    async createCoinset(req, res) {
        try {
            const id = await coinsetService.createCoinset(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new CoinsetController();
