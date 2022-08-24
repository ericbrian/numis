const express = require('express');
const appstrings = require('../appstrings');

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
router.get('/coins', CoinController.getCoins)
router.post('/coin', CoinController.createCoin);

// Coin Image
router.get('/coinImages/:coin_id', CoinImageController.getCoinImagesByCoinId)
router.post('/coinImage', CoinImageController.createCoinImage);

// Coin Mintmark
router.get('/coinMintmarks/:coin_id', CoinMintmarkController.getCoinMintmarks)
router.post('/coinMintmark', CoinMintmarkController.createCoinMintmark);

// Coinset
router.get('/coinsets', CoinsetController.getCoinsets)
router.post('/coinset', CoinsetController.createCoinset);

// Coinset Coin
router.get('/coinsetcoins/:coinset_id', CoinsetCoinController.getCoinsetcoins)
router.post('/coinsetCoin', CoinsetCoinController.createCoinsetCoin);

// Collection
router.get('/collections', CollectionController.getCollections)
router.post('/collection', CollectionController.createCollection);

// Country
router.get('/countries', CountryController.getCountries)
router.post('/country', CountryController.createCountry);

// Currency
router.get('/currencies', CurrencyController.getCurrencies)
router.post('/currency', CurrencyController.createCurrency);

// Currency Country
router.get('/currencyCountries/:currency_id', CurrencyCountryController.getCurrencyCountries)
router.get('/countryCurrencies/:country_id', CurrencyCountryController.getCountryCurrencies)
router.post('/currencyCountry', CurrencyCountryController.createCurrencyCountry);

// Designer
router.get('/designers', DesignerController.getDesigners)
router.post('/designer', DesignerController.createDesigner);

// Grade
router.get('/grades', GradeController.getGrades)
router.post('/grade', GradeController.createGrade);

// Image
router.get('/images/:coin_id', ImageController.getImages)
router.post('/image', ImageController.createImage);

// Mint
router.get('/mints', MintController.getMints)
router.post('/mint', MintController.createMint);

// Mintmark
router.get('/mintmarks/:country_id', MintmarkController.getMintmarksForCountry)
router.post('/mintmark', MintmarkController.createMintmark);

// Shape
router.get('/shapes', ShapeController.getShapes)
router.post('/shape', ShapeController.createShape);

//
router.get('/', function (_req, res, _next) {
    res.render('index', {
        title: appstrings.app_name
    });
});

module.exports = router;
