class MintmarkController {
    async createMintmark(req, res) {
        try {
            const id = await mintmarkService.createMintmark(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new MintmarkController();
