function validateRoute(req, res) {
  let validationPromise = req.asyncValidationErrors();

  validationPromise.catch(function(errors) {
    res.json(errors);
  });

  return validationPromise;
}

module.exports = {
  validateRoute
};