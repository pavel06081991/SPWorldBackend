const {
  dbConnection,
  sequelize
} = require('sp-load');

const usersModel = dbConnection.define('users', {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: sequelize.STRING
  },
  login: {
    type: sequelize.STRING,
    unique: true
  },
  password: {
    type: sequelize.STRING
  }
}, {
  freezeTableName: true
});

module.exports = usersModel;