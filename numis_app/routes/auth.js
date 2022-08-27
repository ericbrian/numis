const express = require('express');
const passport = require('passport');
const appstrings = require('../appstrings');

const router = express.Router();

router.get('/failure', function (_req, res, _next) {
    res.render('auth-failure', {
        title: appstrings.app_name
    });
})
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

module.exports = router;
