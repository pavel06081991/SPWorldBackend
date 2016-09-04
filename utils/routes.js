const $ = require('sp-load');

function validateRoute(req, res, successCallback) {
  req.asyncValidationErrors().then(successCallback, function(errors) {
    res.json(errors);
  });
}

module.exports = {
  validateRoute: validateRoute
};