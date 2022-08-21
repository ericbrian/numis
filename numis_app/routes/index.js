const express = require('express');
const ShapeController = require('../controller/shape');
const router = express.Router();

router.post('/shape', ShapeController.createShape)

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
