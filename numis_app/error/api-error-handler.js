const ApiError = require('./ApiError');

function apiErrorHandler(err,req,res,next) {

// don't do console.error/.log in prod since it isn't async.
console.error(err);

if (err instanceof ApiError){
res.status(err.code).json(err.message);
return;
}

res.status(500).json(appstrings.Gen_500);

}

module.exports = apiErrorHandler;
