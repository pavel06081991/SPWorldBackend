const $ = require('sp-load');

const sequelize = new $.sequelize('spworld', 'root', '2775422', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


module.exports = {
  sequelize: sequelize
};