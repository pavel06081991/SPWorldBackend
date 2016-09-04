const $ = require('sp-load');

const user = $.dbUtils.sequelize.define('users', {
  id: {
    type: $.sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: $.sequelize.STRING
  },
  login: {
    type: $.sequelize.STRING
  },
  password: {
    type: $.sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = {
  user: user
};