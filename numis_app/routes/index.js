const express = require('express');

const router = express.Router();

const CoinController = require('../controller/coin');
const CoinImageController = require('../controller/coinimage');
const CoinMintmarkController = require('../controller/coinmintmark');
const CoinsetController = require('../controller/coinset');
const CoinsetCoinController = require('../controller/coinsetcoin');
const CollectionController = require('../controller/collection');
const CountryController = require('../controller/country');
const CurrencyController = require('../controller/currency');
const CurrencyCountryController = require('../controller/currencycountry');
const DesignerController = require('../controller/designer');
const GradeController = require('../controller/grade');
const ImageController = require('../controller/image');
const MintController = require('../controller/mint');
const MintmarkController = require('../controller/mintmark');
const ShapeController = require('../controller/shape');


// Coin
router.post('/coin', CoinController.createCoin);

// Coin Image
router.post('/coinImage', CoinImageController.createCoinImage);

// Coin Mintmark
router.post('/coinMintmark', CoinMintmarkController.createMintmark);

// Coinset
router.post('/coinset', CoinsetController.createCoinset);

// Coinset Coin
router.post('/coinsetCoin', CoinsetCoinController.createCoinsetCoin);

// Collection
router.post('/collection', CollectionController.createCollection);

// Country
router.post('/country', CountryController.createCountry);
router.get('/country', CountryController.getCountries)

// Currency
router.post('/currency', CurrencyController.createCurrency);

// Currency Country
router.post('/currencyCountry', CurrencyCountryController.createCurrencyCountry);

// Designer
router.post('/designer', DesignerController.createDesigner);

// Grade
router.post('/grade', GradeController.createGrade);

// Image
router.post('/image', ImageController.createImage);

// Mint
router.post('/mint', MintController.createMint);

// Mintmark
router.post('/mintmark', MintmarkController.createMintmark);

// Shape
router.post('/shape', ShapeController.createShape);


router.get('/', function (_req, res, _next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
