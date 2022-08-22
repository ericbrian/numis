class CountryController {
    async createCountry(req, res) {
        try {
            const id = await countryService.createCountry(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new CountryController();
