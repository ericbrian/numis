const ApiError = require('./ApiError');
const appStrings = require('../appstrings');

function apiErrorHandler(err, _req, res, _next) {

    // don't do console.error/.log in prod since it isn't async.
    console.error(err);

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return;
    }

    res.status(500).json(appStrings.GENERIC_500);
}

module.exports = apiErrorHandler;
