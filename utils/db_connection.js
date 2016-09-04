const {
  sequelize,
  config
} = require('sp-load');

const dbConnection = new sequelize(...config.dbConnection);

module.exports = dbConnection;