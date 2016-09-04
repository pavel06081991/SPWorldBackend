const {
  usersModel,
  bcrypt
} = require('sp-load');

const validators = {
  isLoginFree: function (login) {
    return new Promise(function (resolve, reject) {
      usersModel.findOne({
        where: {login}
      })
      .then(function (user) {
        if (user) {
          reject(user);
        } else {
          resolve(user);
        }
      })
      .catch(function (error) {
        if (error) {
          reject(error);
        }
      });
    });
  },

  isUserCredentialValid: function(login, password) {
    return new Promise(function (resolve, reject) {
      usersModel.findOne({
        where: {login}
      })
      .then(function (user) {
        if (!user) {
          reject(user);
        }

        if (bcrypt.compareSync(password, user.password)) {
          resolve(user);
        } else {
          reject(user);
        }
      })
      .catch(function (error) {
        if (error) {
          reject(error);
        }
      });
    });
  }
};


module.exports = validators;