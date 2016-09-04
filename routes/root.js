const $ = require('sp-load'),
  app = $.express.Router();

app.use('/api', $.usersRoutes);

module.exports = app;