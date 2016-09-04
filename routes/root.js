const {
    express,
    usersRoutes
  } = require('sp-load'),
  app = express.Router();

app.use(usersRoutes);

module.exports = app;